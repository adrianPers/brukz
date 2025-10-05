
import styles from "./Header.module.css";

//  imagens
import logo from "../../assets/icon-bz.png";

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
                            <Link to="/">
                                <p>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/produtos">
                                <p>Produtos</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <p>Prazos de Entrega</p>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <p>Duvidas</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contato">
                                <p>Contato</p>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </header>
    )

}

export default Header