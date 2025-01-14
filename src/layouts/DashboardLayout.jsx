import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router';
import SideNav from '../components/Dashboard/Sidenav/Sidenav';

const DashboardLayout = () => {
    return (
        <div className="max-w-[1380px] mx-auto">
            <Navbar />

            <section className="flex justify-center gap-5">
                <div className="w-1/6 bg-gray-800" >
                    <SideNav />
                </div>

                <div className="w-5/6">
                    <Outlet />
                </div>
            </section>

        </div>
    );
};

export default DashboardLayout;