
import styles from "./app.module.css";
// import { useState } from "react";

// // Components
// import { Swiper, SwiperSlide } from "swiper/react";
import RoutesApp from "./router.jsx";

const App = () => {

  return (
    <div className={styles.app}>

      <RoutesApp />

    </div>
  )

}

export default App;
