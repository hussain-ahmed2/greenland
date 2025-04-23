import { Link, usePage } from "@inertiajs/react";
import React from "react";
import CustomLink from "./CustomLink";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
];

export default function NavLinks() {
    return (
        <>
            {navLinks.map((link) => (
                <CustomLink key={link.label} href={link.href} label={link.label} />
            ))}
        </>
    );
}
