
import { useState } from 'react'

import styles from './app.module.css'

// import styles from './carrossel.module.css'
import RoutesApp from './router.jsx'

// // Components
// import { Swiper, SwiperSlide } from 'swiper/react'
// import Header from './components/Header/Header.jsx'
// import Product from './components/Product/product.jsx'



const App = () => {

  const [product, setProduct] = useState({
    name : 'Tete'
  })

  return (
    <div className={styles.app}>

      <RoutesApp
        product={{
          dataProduct: product,
          defProduct: setProduct
        }}
      />

    </div>
  )

}

export default App
