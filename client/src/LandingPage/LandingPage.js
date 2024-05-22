import React from "react";
import bg_image from "../Assets/ld-pg-bg.png"
import { Link } from "react-router-dom";


function LandingPage() {

    return (
        <div className="bg-cover text-gray-200 flex flex-col bg-cente flex-grow min-h-screen" style={{ backgroundImage: `url(${bg_image})` }}>
            <div className="px-5 md:px-10 mt-[18vh] lg:pr-[80vh] md:w-2/3 lg:min-w-full">
                <h1 className="font-bold text-xl sm:text-4xl leading-snug md:text-l">Take control of your appliance, system and tool maintenance</h1>
                <p className="leading-snug mt-0 sm:text-xl lg:mt-5">
                    Have a routine maintenance of equipments and facilities in your home, office, or institution. Never miss a maintenance day with our web app. Sign up, log your routines and let it remind you when it is time.
                </p>
            </div>
            <div className="px-5 md:px-10 mt-5">
                <Link to={'/register'} className="bg-burgundy px-3 py-2 w-fit rounded-2xl items-center flex flex-row">
                    <div className="rounded bg-white text-white">--</div>
                    <p className="ml-5 md:pr-10" >Get Started</p>
                </Link>
            </div>
        </div>


    );
}

export default LandingPage