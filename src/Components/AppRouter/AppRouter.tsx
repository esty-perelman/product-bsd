import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import About from "../About/About";
import EditProduct from "../EditProduct/EditProduct";
import FormProduct from "../FormProduct/FormProduct";
import Home from "../Home/Home";
import NavbarV from "../Navbar/Navbar";



export default class AppRouter extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/product-bsd" element={<NavbarV />}></Route>
                    <Route path="/" element={<NavbarV />}>
                        <Route path="Home" element={<Home />}></Route>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="EditProduct" element={<EditProduct/>}></Route>
                        <Route path="About" element={<About />}></Route>
                    </Route>
                    {/* <Route path='/FormProduct' element={<FormProduct  someProps = {this.state}/>}></Route> */}
                    <Route path='/FormProduct/:id' element={<FormProduct />}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}