import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";


// Screens
import ProductPage from "../pages/products";
import ProductDetails from "../pages/productDetails";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ProductPage} />
                <Route path="/product-detail/:id" component={ProductDetails} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes

// lambda functions
// dynamo db
// serveless 