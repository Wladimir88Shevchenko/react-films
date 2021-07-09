import React from 'react';
import Style from './header.module.scss'

const Header = () => {

    return (
        <header className={Style.headerWrapper}>
            <nav>
                <div className={`nav-wrapper ${Style.navWrapper}  light-blue accent-3`}>
                    <a href="!#" className="brand-logo">Video Library</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="https://github.com/Wladimir88Shevchenko/">Github</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;