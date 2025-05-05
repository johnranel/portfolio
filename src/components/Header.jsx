import React from "react";
import "../App.css"

const Header = () => {
    return (
        <header className="col-span-2">
            <nav className="py-10">
                <ul className="flex gap-5 justify-self-end">
                    <li>
                        <a href="#about" className="group flex items-center">
                            <span className="h-px w-12 border border-indigo-600 mr-4"></span>
                            <span className="font-maven font-semibold text-md">ABOUT</span>
                        </a>
                    </li>
                    <li>
                        <a href="#experiences" className="group flex items-center">
                            <span className="h-px w-12 border border-indigo-600 mr-4"></span>
                            <span className="font-maven font-semibold text-md">EXPERIENCE</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="group flex items-center">
                            <span className="h-px w-12 border border-indigo-600 mr-4"></span>
                            <span className="font-maven font-semibold text-md">PROJECTS</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;