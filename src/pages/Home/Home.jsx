

import styles from "./Home.module.css";

// components
import Page from "../../components/Page/Page";
import Product from "../../components/Product/Product.jsx";



import { useState, useEffect } from "react";

// functions
import { getProducts } from "../../services/api.js";
// import Products from "../Products/Products.jsx";

import { Swiper, SwiperSlide } from "swiper/react";


// import imgsds from ''

const Home = () => {

    const [products, setProducts] = useState();

    useEffect(() => {

        const fetchProducts = async () => {
            const response = await getProducts();
            setProducts(response)
        }

        fetchProducts();

        console.log('carregou')

    }, []);

    return (
        <div className={styles.home} >
            <Page>

                <h2>Hoe</h2>

                <Swiper slidesPerView={4} pagination
                navigation={{clicable: true}}>
                    {products && (
                        products.map((product) => (
                            <div key={product.id}>
                                {<SwiperSlide>
                                    <Product
                                        name={product.name}
                                        title={product.title}
                                        category={product.category}
                                        subcategory={product.subcategory}
                                        price={product.price}
                                        imgUrl={product.images[0]}
                                    />
                                </SwiperSlide>}
                </div>)))}</Swiper>

                <h2>Produtos</h2>
                <Swiper slidesPerView={4} pagination
                navigation={{clicable: true}}>
                    {products && (
                        products.map((product) => (
                            <div key={product.id}>
                                {<SwiperSlide>
                                    <Product
                                        name={product.name}
                                        title={product.title}
                                        category={product.category}
                                        subcategory={product.subcategory}
                                        price={product.price}
                                        imgUrl={product.images[0]}
                                    />
                                </SwiperSlide>}
                </div>)))}</Swiper>

            </Page>
        </div>
    )
}

export default Home;