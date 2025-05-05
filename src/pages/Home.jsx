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
            <Footer />
        </main>
    );
};

export default Home;