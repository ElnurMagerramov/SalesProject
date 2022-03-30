import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import { FaArrowRight,FaGem,FaHome,FaEnvelope,FaPhone,FaPrint } from 'react-icons/fa';
import { NavLink } from 'reactstrap';

class Footer extends Component {
    componentDidMount() {
        this.props.actions.getCategories();
    }
    selectCategory = category => {
        this.props.actions.getProducts(category.id)
    };
    render() {
        return (
            <div className='bg-info'>
                <footer className="text-center text-lg-start bg-light text-muted">
                    <section
                        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                    >
                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <div>
                            <Link to="/" className="me-4 text-reset">
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                            <Link to="/" className="me-4 text-reset">
                                <FontAwesomeIcon icon={faTwitter} />
                            </Link>
                            <Link to="/" className="me-4 text-reset">
                                <FontAwesomeIcon icon={faGoogle} />
                            </Link>
                            <Link to="/" className="me-4 text-reset">
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                            <Link to="/" className="me-4 text-reset">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Link>
                            <Link to="/" className="me-4 text-reset">
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                        </div>
                    </section>
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <FaGem className='me-3 h5'/>  My Project
                                    </h6>
                                    <p>
                                     Laboriosam similique iure est cum, ad deleniti nesciunt corporis molestiae molestias placeat excepturi ea sit, esse facilis culpa. Iste delectus voluptatibus fugit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam vero accusantium minus quos nesciunt. Quaerat cumque officia itaque quasi velit, sequi ratione veniam dignissimos exercitationem soluta nihil commodi voluptatibus a?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique iure est cum, ad deleniti nesciunt corporis molestiae molestias placeat excepturi ea sit, esse facilis culpa. Iste delectus voluptatibus fugit
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Categories
                                    </h6>
                                    {
                                        this.props.categories.map(category => (
                                            <p>
                                                <NavLink className="text-decoration-none text-reset"
                                                    active={category.id === this.props.currentCategory.id}
                                                    onClick={() => this.selectCategory(category)}
                                                    key={category.id}
                                                >
                                                  <FaArrowRight/>  {category.categoryName}
                                                </NavLink>
                                            </p>
                                        ))
                                    }
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Useful links
                                    </h6>
                                    <p>
                                        <Link to="/" className="text-decoration-none text-reset">Pricing</Link>
                                    </p>
                                    <p>
                                        <Link to="/" className="text-decoration-none text-reset">Settings</Link>
                                    </p>
                                    <p>
                                        <Link to="/" className="text-decoration-none text-reset">Orders</Link>
                                    </p>
                                    <p>
                                        <Link to="/" className="text-decoration-none text-reset">Help</Link>
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Contact
                                    </h6>
                                    <p><FaHome className='me-3 h5'/> Baku, Hirdalan, Azerbaijan</p>
                                    <p>
                                        <FaEnvelope className='me-3 h5'/>
                                        elnur2370@gmail.com
                                    </p>
                                    <p><FaPhone className='me-3 h5'/> + 994 50 853 45 91</p>
                                    <p><FaPrint className='me-3 h5'/> + 01 234 567 89</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                        © 2021 Copyright: <b>Elnur Magerramov</b>
                    </div>
                </footer>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(
                categoryActions.getCategories,
                dispatch
            ),
            changeCategory: bindActionCreators(
                categoryActions.changeCategory,
                dispatch
            ),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);