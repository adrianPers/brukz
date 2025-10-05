
import styles from "./Page.module.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Page = (props) => {

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>

                <div className={styles.containerMain}>

                    {props.children}

                    

                </div>

                <Footer />
            </main>
        </div>
    );
}

export default Page;