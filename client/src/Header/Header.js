// Header Component
import React from "react";
import { Link } from "react-router-dom";
import QC2 from "../Assets/QC2.png"
import menu from "../Assets/menu.png"
import close from "../Assets/close.png"
import account from '../Assets/account.png'
import drop from '../Assets/drop.png'
import { useAppContext } from "../App/AppContext";

function Header() {
    const { isLoggedIn, isOpen, handleSignOut, toggleSidebar, isSidebarOpen, isLargeScreen, toggleDropdown } = useAppContext()

    return (
        <header className="fixed top-0 left-0 w-full bg-black text-white py-4 px-3 border-b-4  border-burgundy">
            <div className={`max-w-screen-xl ${isLargeScreen ? 'mx-40' : 'mx-auto sm:mx-10'} h-10 font-semibold flex items-center justify-between`}>
            <Link to="/" ><img alt="logo" src={QC2} className="h-40 w-[80px] sm:w-40 lg:w-40"/></Link>
            <div className="flex items-center">
                    {isLargeScreen && (
                        <nav className="hidden md:flex space-x-10">
                            <Link to={'/features'} className="text-l hover:text-gray-300">Features</Link>
                            <Link to={'/about'} className="text-l hover:text-gray-300">About</Link>
                            <Link to={'/contact'} className="text-l hover:text-gray-300">Contact</Link>
                        </nav>
                    )}
                    {!isLoggedIn ? (
                        <Link to="/login" className={`text-white text-semibold ${isLargeScreen ? 'ml-60 bg-black text-white h-10 py-5 px-5 min-w-fit flex items-center border rounded' : 'text-sm '}`}>Sign In/Sign Up</Link>
                    ) : (
                        <div className={`${isLargeScreen ? 'ml-60 flex flex-row' : 'flex flex-row' }`}>
                            {/*<Link to={''}><img alt="notification" src={notification} className="h-8 mr-5"/></Link>*/}
                            <button to={''} onClick={toggleDropdown} >
                                <div className="flex flex-row bg-black p-0 h-8" onClick={toggleDropdown}>
                                    <img alt="account" src={account} className={`${isLargeScreen ? 'h-10 self-end' : 'h-8 self-start'}`} />
                                    <img alt="drop" src={drop} />
                                    
                                </div>
                            </button>
                            {isOpen && (
                                <div className="flex flex-col space-y-2 bg-black absolute z-20 mt-10 p-5 items-start">
                                        <Link to={'/createReminder'}> Create a Reminder</Link>
                                        <Link to={''}> My Reminders</Link>
                                        <button onClick={handleSignOut}> Sign Out</button>
                                </div>
                                )}
                        </div>
                    )}
                    {!isLargeScreen && (
                        <button 
                            className="lg:hidden"
                            onClick={toggleSidebar}
                        >
                            {isSidebarOpen ? <img alt="close" src={close} className="h-8" /> : <img alt="menu" src={menu} className="h-8"/>}
                        </button>
                    )}
                </div>
            </div>
            <nav className={`block top-20 right-0 w-full h-full font-semibold text-white py-4 px-6 md:w-64 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col space-y-4">
                    <li>
                        <Link to={'/features'} className="text-l hover:text-gray-300">Features</Link>
                    </li>
                    <li>
                        <Link to={'/about'} className="text-l hover:text-gray-300">About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'} className="text-l hover:text-gray-300">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
