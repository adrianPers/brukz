
import { useState } from "react";
import styles from "./Footer.module.css";

import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
const Footer = () => {

    const [
        btnsFooter, setBtnsFooter
    ] = useState(Array(3).fill(false));

    const contentFooter = [
        {
            title: "Informações",
            content: [
                "Contato",
                "Guia de Medidias",
                "Posso ter taxado?",
                "perguntas Frequentes",
                "Prazos e Entrega",
                "Politica de privacidade",
                "Termos e Condição de uso"
            ]
        },
        {
            title: "Ajuda",
            content: [
                "Home",
                "Produtos",
                "Prazos e Entrega",
                "Dúvidas",
                "Fale conosco"
            ]
        },
        {
            title: "Navegação",
            content: [
                "Home",
                "Produtos",
                "Prazos e Entrega",
                "Dúvidas",
                "Contato"
            ]
        }
    ];

    const handleFooter = (index) => {
        const nezBtns = btnsFooter.map((btn, indexBtn) => {
            if (index === indexBtn) {
                return !btn;
            }
            return btn;
        })

        setBtnsFooter(nezBtns);
    }

    return (
        <div className={styles.footer}>
            <div className={styles.containerFooter}>
                <div className={styles.contentFooter}>

                    {contentFooter.map((item, index) => (
                        <div key={index}>
                            <button
                                onClick={() => handleFooter(index)}>
                                {item.title}
                                {btnsFooter[index] ? <BsChevronUp /> : <BsChevronDown />}
                            </button>

                            <ul className={
                                btnsFooter[index] ? styles.aparecer : styles.ocultar
                            }>
                                {item.content.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                <div className={styles.containerLegal}>
                    <p>© 2025 BrukZ. Todos os direitos reservados</p>
                </div>


            </div>
        </div>
    )

}

export default Footer;