import React from "react";
import "../App.css"

const Experiences = () => {
    const experiencesData = [
        {
            "id": 1,
            "duration": "2023 - PRESENT",
            "position": "IT Assistant",
            "company": "My Eye In The Sky",
            "description": "Build and maintain GPS device configurations, ensure that WordPress website is up to date and running.",
            "technology_used": ["WordPress", "HTML & CSS", "SQL", "PHP", "Teltonika", "Wialon"],
        },
        {
            "id": 2,
            "duration": "2017 - 2023",
            "position": "Web Developer",
            "company": "Odo Solutions & Enterprises Pte Ltd",
            "description": "Build, design, and ship quality websites and mobile apps, gathered diverse experiences from different type of projects.",
            "technology_used": ["Laravel", "React Native", "JavaScript", "TypeScript", "HTML & CSS", "PHP", "SQL", "Neo4j"],
        },
        {
            "id": 3,
            "duration": "2016 - 2017",
            "position": "Web Developer",
            "company": "Spectrum Tuition",
            "description": "Build, design, and implement functionalities for an existing website focused on the education sector.",
            "technology_used": ["CakePHP", "HTML & CSS", "SQL", "JavaScript"],
        }
    ];
    return (
        <section id="experiences" className="mb-16 scroll-mt-16">
            <div className="sticky top-0 py-6 bg-white dark:bg-green-950 -inset-x-4 z-10 block lg:hidden">
                <h2 className="text-2xl font-bold font-maven dark:text-green-300">Experiences</h2>
            </div>
            <ol className="group/list text-xl font-maven tracking-tight">
                {experiencesData.map((experience) => (
                    <li className="mb-12">
                        <div className="group relative grid lg:grid-flow-col transition-all lg:grid-cols-8 gap-2 lg:gap-4 hover:!opacity-100 group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all lg:-inset-x-6 lg:block lg:group-hover:bg-black/5 dark:lg:group-hover:bg-green-700/10"></div>
                            <span className="lg:col-span-2 text-lg dark:text-green-700">{experience.duration}</span>
                            <div className="lg:col-span-6">
                                <h2 className="font-semibold dark:text-green-300">{experience.position} ({experience.company})</h2>
                                <p className="mt-2 dark:text-green-600">{experience.description}</p>
                                <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technology used">
                                    {experience.technology_used.map((technology_used) => (
                                        <li>
                                            <span className="rounded-full bg-black/10 dark:bg-green-700/30 dark:text-green-500 py-1 px-3 text-base">{technology_used}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}

export default Experiences;