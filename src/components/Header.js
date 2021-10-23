import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
    <header className="header">
        <nav className="navbar">
            <div className="container-fluid">
                <Link className="header__title" to="/" >
                    <h1>Expense Manager</h1>
                </Link>
            </div>
        </nav>
    </header>
);
export default Header;