import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Menu } from "../pages/Menu/Menu";
import { Register } from "../pages/Register/Register";

export function MainRoutes () {
    return (
        <Routes>
            <Route path="/" index   element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/menu"     element={<Menu/>}></Route>
        </Routes>
    )
}