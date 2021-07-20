import FilterItem from '../FilterItem';

import { Filters as Container, ListFilter } from './styled';

function Filters({ filters } : any) : JSX.Element {
	return (
		<Container>
			<ListFilter data-testid="filters-test">
				{filters.map((f: any) => (
					<FilterItem key={f.id} label={f.label} />
				))}
			</ListFilter>
		</Container>
	);
}

export default Filters;
