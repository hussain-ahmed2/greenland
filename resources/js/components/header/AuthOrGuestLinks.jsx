import React from "react";
import { ShoppingCart, User } from "lucide-react";
import { usePage } from "@inertiajs/react";
import CustomLink from './CustomLink';
import LogoutButton from "../LogoutButton";

export default function AuthOrGuestLinks() {
    const { auth } = usePage().props;

    return (
        <>
            <CustomLink href={"/cart"} label={<ShoppingCart />} text="Cart" />

            <div className="max-md:hidden w-px h-6 rounded-full bg-neutral-900 opacity-60"></div>

            {auth.user ? (
                <>
                    <CustomLink href={"/dashboard"} label={<User />} />
                    <LogoutButton />
                </>
            ) : (
                <>
                    <CustomLink href={"/login"} label={"Login"} />
                    <CustomLink href={"/register"} label={"Register"} />
                </>
            )}
        </>
    );
}
