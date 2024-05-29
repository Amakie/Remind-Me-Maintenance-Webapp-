import React from "react";
import reliability from "../Assets/reliability.jpg"
import simplicity from "../Assets/simplicity.jpg"
import transparency from "../Assets/transparency.jpg"
import { useAppContext } from "../App/AppContext";


function Features () {
    const { isLargeScreen } = useAppContext();

    return (
        <div className="text-white">
            <h1 className="text-center mb-10 mt-[90px] font-semibold text-3xl">FEATURES</h1>
            <div className="flex flex-col items-center space-y-4 mx-20 lg:mx-40 px-auto pb-3 pt-3 border-b-2">
                <div className="flex flex-col items-center ">
                    <h2 className="text-center mb-5 text-xl underline">Efficiency</h2>
                    <div className="flex flex-col items-center lg:flex-row lg:px-20">
                        <img alt="logo" src={reliability} className="h-60 w-60 md:h-80 md:w-80 lg:h-60 lg:w-60"/>
                        <p className="lg:pl-10">Remind Me maintenance app uses intelligent algorithms to create a maintenance schedule that fits your lifestyle. No more missed appointments or overdue tasks. Receive timely reminders for all your maintenance needs. Remind Me ensures you never forget a task, saving you time and hassle. Easily log your maintenance activities with just a few taps. Keep your records up-to-date without any extra effort. Remind Me maintenance app is designed to make your life easier.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-4 mx-20 lg:mx-40 px-auto pb-3 pt-3 border-b-2">
                <div className="flex flex-col items-center ">
                    <h2 className="text-center mb-5 text-xl underline">Reliability</h2>
                        {isLargeScreen &&(
                            <div className="flex flex-col items-center lg:flex-row lg:px-20">
                                <p>Automatically sync your data across all your devices. Your maintenance schedule is always accessible, whether you're at home or on the go. Remind-Me has an extensive database of maintenance guidelines for various items, ensuring you get accurate and reliable reminders. Our app is designed to be user-friendly and intuitive, so you can easily manage your maintenance tasks. Remind Me maintenance app is your reliable partner in keeping your life organized.</p>
                                <img alt="logo" src={transparency} className="h-60 w-60 md:h-80 md:w-80 lg:h-60 lg:pl-10 lg:w-60"/>
                            </div>
                        )}
                        {!isLargeScreen &&(
                            <div className="flex flex-col items-center lg:flex-row lg:px-20">
                                <img alt="logo" src={transparency} className="h-60 w-60 md:h-80 md:w-80"/>
                                <p>Automatically sync your data across all your devices. Your maintenance schedule is always accessible, whether you're at home or on the go. Remind-Me has an extensive database of maintenance guidelines for various items, ensuring you get accurate and reliable reminders. Our app is designed to be user-friendly and intuitive, so you can easily manage your maintenance tasks. Remind Me maintenance app is your reliable partner in keeping your life organized.</p>

                            </div>
                        )}

                </div>
            </div>
            <div className="flex flex-col items-center space-y-4 mx-20 lg:mx-40 px-auto pb-3 pt-3 border-b-2">
                <div className="flex flex-col items-center ">
                    <h2 className="text-center mb-5 text-xl underline">Simplicity</h2>
                    <div className="flex flex-col items-center lg:flex-row lg:px-20">
                        <img alt="logo" src={simplicity} className="h-60 w-60 md:h-80 md:w-80 lg:h-60 lg:w-60"/>
                        <p className="lg:pl-10">With its clean design and intuitive navigation, Remind-Me is easy for everyone to use, regardless of technical skill level. Tailor your reminders to suit your specific needs. Choose how and when you want to be notified, making the app truly yours. Connect Remind-Me with other apps and services for a seamless experience. From calendar sync to smart home compatibility, we've got you covered.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;