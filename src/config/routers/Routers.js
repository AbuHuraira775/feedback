import React from "react";
import Home from "../../screens/Home";
import { BrowserRouter as Routers, Routes, Route, Link, useNavigate } from "react-router-dom";
import Products from "../../screens/Products";
import Login from "../../screens/Login";
import Error from "../../screens/Error";
import { LogoutRouting, PrivateRouting, PublicRouting } from "./ustomRouting";
import ProductItem from "../../screens/AddProductForm";
import Logout from "../../screens/Logout";
import Navbar from "../../components/Navbar";


const MainRouting = () => {

    const user = localStorage.getItem('user')
    return (<Routers>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/products" element={<PrivateRouting />} >
                    <Route path="/products" element={<Products />} />
                </Route>
                <Route path="/products/:user/add-product" element={<PrivateRouting />}>
                    <Route path="/products/:user/add-product" element={<ProductItem />} />
                </Route>
                <Route path="/login" element={<PublicRouting />}>
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="/logout" element={<LogoutRouting />}>
                    <Route path="/logout" element={<Logout />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
    </Routers>

    )
}

export default MainRouting