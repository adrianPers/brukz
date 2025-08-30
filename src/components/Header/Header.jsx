
import styles from './Header.module.css'

//  imagens
import logo from '../../assets/logo-bz.png'

import { useState } from 'react'
import { Link } from 'react-router'


// icons
import { BsCart2, BsList } from "react-icons/bs";




const Header = () => {

    const [menu, setMenu] = useState(false)

    return(
        <header className={styles.header}>
            <button
            onClick={() => setMenu((m) => m = !menu)}>
                <BsList />
            </button>
            <img 
            className={styles.logoHeader}
            src={logo} 
            alt='logo da loja'
            title='logo da loja' />

            <Link to='/carrinho'>
            <button>
               <BsCart2 />
            </button>
            </Link>

            <nav 
            className={styles.navHeader}
            style={{left : menu ? '0px': '-80%'}}>
                <ul>
                    <li> 
                        <button
                            onClick={() => setMenu((m) => m =! menu)}>
                            ---
                        </button>
                    </li>
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                        <Link to="produtos"> Produtos</Link>
                    </li>
                    <li>Prazo de Entregas</li>
                    <li>Dúvidas</li>
                    <li>Contatos</li>
                </ul>
            </nav>
        </header>
    )

}

export  default Header