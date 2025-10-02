
import { BrowserRouter, Routes, Route } from "react-router";

// Páginas
import Home from "./pages/Home/Home";
// import Products from "./pages/Products/Products";
// import Cart from "./pages/Cart/Cart";
// import Product from "./pages/Product/Product";


const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                {/* <Route path="/produtos" element={<Products />} />
                <Route path="/carrinho" element={<Cart /> } />
                <Route path="/produto" element={
                    <Product dataProduct={
                        props.product.dataProduct
                    } />
                }/> */}

            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp