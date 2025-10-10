
import { Navigation } from "swiper/modules";
import Page from "../../components/Page/Page";
// import ImgProduct from "";
import styles from "./Products.module.css";
import { useParams } from "react-router";

import { Swiper, SwiperSlide } from "swiper/react"

// Icons
import { BsShare } from "react-icons/bs"

// hooks
import { useState, useEffect } from "react";

import { getProducts, getOnlyProduct } from "../../services/api";

const Products = () => {

        const [product, setProduct] = useState();

        const { name } = useParams();


    
        useEffect(() => {
    
            const fetchProduct = async () => {
                const response = await getOnlyProduct(name);
                setProduct(response);
            }

            if(name){

                fetchProduct();
                console.log('carregou')
            }
    
    
    
        }, []);

    return (
        <div className={styles.Products}>
            <Page>
               {product && ( <div className={styles.boxProduct}>
                    <div className={styles.boxImgsProduct}>

                        <Swiper pagination={{clickable:true}}>
                            {product.images.map((imageUrl) => (
                                <SwiperSlide>
                                    <img alt="image" src={imageUrl} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                       
                    </div>

                    <div className={styles.boxInfoProduct}>

                        <p> Home . {product.subcategory} . {product.mark} . {product.title}</p>

                        <h2>{product.title}</h2>
                        <div className={styles.infoPrice}>

                            <p>
                                <span className={styles.price}>
                                    R${product.price.toString().replace(".", ",")}
                                </span>
                                -50% off
                            </p>

                            <span className={styles.priceOri}>R$504,99</span>

                            <p>
                                <span className={styles.pricePix}>R$260,99</span>
                                com Pix.
                            </p>

                            <p> ou 12x de R$28,99</p>

                            <button className={styles.paymentDetails}>
                                opções depagamento
                            </button>


                        </div>

                        <div className={styles.boxSize}>

                            <span>Tamanho: </span>
                            <div className={styles.boxBtnsSize}>
                                <button className={styles.btnSize}>37</button>
                                <button className={styles.btnSize}>38</button>
                                <button className={styles.btnSize}>39</button>
                                <button className={styles.btnSize}>40</button>
                                <button className={styles.btnSize}>41</button>
                                <button className={styles.btnSize}>42</button>
                                <button className={styles.btnSize}>43</button>
                            </div>
                        </div>


                        <div className={styles.boxBuy}>
                            <button className={styles.btnQuant}>-</button>
                            <span className={styles.amount}>1</span>
                            <button className={styles.btnQuant}>+</button>
                            <button className={styles.btnBuy}>Comprar</button>
                        </div>

                        <button className={styles.btnFreight}>
                            <span>Meios de envio</span>
                            <span>+</span>
                        </button>

                        <div className={styles.boxFreight}>
                            <input type="text" placeholder="Digite seu CEP" />
                            <button>Calcular</button>
                            <p>
                                <a target="_blank" href="#">
                                    não sei meu CEP
                                </a>
                            </p>
                        </div>

                        <a href="#" className={styles.toShare}>
                            <BsShare /> Compartilhar
                        </a>

                    </div>
                </div>)}
            </Page>
        </div>
    )
}

export default Products;