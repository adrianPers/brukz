
import styles from './Header.module.css';

//  imagens
import logo from '../../assets/logo-bz.png';

import { useState } from 'react';


// icons
import { BsCart2, BsList, BsX, BsPerson } from "react-icons/bs";


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

              
                    <button>
                        <BsCart2 />
                    </button>
    

                <nav
                    className={styles.menuHeader}
                    style={{ left: menu ? '-1px' : '-102%' }}>
                    <ul>
                        <li className={styles.liBtnMenu}>
                            <button>
                            <BsPerson />
                            Criar ou acessar conta
                            </button>
                            <button
                                onClick={() => setMenu((m) => m = !menu)}>
                                <BsX />
                            </button>
                        </li>
                        <li>
                            <p> Home</p>
                        </li>
                        <li>
                            <p> Produtos</p>
                        </li>
                        <li>
                            <p>Prazo de Entregas</p>
                        </li>
                        <li>
                            <p>Dúvidas</p>
                        </li>
                        <li>
                            <p>Contatos</p>
                        </li>
                    </ul>
                </nav>

            </div>

        </header>
    )

}

export default Header