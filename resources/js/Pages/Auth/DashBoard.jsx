import React from "react";
import RootLayout from "../../components/layouts/RootLayout";
import { usePage } from "@inertiajs/react";

export default function DashBoard() {
    const props = usePage();

    return (
        <RootLayout>
            <div>DashBoard</div>
        </RootLayout>
    );
}
