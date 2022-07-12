import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Navbar.css'

export default class NavbarV extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    {/* <Link className="navbar-brand" to='/HomePage'>mySite</Link> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/Home'>HomePage</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/EditProduct'>EditProduct</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/About'>About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Outlet></Outlet>
            </div>
        )
    }
}
