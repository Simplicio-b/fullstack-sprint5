import { Link } from 'react-router-dom';

import { ProductsCard, Card, ProductImg } from './styles';

function Product({ image, name, price, sku }) {
	return (
		<ProductsCard>
			<Link to={`product-detail/${sku}`}>
				<Card>
					<ProductImg className="card__img" src={image} alt="" />
					<p className="card__description">{name}</p>
					<p className="card__price" data-testid="product-price-testid">
						R$ {price}
					</p>
				</Card>
			</Link>
		</ProductsCard>
	);
}

export default Product;
