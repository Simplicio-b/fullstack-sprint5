import { Link } from 'react-router-dom';
import { Container, Title, Subtitle, Img } from './styles';


import img404 from '../../assets/404.svg';

function Ops404() {
	return (
		<Container>
			<Img src={img404} alt="Error 404" />

			<Title>Pagina não encontrada!</Title>

			<Subtitle>
				Volte para a{' '}
				<Link to="/" className="link">
					pagina principal
				</Link>
			</Subtitle>
		</Container>
	);
}

export default Ops404;
