
import Page from "../../components/Page/Page";
// import ImgProduct from "";
import styles from "./Products.module.css";
// import { useParams } from "react-router";

const Products = () => {

    //     const teste = {
    //     "id" : 1,
    //     "title" : "Air Max Plus Tn 'Black' Ori pai!!!",
    //     "price" : "222.32", 
    //     "target" : "Masculino",
    //     "category" : "calçados",
    //     "subcategory" : "Tênis Esportivo",
    //     "mark" : "Nike",
    //     "variations": [
    //         {
    //             "color": "Preto",
    //             "sizes": [
    //                 38, 39, 40, 41, 42
    //             ]
    //         },
    //         {
    //             "color": "Branco e Azul",
    //             "sizes": [
    //                 37, 38, 40, 43
    //             ]
    //         }
    //     ],
    //     "images" : [
    //         "https://",
    //         "https://",
    //         "https://",
    //         "https://"
    //     ]
    // }

    return (
        <div className={styles.Products}>
            <Page>
                <div className={styles.boxProduct}>
                    <div className={styles.boxImgsProduct}>
                        <img alt="tn pai"
                            src="https://acdn-us.mitiendanube.com/stores/005/592/482/products/6613250e-042a-4267-89df-e0e0f0f2ce80-7bc708430eaa87da2717497508470086-1024-1024.webp" />
                    </div>

                    <div className={styles.boxInfoProduct}>

                        <p>Início . Nike . Air Max Tn . Air Max Tn "Black Metalic"</p>

                        <h2>Air Max Plus Tn "Black" Ori pai!!!</h2>
                        <div className={styles.infoPrice}>

                            <p>
                                <span className={styles.price}>R$289,99</span>
                                -52% off
                            </p>

                            <span className={styles.priceOri}>R$599,99</span>

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
                            icon Compartilhar
                        </a>

                    </div>
                </div>
            </Page>
        </div>
    )
}

export default Products;