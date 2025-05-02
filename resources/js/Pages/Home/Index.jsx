import React from "react";
import RootLayout from "../../components/layouts/RootLayout";
import Banner from "../../components/home/Banner";
import BestSellingPlants from "../../components/home/BestSellingPlants";
import AboutUs from "../../components/home/AboutUs";

export default function Index() {
    return (
        <RootLayout>
            <Banner />
            <BestSellingPlants />
            <AboutUs />
        </RootLayout>
    );
}
