import React from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import './Header.css';
function Header() {
    return (
        <header className="header">
            <h1 className="header__title">
                MustSee
            </h1>
            <SearchBox />
        </header>
    )
}


export default Header;