import { useContext, useEffect, useState } from "react";

// contextos
import FilterContext from "../../contexts/FilterContext";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import ProductsService from "../../services/ProductsService";

// Components
import Breadcrumbs from "./components/Breadcrumbs";
import Filters from "./components/Filters";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Link } from "react-router-dom"

function Product({ image, name, price }) {
    return (
        <li className="products__card card">
            <div className="card">
                <img className="card__img" src={image} alt="" />
                <p className="card__description">
                    {name}
                </p>
                <p className="card__price">
                    R$ {price}
                </p>
            </div>
        </li>
    );
}

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

            <main className="main">
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
                                    p => (
                                        <Link key={p.sku} to={`product-detail/${p.sku}`}>
                                            <Product  image={p.image} name={p.name} price={p.price} />
                                        </Link>
                                    )   
                                )
                            }
                        </ol>
                    </div>
                    <div className="products__row">
                        <ol className="products__list">
                        </ol>
                    </div>
                </section>
            </main>
            
            <Footer />
        </>
    );
}

export default ProductsPage;