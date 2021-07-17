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
    LabelTxt,
    ProductImg,
    TamanhoBox 
} from "./styles"


//contexts
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";

//service
import ProductsService from "../../services/ProductsService";

import { useParams } from "react-router-dom"

function ProductDetails() {
    const [tamanho, setTamanhos] = useState({
        tamanhos: [4,5,6,7,8,9,10],
        selectTamanho: 4
    })
    const [products, setProducts] = useState(null);
    const { id } = useParams();

    const { addRequest, removeRequest } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);

    // eslint-disable-next-line
    useEffect(() => loadProducts(), []);

    useEffect(() => {
        const name = products ? products.name : "";
        const index = name.toLocaleUpperCase().indexOf("TAM");
        const tamanhos = name.substr(index + 3).replaceAll(" ", "");
        const tamanhoMin = parseInt(tamanhos.split("a")[0]);
        const tamanhoMax = parseInt(tamanhos.split("a")[1]);

        if(index !== -1) {
            let tam = []

            for(let i = tamanhoMin; tamanhoMax >= i; i++) {
                tam.push(i);
            }

            setTamanhos({ ...tamanho, tamanhos: tam, selectTamanho: tam[0] });
            return;
        }

        setTamanhos({ ...tamanho, tamanhos: [], selectTamanho: "Tamanho Unico" });
        return;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products])

    function loadProducts() {
        addRequest();
        ProductsService.get()
            .then(r => {
                setProducts(r.products.filter(p => p.sku === parseInt(id))[0]);
            })
            .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
            .finally(() => removeRequest());
    }

    return (
        <>
            <Header />

            <Container>
                <ContainerImg>
                    <ProductImg src={products && `../../${products.image}`} alt={products && products.name} />
                </ContainerImg>

                <ContainerInfo>
                    <LabelTxt cor="#222" fs="26" fw="700" >{products && products.name}</LabelTxt>

                    <div>
                        <LabelTxt cor="#222" fs="18">
                            Selecionar Tamanho:  
                            <span style={tamanho.selectTamanho === "Tamanho Unico" ? {color: "#d50000", marginLeft: 8 } : { marginLeft: 8 }} >
                                {tamanho.selectTamanho}
                            </span>
                        </LabelTxt>

                        <div style={{ display: "flex", flexWrap: "wrap" }} >
                            {tamanho.tamanhos.length !== 0 && 
                                tamanho.tamanhos.map(t => 
                                    <TamanhoBox key={t} onClick={() => setTamanhos({ ...tamanho, selectTamanho: t })}>
                                        <span 
                                            className={tamanho.selectTamanho === t ? "active" : ""} 
                                        >
                                            {t}
                                        </span>
                                    </TamanhoBox>
                                )
                            }
                        </div>
                    </div>

                    <BoxPrice>
                        <LabelTxt cor="#d50000" fs="24" fw="700" >R$ {products && products.price}</LabelTxt>

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
