import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

function MainLayout(props) {
    return (
        <div className="wrapper">
            <Header />
            <Container />
            <Footer />
        </div>
    );
}

export default MainLayout;
