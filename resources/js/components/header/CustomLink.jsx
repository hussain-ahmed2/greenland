import React from "react";
import { usePage, Link } from "@inertiajs/react";

export default function CustomLink({ href, label }) {
    const { url } = usePage();

    return (
        <Link
            className={`hover:underline ${
                url === href ? "opacity-100" : "opacity-60"
            }`}
            href={href}
        >
            {label}
        </Link>
    );
}
