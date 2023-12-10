import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "Sparkathon with Solana ",
        description: "This is a project about building website work with smart contract in Solana .",
        image: "/projects/Sparkathon.jpeg",
        gitUrl: "https://github.com/Ace6767/SPARKATHON"

    },
    {
        id: 2,
        title: "Future Porject",
        description: "This is a project.",
        image: "/projects/ComingSoon.png",
        gitUrl: ""
    },
    {
        id: 3,
        title: "Future Porject",
        description: "This is a project.",
        image: "/projects/ComingSoon.png",
        gitUrl: ""
    },
    {
        id: 4,
        title: "Future Porject",
        description: "This is a project.",
        image: "/projects/ComingSoon.png",
        gitUrl: ""
    },
];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;
