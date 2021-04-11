import React from "react";
import 'react-slideshow-image/dist/styles.css'
import Cover from "../assests/cover.png";
import Aubo from "../assests/ayubo.png";
import "tailwindcss/tailwind.css"
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

function Welcome(){

    return(
        <>
        <Navbar />
        <div>
        <div class="relative bg-gray-200 overflow-hidden">
        <div class="max-w-7xl bg-gray-200 mx-auto">
            <div class="relative z-10 pb-8 bg-gray-200 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-200 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            </div>
            <Footer />

            {/*Mobile*/}
        
            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span class="block xl:inline">
                        <img src={Aubo} alt="" />
                    </span>
                </h1>
                
                    <div class="rounded-md shadow">
                    <a href="/SignIn" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-900 md:py-4 md:text-lg md:px-10 ">
                        Get started
                    </a>
                    </div>
                </div>
            </main>
            </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={Cover} alt=""/>
        </div>
        </div>
</div>
</>
    );
}

export default Welcome;