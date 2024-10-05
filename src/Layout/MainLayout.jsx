import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className=''>
                <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;