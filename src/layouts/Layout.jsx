import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Loading from '../components/common/Loading';

const Layout = () => (
        <>
            <Loading />
            <Outlet />
            <ScrollRestoration />
        </>
);

export default Layout;
