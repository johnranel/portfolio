import React from "react";
import "../App.css"

const Projects = () => {
    const projectsData = [
        {
            "id": 1,
            "url": "https://johnranel.github.io/portfolio",
            "img_url": "/portfolio/resources/images/personal-website.png",
            "img_alt": "personal website preview",
            "img_caption": "Preview of my personal website.",
            "title": "Personal Website",
            "description": "Designed my personal website and built using ReactJS and Tailwind.",
            "technology_used": ["ReactJS", "Tailwind", "JavaScript", "HTML & CSS", "Figma"],
        },
        {
            "id": 2,
            "url": "https://ce.org.au",
            "img_url": "/portfolio/resources/images/connect-eurobodalla.png",
            "img_alt": "connect eurobodalla website preview",
            "img_caption": "Preview of the connect eurobodalla website.",
            "title": "Connect Eurobodalla",
            "description": "Built a website for the community of Eurobodalla to provide a safe platform for a range of services and opportunities within the community groups.",
            "technology_used": ["ReactJS", "Tailwind", "Firebase", "JavaScript", "HTML & CSS", "Google Cloud Platform"],
        },
        {
            "id": 3,
            "url": "https://johnranel.github.io/blog",
            "img_url": "/portfolio/resources/images/life-musings-by-jane.png",
            "img_alt": "life musings by jane blog website preview",
            "img_caption": "Preview of the Life Musings by Jane Blog Website.",
            "title": "Life Musings by Jane",
            "description": "Designed and built a blog website for a fictional character named Jane.",
            "technology_used": ["HTML & CSS", "JavaScript", "Figma"],
        },
        {
            "id": 4,
            "url": "https://github.com/JohnRanelKOI/cross-student",
            "img_url": "/portfolio/resources/images/cross-student-jobs.png",
            "img_alt": "cross student mobile application preview",
            "img_caption": "Preview of the cross student mobile application.",
            "title": "Cross Student Jobs",
            "description": "Designed an app for international students looking for jobs and built front-end of application.",
            "technology_used": ["Flutter", "Dart", "Figma"],
        },
        {
            "id": 5,
            "url": "https://www.figma.com/proto/QkFJMc9jN2VSzx1OPNxBOG/KMart?node-id=16-201&p=f&t=KLJXdNzk1Zbmz5Cn-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
            "img_url": "/portfolio/resources/images/online-store.png",
            "img_alt": "online store mobile application preview",
            "img_caption": "Preview of the online store mobile application.",
            "title": "Online Store App",
            "description": "Designed an app specifically for online stores.",
            "technology_used": ["Figma"],
        }
    ];
    return (
        <section id="projects" className="scroll-mt-16">
            <div className="sticky top-0 py-6 bg-white dark:bg-green-950 -inset-x-4 z-10 block lg:hidden">
                <h2 className="text-2xl font-bold font-maven dark:text-green-300">Projects</h2>
            </div>
            <ul className="group/list text-xl font-maven tracking-tight">
                {projectsData.map((project) => (
                    <li className="mb-12">
                        <a href={project.url} target="_blank" rel="noreferrer">
                            <div className="group relative grid lg:grid-flow-col tansition-all lg:grid-cols-8 gap-2 lg:gap-4 hover:!opacity-100 group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all lg:-inset-x-6 lg:block lg:group-hover:bg-black/5 dark:lg:group-hover:bg-green-700/10"></div>
                                <figure className="lg:col-span-2">
                                    <img src={project.img_url} alt={project.img_alt} className="border-2 border-indigo-600/10 rounded-md" />
                                    <figcaption className="h-px w-px overflow-hidden absolute">{project.img_caption}</figcaption>
                                </figure>
                                <div className="lg:col-span-6">
                                    <h2 className="font-semibold dark:text-green-300">{project.title}</h2>
                                    <p className="mt-2 dark:text-green-600">{project.description}</p>
                                    <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technology used">
                                        {project.technology_used.map((technology_used) => (
                                            <li>
                                                <span className="rounded-full bg-black/10 dark:bg-green-700/30 dark:text-green-500 py-1 px-3 text-base">{technology_used}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;