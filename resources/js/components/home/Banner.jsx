import { Search } from "lucide-react";
import React from "react";

export default function Banner() {
    return (
        <article className="bg-primary my-5 rounded-3xl p-12 flex max-md:flex-col-reverse justify-between gap-8 min-h-[32rem]">
            <div className="max-w-[32rem] flex flex-col gap-8 z-10">
                <h1 className="font-extrabold text-6xl leading-16">
                    Buy your dream plants
                </h1>
                <div className="flex items-center gap-10 text-neutral-800">
                    <div>
                        <p className="font-medium text-3xl">50+</p>
                        <p className="font-medium text-lg">Plants Species</p>
                    </div>
                    <div className="w-px h-14 bg-black"></div>
                    <div>
                        <p className="font-medium text-3xl">100+</p>
                        <p className="font-medium text-lg">Customers</p>
                    </div>
                </div>
                <form className="flex items-center bg-white p-2.5 rounded-xl focus-within:ring-4 ring-black/15 transition">
                    <input
                        className="w-full outline-none px-2"
                        type="text"
                        name="query"
                        placeholder="What are you looking for?"
                        required
                    />
                    <button className="p-3 bg-primary rounded-lg hover:bg-neutral-600 active:bg-neutral-600 group transition">
                        <Search className="text-neutral-600 group-hover:text-white group-active:text-white transition" />
                    </button>
                </form>
            </div>
            <div className="max-sm:hidden min-h-[26rem] flex items-end justify-end relative">
                <img
                    className="md:-mb-12 max-w-[26rem] w-full"
                    src="/storage/images/banner-image-background.png"
                    alt="banner image background"
                />

                <img
                    className="absolute bottom-0 md:-mb-12 w-96"
                    src="/storage/images/banner-plant.png"
                    alt="banner plant image"
                />

                <img
                    className="absolute left-0 md:-left-36 bottom-24 w-28"
                    src="/storage/images/banner-left-arrow.png"
                    alt="banner left arrow"
                />

                <img
                    className="absolute right-0 top-0 h-28"
                    src="/storage/images/banner-right-arrow.png"
                    alt="banner left arrow"
                />
            </div>
        </article>
    );
}
