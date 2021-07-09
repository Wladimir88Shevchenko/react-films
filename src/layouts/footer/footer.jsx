import React from 'react';
import Style from './footer.module.scss'

const Footer = () => {

    return (
    <footer className={`page-footer  light-blue accent-1 ${Style.footerWrapper}`}>
        <div className="footer-copyright">
            <div className="container">
                © 2021 Copyright Text
                <a className="grey-text text-lighten-4 right" href="https://github.com/Wladimir88Shevchenko/">Github</a>
            </div>
        </div>
    </footer>
    );
}

export default Footer;