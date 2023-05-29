import React from 'react';
import SpacShop from './SpacShop';
import { Outlet } from 'react-router-dom';

function Container({ children }) {
    return (
        <main>
            <Outlet />
        </main>
    );
}

export default Container;
