import { useState, useEffect, useContext } from "react"

// components
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import {
    Container,
    ContainerImg,
    ContainerInfo,
    BoxPrice,
    Btn,
    LabelPrice,
    LabelDesc,
    ProductImg
} from "./styles"


//contexts
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";

//service
import ProductsService from "../../services/ProductsService";

import { useParams } from "react-router-dom"

function ProductDetails() {
    const [products, setProducts] = useState(null);
    const { id } = useParams();

    const { addRequest, removeRequest } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);


    // eslint-disable-next-line
    useEffect(() => loadProducts(), []);

    function loadProducts() {
        addRequest();
        ProductsService.get()
            .then(r => {
                setProducts(r.products.filter(p => p.sku === parseInt(id))[0]);
            })
            .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
            .finally(() => removeRequest());
    }

    console.log(products)

    return (
        <>
            <Header />

            <Container>
                <ContainerImg>
                    <ProductImg src={products && `../../${products.image}`} alt={products && products.name} />
                </ContainerImg>

                <ContainerInfo>
                    <LabelDesc>{products && products.name}</LabelDesc>

                    <p>Selecionar Tamanho: </p>

                    <BoxPrice>
                        <LabelPrice>R$ {products && products.price}</LabelPrice>

                        <div style={{ width: "100%" }}>
                            <Btn bg="#008000" mb="12">
                                ADICIONAR À SACOLA
                            </Btn>
                            
                            <Btn bg="#d50000">
                                CANCELAR
                            </Btn>
                        </div>

                    </BoxPrice>
                </ContainerInfo>
            </Container>

            <Footer />
        </>
    );
}

export default ProductDetails;
