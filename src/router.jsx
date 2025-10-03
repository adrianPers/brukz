
import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import Home from "./pages/Home/Home";

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp