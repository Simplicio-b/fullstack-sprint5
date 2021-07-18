import { BreadcrumbItem as Container, Separator } from './styles';

function BreadcrumbItem({ link, label }) {
	return (
		<Container>
			{link ? (
				<>
					<a href={link}>{label}</a>
					<Separator>/</Separator>
				</>
			) : (
				<span>{label}</span>
			)}
		</Container>
	);
}

export default BreadcrumbItem;
