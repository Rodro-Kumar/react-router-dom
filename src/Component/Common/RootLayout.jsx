import React from "react";
import Header from "../Common/Header.jsx";
import Footer from "../Common/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
