
import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/produtos/:category/:subcategory/:name" element={<Products />}/>
                <Route path="/produtos" element={<Products />}/>
                <Route path="/contato" element={<Contact />} />

            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;