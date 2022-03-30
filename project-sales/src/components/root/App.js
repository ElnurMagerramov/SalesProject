import React from "react";
import Login from "../login/Login";
import LoginCreateAccount from "../login/LoginCreateAccount";
import LoginForgetPassword from "../login/LoginForgetPassword";
import { Route, Switch } from 'react-router-dom'
import TermAndConditions from "../login/TermAndConditions";
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
import Navi from "../navbar/Navi";
import About from "../about/About";
import Footer from "../Footer/Footer";
import Contact from "../contact/Contact";
import CategoriesAndProducts from "./CategoriesAndProducts";
import ProductPagination from "../products/ProductPagination";
import Categories from "../categories/Categories";

function App() {
  return (
    <div className="App">
      <Navi/>
      <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} /> 
        <Route exact path="/categoriesAndProducts" component={CategoriesAndProducts}/>
        <Route  exact path="/categories" component={Categories} />
        <Route  exact path="/products" component={ProductPagination} />
        <Route exact path="/login/forgetpassword" component={LoginForgetPassword} />
        <Route exact path="/createaccount" component={LoginCreateAccount} />
        <Route exact path="/createaccount/termandconditions" component={TermAndConditions}/>
        <Route path="/" exact component={Dashboard} />
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
        <Route path="/saveproduct" component={AddOrUpdateProduct} />
        <Route path="/cart"  component={CartDetail} />
        <Route component={NotFound} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
