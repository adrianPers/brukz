
import styles from './Slide.module.css'
import { Swiper} from 'swiper/react'

import { useState, useEffect } from 'react'

const Slide = (props) => {

    const [slidePerView, setSlidePerView] = useState(4)

    useEffect(() =>{
        const handleresize = () => {
            if(window.innerWidth < 720){
                setSlidePerView(1)
            } else {
                setSlidePerView(4)
            }
        }

        handleresize()

        window.addEventListener('resize', handleresize)

        return () => {
            window.removeEventListener('resize', handleresize)
        }

    }, [])

    return(
        <div className={styles.boxSlide}>
            <h2>Produtos</h2>
            <Swiper
                slidesPerView={slidePerView}
                pagination={{ clickable: true }}
                navigation
            >
                {props.children}
            </Swiper>
        </div>
    )
}

export default Slide