
import Page from "../../components/Page/Page";

import { useParams } from "react-router";

const Products = () => {

    const { name } = useParams();

    return(
        <div className="Products">
            <Page>
                <h2>Produtos</h2>
                <p>{name}</p>
            </Page>
        </div>
    )
}

export default Products;