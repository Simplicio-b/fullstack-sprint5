import MenuLink from './styles';

function MenuItem({ label }: any) : JSX.Element {
	return (
		<li className="menu__item">
			<MenuLink href="#home">
				<span>{label}</span>
			</MenuLink>
		</li>
	);
}

export default MenuItem;
