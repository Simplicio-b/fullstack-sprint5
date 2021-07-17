import { useContext, useEffect, useState } from "react";

// contextos
import FilterContext from "../../contexts/FilterContext";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";

//service
import ProductsService from "../../services/ProductsService";

// Components
import Breadcrumbs from "../../components/Breadcrumbs";
import Filters from "../../components/Filters";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Product from "../../components/Product";

import {
    Container
} from "../../components/GlobalComponents"

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState([]);

    const { filter } = useContext(FilterContext);
    const { addRequest, removeRequest } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);

    // eslint-disable-next-line
    useEffect(() => loadProducts(), []);

    function loadProducts() {
        addRequest();
        ProductsService.get()
            .then(r => {
                setProducts(r.products);
                setFilters(r.filters);
            })
            .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
            .finally(() => removeRequest());
    }

    return (
        <>
            <Header />

            <Container>
                <Breadcrumbs></Breadcrumbs>
                <Filters filters={filters}></Filters>
                <section className="main__products products">
                    <div className="products__row">
                        <ol className="products__list">
                            {
                                products
                                .filter(p =>
                                    filter ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1 : true)
                                .map(
                                    p => 
                                        <Product  
                                            image={p.image} 
                                            name={p.name} 
                                            price={p.price} 
                                            sku={p.sku} 
                                        />
                                )
                            }
                        </ol>
                    </div>
                </section>
            </Container>
            
            <Footer />
        </>
    );
}

export default ProductsPage;