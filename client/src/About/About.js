import React from "react";
import amatey from '../Assets/amatey.jpg';
import jonah from '../Assets/jonah.JPG';
import esianyo from '../Assets/esianyo.jpg'

function About () {
    return (
        <div className="text-white mb-20 mt-[90px]">
            <h1 className="text-center my-10 font-semibold text-3xl">About Us</h1>
            <div className="flex flex-col text-white mx-20 lg:mx-40 px-auto items-center">
                <p>The technical team behind the creation of the "Remind Me Maintenance" app developed a comprehensive solution aimed at simplifying and optimizing maintenance management processes for users. The team consisted of skilled software engineers, designers, and project managers who collaborated to deliver a robust and user-friendly application.</p>
                <div>
                    <h2 className="text-center text-2xl font-semibold mt-3">Meet the Team</h2>
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-20">
                    <div className="flex flex-col">
                        <img alt="amatey" src={amatey} className="h-40 w-40 mt-5 md:h-50 md:w-50 border rounded-full"/>
                        <div>
                            <p className="font-semibold text-center">Constance Amatey</p>
                        </div>
                        <div className="items-center flex">
                            <ul className="mt-4 mx-auto flex flex-row items-center">
                                <li>
                                    <a
                                    href="https://x.com/amakiesmatey"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white transition hover:opacity-75"
                                    >
                                    <span className="sr-only">Twitter</span>

                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        />
                                    </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                    href="https://github.com/amakie"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white transition hover:opacity-75"
                                    >
                                    <span className="sr-only">GitHub</span>

                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                        />
                                    </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                    href="https://linkedin.com/in/constance-amakie-amakie"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white transition hover:opacity-75"
                                    >
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path 
                                        fillRule="evenodd" d="M4 3c0-.552.448-1 1-1h14c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V3zm2 5h2v8H6v-8zm1-.523c.904 0 1.552-.608 1.552-1.424C8.552 5.648 7.904 5 7 5 6.096 5 5.448 5.648 5.448 6.477c0 .816.648 1.424 1.552 1.424zM20 12.145c0-1.863-1.328-3.145-3.104-3.145-1.424 0-2.081.848-2.432 1.448h-.032V9H12v8h2v-4.184c0-.56.096-1.113.672-1.113.688 0 .72.656.72 1.216V17h2v-4.835z" 
                                        clipRule="evenodd"/>
                                    </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <img alt="amatey" src={esianyo} className="h-40 w-40 mt-5 md:h-50 md:w-50 border rounded-full"/>
                        <div>
                            <p className="font-semibold text-center">Dzisenu Esianyo</p>
                        </div>
                        <div className="items-center flex">
                            <ul className="mt-4 mx-auto flex flex-row items-center">
                                <li>
                                    <a
                                    href="https://x.com/esianyo"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white transition hover:opacity-75"
                                    >
                                    <span className="sr-only">X</span>

                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        />
                                    </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                    href="https://github.com/esianyo"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white transition hover:opacity-75"
                                    >
                                    <span className="sr-only">GitHub</span>

                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                        />
                                    </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                    href="https://linkedin.com/in/esianyo"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white transition hover:opacity-75"
                                    >
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path 
                                        fillRule="evenodd" d="M4 3c0-.552.448-1 1-1h14c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V3zm2 5h2v8H6v-8zm1-.523c.904 0 1.552-.608 1.552-1.424C8.552 5.648 7.904 5 7 5 6.096 5 5.448 5.648 5.448 6.477c0 .816.648 1.424 1.552 1.424zM20 12.145c0-1.863-1.328-3.145-3.104-3.145-1.424 0-2.081.848-2.432 1.448h-.032V9H12v8h2v-4.184c0-.56.096-1.113.672-1.113.688 0 .72.656.72 1.216V17h2v-4.835z" 
                                        clipRule="evenodd"/>
                                    </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="flex flex-col">
                        <img alt="amatey" src={jonah} className="h-40 w-40 mt-5 md:h-50 md:w-50 border rounded-full"/>
                        <div>
                            <p className="font-semibold text-center">Jonah Emmanuel</p>
                        </div>
                        <div className="items-center flex">
                            <ul className="mt-4 mx-auto flex flex-row items-center">
                                <li>
                                    <a
                                    href="https://x.com/that_tech_guy01"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white transition hover:opacity-75"
                                    >
                                    <span className="sr-only">Twitter</span>

                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        />
                                    </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                    href="https://github.com/thorbie010"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white transition hover:opacity-75"
                                    >
                                    <span className="sr-only">GitHub</span>

                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                        />
                                    </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                    href="https://linkedin.com/in/thorbie"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-white transition hover:opacity-75"
                                    >
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path 
                                        fillRule="evenodd" d="M4 3c0-.552.448-1 1-1h14c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V3zm2 5h2v8H6v-8zm1-.523c.904 0 1.552-.608 1.552-1.424C8.552 5.648 7.904 5 7 5 6.096 5 5.448 5.648 5.448 6.477c0 .816.648 1.424 1.552 1.424zM20 12.145c0-1.863-1.328-3.145-3.104-3.145-1.424 0-2.081.848-2.432 1.448h-.032V9H12v8h2v-4.184c0-.56.096-1.113.672-1.113.688 0 .72.656.72 1.216V17h2v-4.835z" 
                                        clipRule="evenodd"/>
                                    </svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default About;