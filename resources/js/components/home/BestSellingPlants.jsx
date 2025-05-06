import React from "react";
import LinkButton from "../LinkButton";
import { ArrowRight } from "lucide-react";

export default function BestSellingPlants() {
    return (
        <div className="my-20">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="space-y-5">
                    <h1 className="font-bold text-3xl">Best Selling Plants</h1>
                    <p className="text-neutral-500">
                        Easiest way to healthy life by buying your favorite
                        plants{" "}
                    </p>
                    <div className="max-lg:hidden">
                        <LinkButton
                            label={
                                <div className="flex items-center gap-2">
                                    See more <ArrowRight />
                                </div>
                            }
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 hover:bg-green-200 active:bg-green-200 hover:shadow-lg active:shadow-lg transition-all duration-300 rounded-xl hover:p-3">
                    <div className="md:max-w-96 w-full aspect-[4/5] bg-lime-500 rounded-xl"></div>
                    <h3 className="text-lg font-medium">Natural Plant</h3>
                    <h4 className="text-neutral-600">$1400</h4>
                </div>
                <div className="flex flex-col gap-2 hover:bg-green-200 active:bg-green-200 hover:shadow-lg active:shadow-lg transition-all duration-300 rounded-xl hover:p-3">
                    <div className="md:max-w-96 w-full aspect-[4/5] bg-teal-500 rounded-xl"></div>
                    <h3 className="text-lg font-medium">Artifitial Plant</h3>
                    <h4 className="text-neutral-600">$900</h4>
                </div>
                <div className="flex flex-col gap-2 hover:bg-green-200 active:bg-green-200 hover:shadow-lg active:shadow-lg transition-all duration-300 rounded-xl hover:p-3">
                    <div className="md:max-w-96 w-full aspect-[4/5] bg-green-500 rounded-xl"></div>
                    <h3 className="text-lg font-medium">Artifitial Plant</h3>
                    <h4 className="text-neutral-600">$3200</h4>
                </div>
                <div className="lg:hidden flex items-center justify-center">
                    <LinkButton
                        label={
                            <div className="flex items-center gap-2">
                                See more <ArrowRight />
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
