import React from "react";
import { ShoppingCart, User } from "lucide-react";
import { usePage } from "@inertiajs/react";
import CustomLink from './CustomLink';

export default function AuthOrGuestLinks() {
    const { props } = usePage();

    return (
        <>
            <CustomLink href={"/cart"} label={<ShoppingCart />} text="Cart" />

            <div className="max-md:hidden w-px h-6 rounded-full bg-neutral-900 opacity-60"></div>

            {props.user ? (
                <CustomLink href={"/user"} label={<User />} />
            ) : (
                <>
                    <CustomLink href={"/login"} label={"Login"} />
                    <CustomLink href={"/register"} label={"Register"} />
                </>
            )}
        </>
    );
}
