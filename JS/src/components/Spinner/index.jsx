import { useContext } from 'react';
import LoadingContext from '../../contexts/LoadingContext';
import './Spinner.css';

function Spinner() {
	const { isLoading } = useContext(LoadingContext);

	return isLoading() && <div className="loading" />;
}

export default Spinner;
