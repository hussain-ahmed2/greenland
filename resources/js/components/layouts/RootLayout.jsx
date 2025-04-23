import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            <main className="max-w-7xl mx-auto px-5">{children}</main>
            <Footer />
        </>
    );
}
