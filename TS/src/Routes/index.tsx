import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Screens
import ProductPage from '../pages/products';
import ProductDetails from '../pages/productDetails';
import Ops404 from '../pages/404';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={ProductPage} />
				<Route path="/product-detail/:id" component={ProductDetails} />
				<Route path="*" component={Ops404} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
