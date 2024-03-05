import NavBar from '../nav/NavBar';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
