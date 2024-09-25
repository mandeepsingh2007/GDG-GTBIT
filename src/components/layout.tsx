import { ReactNode } from 'react';
import Navbar from './common/navbar';
import Footer from './common/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
