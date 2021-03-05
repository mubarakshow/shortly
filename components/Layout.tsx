import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      
      {children}

      {/* FOOTER GOES HERE */}
    </div>
  );
};

export default Layout;
