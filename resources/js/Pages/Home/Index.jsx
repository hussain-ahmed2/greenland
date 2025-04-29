import React from "react";
import RootLayout from "../../components/layouts/RootLayout";
import Banner from "../../components/home/Banner";
import BestSellingPlants from "../../components/home/BestSellingPlants";

export default function Index() {
    return (
        <RootLayout>
            <Banner />
            <BestSellingPlants />
        </RootLayout>
    );
}
