import React from "react";
import "./../App.css";
import Navigation from "./../components/Navigation";
import Footer from "./../components/Footer";

const Home = () => {
    return (
        <main>
            <Navigation />
            <section>
                <figure>
                    <img src="" alt="John Ranel Dimaculangan's picture" />
                    <figcaption>My Profile Picture</figcaption>
                </figure>
                <h1 className="text-6xl font-bold underline">John Ranel Dimaculangan</h1>
                <span>Web Developer</span>
                <p>I build, optimize, and maintain websites.</p>

                <div>
                    <figure>
                        <img src="" alt="John Ranel Dimaculangan's Linkedin" />
                        <figcaption>Logo of Linkedin</figcaption>
                    </figure>
                    <figure>
                        <img src="" alt="John Ranel Dimaculangan's GitHub" />
                        <figcaption>Logo of GitHub</figcaption>
                    </figure>
                </div>
            </section>
            <section>
                <p>I’m currently a student at King’s Own Institute studying a Master’s degree in Information Technology (Cyber Security). I am a passionate developer focused on delivering functional and accessible websites. Driven by a deep interest in IT, problem-solving and helping people by creating effective web-solutions.</p>
                <p>Currently I am a Part-time IT Assistant at My Eye In The Sky, specializing in web maintenance. I contribute to the creation of new content and maintaining the UI / design of the company website, ensuring optimal performance and adherence to standards and best practices along with seamless user experience. Aside from this I also do for the company the account setups, GPS device configurations, and logistics setup.</p>
                <p>My past experiences also include working for a start-up, which I have had the opportunity to develop website across a variety of companies/clients, including educational, health, opportunity and fund-raising platforms. Additionally I actively work personal projects to further enhance my skills.</p>
            </section>
            <section>
                <div>
                    <span>2023 - Present</span>
                    <h2>IT Assistant (My Eye In The Sky)</h2>
                    <p>Build and maintain GPS device configurations, ensure that WordPress website is up to date and running.</p>
                </div>
                <div>
                    <span>2017 - 2023</span>
                    <h2>Web Developer (Odo Solutions & Enterprises Pte Ltd)</h2>
                    <p>Build, design, and ship quality websites and mobile apps, gathered diverse experiences from different type of projects.</p>
                </div>
                <div>
                    <span>2016 - 2017</span>
                    <h2>Web Developer (Spectrum Tuition)</h2>
                    <p>Build, design, and implement functionalities for an existing website focused on the education sector.</p>
                </div>
            </section>
            <section>
                <div>
                    <figure>
                        <img src="" alt="personal website preview" />
                        <figcaption>Preview of my personal website.</figcaption>
                    </figure>
                    <h2>Personal Website</h2>
                    <p>Designed my personal website and built using ReactJS and Tailwind.</p>
                </div>
                <div>
                    <figure>
                        <img src="" alt="connect eurobodalla website preview" />
                        <figcaption>Preview of the connect eurobodalla website.</figcaption>
                    </figure>
                    <h2>Connect Eurobodalla</h2>
                    <p>Built a website for the community of Eurobodalla to provide a safe platform for a range of services and opportunities within the community groups.</p>
                </div>
                <div>
                    <figure>
                        <img src="" alt="cross student mobile application preview" />
                        <figcaption>Preview of the cross student mobile application.</figcaption>
                    </figure>
                    <h2>Cross Student Jobs</h2>
                    <p>Designed an app for international students looking for jobs and built front-end of application.</p>
                </div>
                <div>
                    <figure>
                        <img src="" alt="online store mobile application preview" />
                        <figcaption>Preview of the online store mobile application.</figcaption>
                    </figure>
                    <h2>Online Store App</h2>
                    <p>Designed an app specifically for online stores.</p>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Home;