import React from "react";
import { usePage, Link } from "@inertiajs/react";
import clsx from "clsx";

export default function CustomLink({ href, label, text = '', prefetch = true, className = '' }) {
    const { url } = usePage();

    return (
        <Link
            className={clsx(
                'hover:underline active:underline max-md:py-3 max-md:px-5 max-md:w-full max-md:hover:bg-neutral-200 max-md:active:bg-neutral-200 transition',
                    url === href
                        ? "opacity-100 text-green-500"
                        : "opacity-60 hover:opacity-80 active:opacity-80",
                className
            )}
            href={href}
            prefetch={prefetch}
        >
            <div className="flex gap-1 items-center">
                <div>{label}</div>
                {text && <span className="md:hidden">{text}</span>}
            </div>
        </Link>
    );
}
