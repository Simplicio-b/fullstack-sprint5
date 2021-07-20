import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
	Container,
	ContainerImg,
	ContainerInfo,
	BoxPrice,
	Btn,
	LabelTxt,
	ProductImg,
	TamanhoBox,
	ContentTamanhos,
	ContentBtns,
} from './styles';

// contexts
import LoadingContext from '../../contexts/LoadingContext';
import MessageContext from '../../contexts/MessageContext';

// service
import ProductsService from '../../services/ProductsService';

function ProductDetails() : JSX.Element {
	const [tamanho, setTamanhos] = useState<any>({
		tamanhos: [],
		selectTamanho: 0,
	});

	const [products, setProducts] = useState<any>(null);
	const { id } = useParams<{ id: string }>();

	const { addRequest, removeRequest } = useContext(LoadingContext);
	const { setMessage } = useContext(MessageContext);

	// eslint-disable-next-line
	useEffect(() => loadProducts(), []);

	// eslint-disable-next-line
	useEffect(() => {
		const name = products ? products.name : '';
		const index = name.toLocaleUpperCase().indexOf('TAM');

		if (index !== -1) {
			const tamanhos = name
				.substr(index + 3)
				.split('a')
				.map((t: string) => parseInt(t, 10));

			const tam = [];

			// eslint-disable-next-line no-plusplus
			for (let i = tamanhos[0]; tamanhos[1] >= i; i++) {
				tam.push(i);
			}

			setTamanhos({ ...tamanho, tamanhos: tam, selectTamanho: tam[0] });
			return;
		}

		setTamanhos({ ...tamanho, tamanhos: [], selectTamanho: 'Tamanho Unico' });
	}, [products]);

	function loadProducts() {
		addRequest();
		ProductsService.get()
			.then((r: any) => {
				setProducts(r.products.filter((p: any) => p.sku === parseInt(id, 10))[0]);
			})
			.catch(() => setMessage('Ocorreu um erro ao carregar os produtos...'))
			.finally(() => removeRequest());
	}

	return (
		<>
			<Header />

			<Container>
				<ContainerImg>
					<ProductImg
						src={products && `../../${products.image}`}
						alt={products && products.name}
					/>
				</ContainerImg>

				<ContainerInfo>
					<LabelTxt cor="#222" fs="26" fw="700">
						{products && products.name}
					</LabelTxt>

					<div>
						<LabelTxt cor="#222" fs="18" fw="">
							Selecionar Tamanho:
							<span
								style={
									tamanho.selectTamanho === 'Tamanho Unico'
										? { color: '#d50000', marginLeft: 8 }
										: { marginLeft: 8 }
								}
							>
								{tamanho.selectTamanho}
							</span>
						</LabelTxt>

						<ContentTamanhos>
							{tamanho.tamanhos.length !== 0 &&
								tamanho.tamanhos.map((t: any) => (
									<TamanhoBox
										key={t}
										onClick={() =>
											setTamanhos({ ...tamanho, selectTamanho: t })
										}
									>
										<span
											className={tamanho.selectTamanho === t ? 'active' : ''}
										>
											{t}
										</span>
									</TamanhoBox>
								))}
						</ContentTamanhos>
					</div>

					<BoxPrice>
						<LabelTxt cor="#d50000" fs="24" fw="700">
							R$ {products && products.price}
						</LabelTxt>

						<ContentBtns>
							<Btn bg="#008000" mb="12">
								ADICIONAR À SACOLA
							</Btn>

							<Btn bg="#d50000" mb="0">CANCELAR</Btn>
						</ContentBtns>
					</BoxPrice>
				</ContainerInfo>
			</Container>

			<Footer />
		</>
	);
}

export default ProductDetails;
