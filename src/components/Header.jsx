import React from "react";
import "../App.css"

const Header = () => {
    return (
        <header className="col-span-2 absolute z-10 w-full px-12">
            <nav className="py-10">
                <ul className="group/nav flex gap-5 justify-self-end">
                    <li>
                        <a href="#about" className="group flex items-center hover:!opacity-100 group-hover/nav:opacity-50">
                            <span className="h-px w-12 border border-slate-800 mr-4 transition-all group-hover:w-20"></span>
                            <span className="font-maven font-semibold text-md">ABOUT</span>
                        </a>
                    </li>
                    <li>
                        <a href="#experiences" className="group flex items-center hover:!opacity-100 group-hover/nav:opacity-50">
                            <span className="h-px w-12 border border-slate-800 mr-4 transition-all group-hover:w-20"></span>
                            <span className="font-maven font-semibold text-md">EXPERIENCE</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="group flex items-center hover:!opacity-100 group-hover/nav:opacity-50">
                            <span className="h-px w-12 border border-slate-800 mr-4 transition-all group-hover:w-20"></span>
                            <span className="font-maven font-semibold text-md">PROJECTS</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;