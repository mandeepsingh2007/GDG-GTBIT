import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        {/* Add a header or navigation component */}
        <nav>NAVBAR</nav>
      </header>
      <main>{children}</main>
      <footer>FOOTER</footer>
    </div>
  );
};

export default Layout;
