import React from "react";
import AutoToTop from "../components/AutoToTop";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/layouts/Layout.css";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <AutoToTop />
      <Navbar />
      <main className="Layout-main">{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
