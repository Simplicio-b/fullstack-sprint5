import { render, screen } from '@testing-library/react';
import BreadcrumbsItem from './index';

describe('Teste component BreadcrumbItem', () => {
	it('Teste de renderisacao', () => {
		render(<BreadcrumbsItem link="#home" label="Home" />);

		expect(screen.getByText('Home')).toBeInTheDocument();
	});

	it('Teste de snapshot BreadcrumbItem', () => {
		const { container } = render(<BreadcrumbsItem link="#home" label="Home" />);

		expect(container.firstChild).toMatchSnapshot();
	});
});
