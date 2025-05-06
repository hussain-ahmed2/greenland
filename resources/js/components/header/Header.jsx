import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import NavLinks from "./NavLinks";
import AuthOrGuestLinks from "./AuthOrGuestLinks";
import { Menu } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleToggle() {
        setIsMenuOpen(prev => !prev);
    }

    return (
        <header className="bg-white text-neutral-900 font-medium border-b border-neutral-100 sticky top-0 z-50">
            <nav className="flex items-center justify-between gap-8 px-5 max-w-7xl mx-auto min-h-20">
                <Link href={"/"}>
                    <h2 className="font-bold text-3xl">
                        <span className="text-green-500">Green</span>Land
                    </h2>
                </Link>

                <div
                    className={`flex justify-between lg:w-3/5 md:gap-8 max-md:flex-col max-md:absolute max-md:top-20 max-md:left-0 max-md:w-full max-md:bg-neutral-50 transition-all duration-300 origin-right ${
                        isMenuOpen ? "" : "max-md:scale-x-0"
                    }`}
                >
                    <div className="flex items-center md:gap-8 max-md:flex-col">
                        <NavLinks />
                    </div>

                    <div className="flex items-center md:gap-8 max-md:flex-col">
                        <AuthOrGuestLinks />
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className="md:hidden border border-neutral-100 p-3 rounded-md hover:bg-neutral-200 active:bg-neutral-200"
                >
                    <Menu size={32} />
                </button>
            </nav>
        </header>
    );
}
