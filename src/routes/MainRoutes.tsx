import { Route, Routes } from "react-router-dom";
import { CartProvider } from "../contexts/CartContext";
import { Login } from "../pages/Login";
import { Menu } from "../pages/Menu";
import { Register } from "../pages/Register/Register";

export function MainRoutes () {
    return (
        <Routes>
            <Route path="/" index   element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/menu"     element={<CartProvider><Menu/></CartProvider>}></Route>
        </Routes>
    )
}