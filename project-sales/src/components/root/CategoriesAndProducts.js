import React, { Component } from 'react'

import {Row,Col, Container} from "reactstrap"
import CategoryList from "../categories/CategoryList"

import ProductList from "../products/ProductList"

export default class CategoriesAndProducts extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h2 className='text-center'>All orders</h2>
                <Row>
                <Col xs="3">
                    <CategoryList/>
                </Col>
                <Col xs="9">
                    <ProductList/>
                </Col>
                </Row>
                </Container>
            </div>
        )
    }
}
