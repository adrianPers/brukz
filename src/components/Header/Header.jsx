
import styles from "./Header.module.css";

//  imagens
import logo from "../../assets/logo-bz.png";

import { useState } from "react";

import { Link } from "react-router";


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
                    alt="logo da loja"
                    title="logo da loja" 
                />

              
                    <button>
                        <BsCart2 />
                    </button>
    

                <nav
                    className={styles.menuHeader}
                    style={{ left: menu ? "-1px" : "-102%" }}>
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
                            <Link to="/"
                            ><p>Home</p></Link>
                        </li>
                        <li>
                            <Link to="/produtos/teste"
                            >Produtos</Link>
                        </li>
                        <li>
                            <p>Prazos de entrega</p>
                        </li>
                        <li>
                            <p>Dúvidas</p>
                        </li>
                        <li>
                            <Link to="/contato/nome"
                            >Contato</Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </header>
    )

}

export default Header