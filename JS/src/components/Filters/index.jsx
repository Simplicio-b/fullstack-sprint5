import FilterItem from '../FilterItem';

import { Filters as Container, ListFilter } from './styled';

function Filters({ filters }) {
	return (
		<Container>
			<ListFilter data-testid="filters-test">
				{filters.map((f) => (
					<FilterItem key={f.id} label={f.label} />
				))}
			</ListFilter>
		</Container>
	);
}

export default Filters;
