import React from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";


import { projects } from "../../data";

const Projects = () => {
	return (
		<section className="align-element py-20" id="projects">
			<SectionTitle className='py-16' text="My Projects" />
			<div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
				{projects.map((project) => {
					const { id } = project;
					return <ProjectCard key={id} {...project} />;
				})}
			</div>
		</section>
	);
};

export default Projects;
