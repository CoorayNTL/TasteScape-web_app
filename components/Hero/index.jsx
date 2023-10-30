import React from "react";
import Link from "next/link";

// React Icons
import { GiHamburger } from "react-icons/gi";

const Hero = () => {
    return (
        <div className="py-8 grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 lg:gap-10 md:py-32">
            <div className="mb-16 text-center lg:mb-0 lg:text-left">
                <h1 className="text-4xl font-bold leading-12 md:text-6xl">
                    Your Favourite Food{" "}
                    <span className="text-red-500">Pre-Oder</span> Resturent.
                </h1>
                <p className="my-6 text-gray-600 leading-8">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. This last been the industrys standard
                    dummy text ever since the 1500s,
                </p>
                <Link href="/menu">
                    <a
                        className="flex justify-center items-center gap-2 w-max m-auto py-2 px-4 bg-orange-600 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:py-3 md:px-6"
                        title="Order Now"
                    >
                        <span>Order Now</span>
                        <span>
                            <GiHamburger />
                        </span>
                    </a>
                </Link>
            </div>

            <div>
                <img src="https://img.freepik.com/free-vector/order-food-concept-illustration_114360-6860.jpg?w=740&t=st=1698454865~exp=1698455465~hmac=90549d020e1a9e3e69a0a8a3254eeb91ca8dd6424b1c7a1364e46edfdfc8844b" alt="Women-Delivering-A-Package" />
            </div>
        </div>
    );
};

export default Hero;
