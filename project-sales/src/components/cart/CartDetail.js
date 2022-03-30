import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from "reactstrap";
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions"
import alertify from "alertifyjs";
class CartDetail extends Component {
    addToCart = (product) => {
        this.props.actions.addToCart({ quantity: product.quantity, product })

    }
    removeFromCart=(product)=>{
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " removed from cart!")
    }
    render() {

        return (
            <div className='container'>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cart.map(
                                CartItem => (
                                    <tr key={CartItem.product.id}>
                                        <th scope="row">{CartItem.product.id}</th>
                                        <td>{CartItem.product.productName}</td>
                                        <td>{CartItem.product.unitPrice}</td>
                                        <td>{CartItem.quantity}</td>
                                        <td><Button onClick={() => this.props.actions.addToCart(CartItem)} color="primary">+</Button></td>
                                        <td><Button onClick={() => this.removeFromCart(CartItem.product)} color="danger">-</Button></td>
                                    </tr>
                                )
                            )
                        }

                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
            addToCart: bindActionCreators(
                cartActions.addToCart,
                dispatch
            ),
        }
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cartReducer,
        products: state.productListReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)