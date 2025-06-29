// Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';
import Footer from '../common/Footer';

function Layout() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <main>
                <div className="main-content">
                     <Outlet />
                </div>
               
            </main>
            <Footer />
        </>
    );
}


export default Layout