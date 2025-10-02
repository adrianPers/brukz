
import styles from './header.module.css';

//  imagens
import logo from '../../assets/logo-bz.png';

import { useState } from 'react';
import { Link } from 'react-router';


// icons
import { BsCart2, BsList } from "react-icons/bs";


const Header = () => {

    const [menu, setMenu] = useState(false)

    return (
        <header className={styles.header}>

            <div className={styles.containerHeader}>


                <button
                    onClick={() => setMenu((m) => m = !menu)}>
                    <BsList />
                </button>

                <img className={styles.logoHeader}
                    src={logo}
                    alt='logo da loja'
                    title='logo da loja' 
                />

                <Link to='/carrinho'>
                    <button>
                        <BsCart2 />
                    </button>
                </Link>

                <nav
                    className={styles.menuHeader}
                    style={{ left: menu ? '0px' : '-101%' }}>
                    <ul>
                        <li className={styles.liBtnMenu}>
                            <button
                                onClick={() => setMenu((m) => m = !menu)}>
                                X
                            </button>
                        </li>
                        <li>
                            <Link to="/"> Home</Link>
                        </li>
                        <li>
                            <Link to="produtos"> Produtos</Link>
                        </li>
                        <li>
                            <a href="#">Prazo de Entregas</a>
                        </li>
                        <li>
                            <a href="#">Dúvidas</a>
                        </li>
                        <li>
                            <a href="#">Contatos</a>
                        </li>
                    </ul>
                </nav>

            </div>

        </header>
    )

}

export default Header