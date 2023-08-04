import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0 }}
      className="mx-auto container max-w-7xl px-4"
    >
      <Navbar />
      {children}
      <Footer />
    </motion.div>
  );
};

export default Layout;
