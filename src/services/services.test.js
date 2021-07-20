import CategoriaService from './CategoriesService';
import ProductsService from './ProductsService';
import ServiceUtils from './ServiceUtils';

jest.mock('./ServiceUtils');



describe('Testando as funcoes de service', () => {
	it('Testando Service utils', async () => {
		const val = await ServiceUtils.handleResponse.mockReturnValue(
			new Promise((resolve, reject) => {
				try {
					resolve({ teste: 'cuzcus' })
				}catch(e) {
					reject(new Error('Error'))
				}
			})
		)

		console.log(val.mock)

		// expect(await val).toBe({ teste: 'cuzcus' })

	});

	it('Testando categorias service', async () => {
		const res = {
			all: [
				{
					id: 7,
					label: 'Acessórios e Relógios',
					link: '#home',
				},
			],
			current: [
				{
					id: 10,
					label: 'Cuzcus',
					link: '#home',
				},
			],
		};

		ServiceUtils.handleResponse.mockReturnValue(res);
		const categorias = CategoriaService.get();

		expect(res).toBe(categorias);
	});

	it('Testando product service', async () => {
		const res = {
			all: [
				{
					id: 7,
					label: 'Acessórios e Relógios',
					link: '#home',
				},
			],
			current: [
				{
					id: 10,
					label: 'Cuzcus',
					link: '#home',
				},
			],
		};

		ServiceUtils.handleResponse.mockReturnValue(res);
		const products = ProductsService.get();

		expect(res).toBe(products);
	});
});
