import "./NavBar.sass";
import logo from "../../assets/Logo.svg";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-block">
                <img src={logo} alt="logo" />
                <div className="nav-links">
                    <Link className="nav-link-item" to="/">
                        Math
                    </Link>
                    <Link className="nav-link-item" to="/Chemistry">
                        Chemistry
                    </Link>
                    <Link className="nav-link-item" to="/Physics">
                        Physics
                    </Link>
                    <Link className="nav-link-item" to="/Biology">
                        Biology
                    </Link>
                </div>
                <div className="admin-logout">
                    <p className="admin-logged">You logged as:</p>
                    <p className="admin-admin">admin</p>
                    <button className="btn-logout">log out</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
