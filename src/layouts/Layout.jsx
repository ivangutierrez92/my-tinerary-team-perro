import React from "react";
import AutoToTop from "../components/AutoToTop";
import Navbar from "../components/NavBar";
import '../styles/layouts/Layout.css'

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <AutoToTop />
      <Navbar />
      <main className="Layout-main">{children}</main>
    </div>
  );
}
