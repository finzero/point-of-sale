import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout = () => (
  <div className="relative flex flex-row min-h-screen">
    <nav className="w-full fixed top-0 left-0 h-10 bg-orange-500 drop-shadow-lg py-2 z-10 px-5">
      <Header />
    </nav>
    <div className="mt-10">
      <Outlet />
    </div>
  </div>
);
