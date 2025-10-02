import styles from './Home.module.css'

// components
import Header from '../../components/Header/header.jsx'
// import Product from '../../components/Product/Product.jsx'
// import Slide from '../../components/Slide/Slide.jsx'

// import { useState } from 'react'

// functions
// import { getProducts } from '../../services/api.js';

// import { SwiperSlide } from 'swiper/react'


const Home = () => {



    return (
        <div className={styles.home} >
            <Header />

            {/* <button onClick={
                async () => console.log(await getProducts())
                
            }>Teste</button> */}

            {/* <Slide>

                 <SwiperSlide>
                    <Product
                        setProduct={props.setProduct}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Product
                        setProduct={props.setProduct}
                    />
                </SwiperSlide>
                 <SwiperSlide>
                    <Product
                        setProduct={props.setProduct}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Product
                        setProduct={props.setProduct}
                    />
                </SwiperSlide>
                 <SwiperSlide>
                    <Product
                        setProduct={props.setProduct}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Product
                        setProduct={props.setProduct}
                    />
                </SwiperSlide>
                 <SwiperSlide>
                    <Product
                        setProduct={props.setProduct}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Product
                        setProduct={props.setProduct}
                    />
                </SwiperSlide>
                 <SwiperSlide>
                    <Product
                        setProduct={props.setProduct}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Product
                        setProduct={props.setProduct}
                    />
                </SwiperSlide>

            </Slide> */}




        </div>
    )
}

export default Home