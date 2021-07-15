import { useEffect, useState } from 'react';

import useLoading from '../hooks/useLoading';
import CategoriesContext from './CategoriesContext';
import FilterContext from './FilterContext';
import LoadingContext from './LoadingContext';
import MessageContext from './MessageContext';


import CategoriesService from '../services/CategoriesService';

function Provider({ children }) {
    const [filter, setFilter] = useState('');
    const [message, setMessage] = useState('');
    const [categories, setCategories] = useState({});
    const [addRequest, removeRequest, isLoading] = useLoading();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => loadCategories(), []);

    function loadCategories() {
      addRequest();
      CategoriesService.get()
        .then(c =>  setCategories(c))
        .catch(() => setMessage("Ocorreu um erro ao carregar as categorias..."))
        .finally(() => removeRequest());
    }

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
    )
}

export default Provider;
