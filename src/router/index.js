import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '~/layouts';
import AboutUs from '~/layouts/MainLayout/Container/AboutUs';
import Order from '~/layouts/MainLayout/Container/Order';
import Product from '~/layouts/MainLayout/Container/Product';
import SpacShop from '~/layouts/MainLayout/Container/SpacShop';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <SpacShop />,
            },
            {
                path: 'order',
                element: <Order />,
            },
            {
                path: 'product',
                element: <Product />,
            },
            {
                path: 'about',
                element: <AboutUs />,
            },
        ],
    },
]);

export default router;
