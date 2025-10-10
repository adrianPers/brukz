
import styles from './Product.module.css'

// import ImgProduto from '../../assets/img-produto.jpg'
import { Link } from 'react-router'

const Product = ({ title, price, imgUrl, name }) => {
    return (
        <div className={styles.boxProduct}>
            <Link to={`/produtos/${name}`}>


                <button
                    className={styles.product}>

                    <div className={styles.containerImg}>
                        <img
                            className={styles.imgProduto}
                            src={imgUrl}
                            alt='imagem do produto'
                            title='imagem do produto'
                        />
                    </div>

                    <div className={styles.boxInfoProdutos}>
                        <p>{title}</p>
                        <h3>R$ {price}</h3>
                        <h4>R$ 269,00 com Pix</h4>
                        <span>R$ 300,00</span>
                    </div>

                </button>
            </Link>

        </div>
    )
}

export default Product