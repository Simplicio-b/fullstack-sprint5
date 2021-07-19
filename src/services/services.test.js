import CategoriaService from './CategoriesService';
import ProductsService from './ProductsService';
import ServiceUtils from './ServiceUtils';

jest.mock('./ServiceUtils');

describe('Testando as funcoes de service', () => {
	it('Testando Service utils', async () => {});

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
