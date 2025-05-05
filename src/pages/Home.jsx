import React from "react";
import "./../App.css";
import Header from "../components/Header";
import Footer from "./../components/Footer";

const Home = () => {
    return (
        <main className="mx-auto max-w-screen-xl px-6 md:px-12 grid grid-flow-row grid-cols-2 gap-5">
            <Header />
            <section id="profile" className="lg:sticky lg:top-0 row-span-5 max-h-screen">
                <figure>
                    <img className="size-[250px] rounded-full" src="./../resources/images/john_ranel_dimaculangan.jpeg" alt="John Ranel Dimaculangan's picture" />
                    <figcaption className="h-px overflow-hidden">My Profile Picture</figcaption>
                </figure>
                <h1 className="text-4xl tracking-tight font-bold font-maven mt-10 mb-4">JOHN RANEL DIMACULANGAN</h1>
                <span className="text-2xl tracking-tight font-medium font-maven">Web Developer</span>
                <p className="text-xl tracking-tight font-maven mt-4">I build, optimize, and maintain websites.</p>
                <div className="flex gap-5 mt-20">
                    <a href="#" className="block hover:text-slate-600">
                        <span className="h-px w-px overflow-hidden absolute">GitHub</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="currentColor"><path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/></svg>
                    </a>
                    <a href="#" className="block hover:text-slate-600">
                        <span className="h-px w-px overflow-hidden absolute">LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="currentColor"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
                    </a>
                </div>
            </section>
            <section id="about" className="mb-16 text-xl tracking-tight font-maven leading-normal">
                <p className="mb-4">I’m currently a student at King’s Own Institute studying a Master’s degree in Information Technology (Cyber Security). I am a passionate developer focused on delivering functional and accessible websites. Driven by a deep interest in IT, problem-solving and helping people by creating effective web-solutions.</p>
                <p className="mb-4">Currently I am a Part-time IT Assistant at My Eye In The Sky, specializing in web maintenance. I contribute to the creation of new content and maintaining the UI / design of the company website, ensuring optimal performance and adherence to standards and best practices along with seamless user experience. Aside from this I also do for the company the account setups, GPS device configurations, and logistics setup.</p>
                <p className="mb-4">My past experiences also include working for a start-up, which I have had the opportunity to develop website across a variety of companies/clients, including educational, health, opportunity and fund-raising platforms. Additionally I actively work personal projects to further enhance my skills.</p>
            </section>
            <section id="experiences" className="mb-16">
                <ol className="group/list text-xl font-maven tracking-tight">
                    <li className="mb-12">
                        <div className="grid grid-flow-col grid-cols-8 gap-4">
                            <span className="col-span-2 text-lg">2023 - PRESENT</span>
                            <div className="col-span-6">
                                <h2>IT Assistant (My Eye In The Sky)</h2>
                                <p className="mt-2">Build and maintain GPS device configurations, ensure that WordPress website is up to date and running.</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="grid grid-flow-col grid-cols-8 gap-4">
                            <span className="col-span-2 text-lg">2017 - 2023</span>
                            <div className="col-span-6">
                                <h2>Web Developer (Odo Solutions & Enterprises Pte Ltd)</h2>
                                <p className="mt-2">Build, design, and ship quality websites and mobile apps, gathered diverse experiences from different type of projects.</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="grid grid-flow-col grid-cols-8 gap-4">
                            <span className="col-span-2 text-lg">2016 - 2017</span>
                            <div className="col-span-6">
                                <h2>Web Developer (Spectrum Tuition)</h2>
                                <p className="mt-2">Build, design, and implement functionalities for an existing website focused on the education sector.</p>
                            </div>
                        </div>
                    </li>
                </ol>
            </section>
            <section id="projects">
                <ul className="group/list text-xl font-maven tracking-tight">
                    <li className="mb-12">
                        <div className="grid grid-flow-col grid-cols-8 gap-4">
                            <figure className="col-span-2">
                                <img src="./../resources/images/bg-placeholder.jpg" alt="personal website preview" />
                                <figcaption className="h-px w-px overflow-hidden absolute">Preview of my personal website.</figcaption>
                            </figure>
                            <div className="col-span-6">
                                <h2>Personal Website</h2>
                                <p className="mt-2">Designed my personal website and built using ReactJS and Tailwind.</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="grid grid-flow-col grid-cols-8 gap-4">
                            <figure className="col-span-2">
                                <img src="./../resources/images/bg-placeholder.jpg" alt="connect eurobodalla website preview" />
                                <figcaption className="h-px w-px overflow-hidden absolute">Preview of the connect eurobodalla website.</figcaption>
                            </figure>
                            <div className="col-span-6">
                                <h2>Connect Eurobodalla</h2>
                                <p className="mt-2">Built a website for the community of Eurobodalla to provide a safe platform for a range of services and opportunities within the community groups.</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="grid grid-flow-col grid-cols-8 gap-4">
                            <figure className="col-span-2">
                                <img src="./../resources/images/bg-placeholder.jpg" alt="cross student mobile application preview" />
                                <figcaption className="h-px w-px overflow-hidden absolute">Preview of the cross student mobile application.</figcaption>
                            </figure>
                            <div className="col-span-6">
                                <h2>Cross Student Jobs</h2>
                                <p className="mt-2">Designed an app for international students looking for jobs and built front-end of application.</p>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="grid grid-flow-col grid-cols-8 gap-4">
                            <figure className="col-span-2">
                                <img src="./../resources/images/bg-placeholder.jpg" alt="online store mobile application preview" />
                                <figcaption className="h-px w-px overflow-hidden absolute">Preview of the online store mobile application.</figcaption>
                            </figure>
                            <div className="col-span-6">
                                <h2>Online Store App</h2>
                                <p className="mt-2">Designed an app specifically for online stores.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <Footer />
        </main>
    );
};

export default Home;