import { Link } from "@inertiajs/react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-green-200">
            <div className="max-w-7xl mx-auto px-5 py-10">
                <div className="flex gap-5 flex-wrap justify-between">
                    <div className="space-y-4">
                        <h2 className="font-bold text-xl">
                            <span className="text-green-500">Green</span>Land
                        </h2>
                        <p className="text-neutral-600">
                            We help you find your dream plant
                        </p>

                        <div className="flex gap-5">
                            <Link
                                href={"#"}
                                className="border p-3 rounded-full border-neutral-700 text-neutral-700"
                            >
                                <Facebook />
                            </Link>
                            <Link
                                href={"#"}
                                className="border p-3 rounded-full border-neutral-700 text-neutral-700"
                            >
                                <Instagram />
                            </Link>
                            <Link
                                href={"#"}
                                className="border p-3 rounded-full border-neutral-700 text-neutral-700"
                            >
                                <Twitter />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <table className="w-full">
                            <thead className="text-neutral-900">
                                <tr className="text-left">
                                    <th className="py-2">Information</th>
                                    <th className="py-2">Company</th>
                                    <th className="py-2">Contact</th>
                                </tr>
                            </thead>
                            <tbody className="text-neutral-600">
                                <tr>
                                    <td className="py-2">About</td>
                                    <td className="py-2">Community</td>
                                    <td className="py-2">Getting Started</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Product</td>
                                    <td className="py-2">Career</td>
                                    <td className="py-2">Pricing</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Blog</td>
                                    <td className="py-2">Our Story</td>
                                    <td className="py-2">Resources</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="text-neutral-700 mt-15">
                    {new Date().getFullYear()} all Right Reserved Term of use
                    GREENLAND
                </p>
            </div>
        </footer>
    );
}
