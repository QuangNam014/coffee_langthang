import MainLayout from './layouts';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import SpacShop from './layouts/MainLayout/Container/SpacShop';
import Container from './layouts/MainLayout/Container';
import Order from './layouts/MainLayout/Container/Order';

function App() {
    return (
        <Routes>

            <Route path='/' element={<MainLayout>  <SpacShop/> </MainLayout> }>
                <Route path="order" element={<Order />} />
  
            </Route>
        </Routes>
    );
}

export default App;
