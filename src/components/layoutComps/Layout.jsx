import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto container max-w-7xl px-4">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
