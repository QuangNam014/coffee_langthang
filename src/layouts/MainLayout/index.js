import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';
import { Outlet } from 'react-router-dom';

function MainLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <Container/>
            <Footer />
        </div>
    );
}

export default MainLayout;
