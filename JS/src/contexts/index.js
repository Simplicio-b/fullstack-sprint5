import { useEffect, useState } from 'react';

import useLoading from '../hooks/useLoading';
import CategoriesContext from './CategoriesContext';
import FilterContext from './FilterContext';
import LoadingContext from './LoadingContext';
import MessageContext from './MessageContext';

import CategoriesService from '../services/CategoriesService';

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
	const [filter, setFilter] = useState('');
	const [message, setMessage] = useState('');
	const [categories, setCategories] = useState({});
	const [addRequest, removeRequest, isLoading] = useLoading();

	function loadCategories() {
		addRequest();
		CategoriesService.get()
			.then((c) => setCategories(c))
			.catch(() => setMessage('Ocorreu um erro ao carregar as categorias...'))
			.finally(() => removeRequest());
	}

	useEffect(() => loadCategories(), []);

	return (
		<FilterContext.Provider value={{ filter, setFilter }}>
			<LoadingContext.Provider value={{ addRequest, removeRequest, isLoading }}>
				<MessageContext.Provider value={{ message, setMessage }}>
					<CategoriesContext.Provider value={{ categories }}>
						{children}
					</CategoriesContext.Provider>
				</MessageContext.Provider>
			</LoadingContext.Provider>
		</FilterContext.Provider>
	);
}

export default Provider;
