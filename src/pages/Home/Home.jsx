import styles from './Home.module.css'

// components
import Header from '../../components/Header/Header.jsx'
import Product from '../../components/Product/Product.jsx'
import Slide from '../../components/Slide/Slide.jsx'

// import { useState } from 'react'

import { SwiperSlide } from 'swiper/react'


const Home = (props) => {
    return (
        <div className={styles.home} >
            <Header />

            <Slide>

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

            </Slide>




        </div>
    )
}

export default Home