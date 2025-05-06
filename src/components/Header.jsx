import React from "react";
import "../App.css"

const Header = () => {
    let displayMode = localStorage.getItem("dark");
    const [dark, setDark] = React.useState((displayMode === "true") ? true : false);

    React.useEffect(() => {
        if(displayMode !== "true") { 
            document.body.parentNode.classList.remove("dark");
        }
    }, [displayMode])

    const darkModeHandler = () => {
        localStorage.setItem("dark", !dark);
        setDark(!dark);
        document.body.parentNode.classList.toggle("dark");
    }

    return (
        <header className="col-span-2 absolute z-10 w-full px-12 hidden lg:block">
            <nav className="py-10">
                <ul className="group/nav flex gap-5 justify-self-end items-center">
                    <li>
                        <a href="#about" className="group flex items-center hover:!opacity-100 group-hover/nav:opacity-50">
                            <span className="h-px w-12 border border-slate-800 dark:border-green-300 mr-4 transition-all group-hover:w-20"></span>
                            <span className="font-maven font-semibold text-md dark:text-green-300">ABOUT</span>
                        </a>
                    </li>
                    <li>
                        <a href="#experiences" className="group flex items-center hover:!opacity-100 group-hover/nav:opacity-50">
                            <span className="h-px w-12 border border-slate-800 dark:border-green-300 mr-4 transition-all group-hover:w-20"></span>
                            <span className="font-maven font-semibold text-md dark:text-green-300">EXPERIENCE</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="group flex items-center hover:!opacity-100 group-hover/nav:opacity-50">
                            <span className="h-px w-12 border border-slate-800 dark:border-green-300 mr-4 transition-all group-hover:w-20"></span>
                            <span className="font-maven font-semibold text-md dark:text-green-300">PROJECTS</span>
                        </a>
                    </li>
                    <li>
                        <button className="bg-slate-800 dark:bg-green-300 rounded-full hover:!opacity-100 group-hover/nav:opacity-50" onClick={() => darkModeHandler()}>
                            {(dark) ?
                                <svg xmlns="http://www.w3.org/2000/svg" className="m-1 text-white dark:text-green-950" fill="currentColor" width="24" height="24" viewBox="0 -960 960 960"><path d="M480-360q50 0 85-35t35-85-35-85-85-35-85 35-35 85 35 85 85 35m0 80q-83 0-141.5-58.5T280-480t58.5-141.5T480-680t141.5 58.5T680-480t-58.5 141.5T480-280M200-440H40v-80h160zm720 0H760v-80h160zM440-760v-160h80v160zm0 720v-160h80v160zM256-650l-101-97 57-59 96 100zm492 496-97-101 53-55 101 97zm-98-550 97-101 59 57-100 96zM154-212l101-97 55 53-97 101zm326-268"/></svg>
                            :
                                <svg xmlns="http://www.w3.org/2000/svg" className="m-1 text-white dark:text-green-950" fill="currentColor" width="24" height="24" viewBox="0 -960 960 960"><path d="M480-120q-150 0-255-105T120-480t105-255 255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120m0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82m-10-270"/></svg>
                            }
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;