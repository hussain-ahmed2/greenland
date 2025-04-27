import React from "react";
import { usePage, Link } from "@inertiajs/react";

export default function CustomLink({ href, label, text = '' }) {
    const { url } = usePage();

    return (
        <Link
            className={`hover:underline active:underline max-md:py-3 max-md:px-5 max-md:w-full max-md:hover:bg-neutral-200 max-md:active:bg-neutral-200 transition ${
                url === href ? "opacity-100" : "opacity-60 hover:opacity-80 active:opacity-80"
            }`}
            href={href}
        >
            <div className="flex gap-1 items-center">
                <div>{label}</div>
                {text && <span className="md:hidden">{text}</span>}
            </div>
        </Link>
    );
}
