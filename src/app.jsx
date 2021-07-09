import React from 'react';
import Header from './layouts/header';
import Main from './layouts/main';
import Footer from './layouts/footer';
import './main.scss';

const App = () => {

    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;