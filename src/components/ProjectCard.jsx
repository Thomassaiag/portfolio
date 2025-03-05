import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import ProjectDescription from "./ProjectDescription";

const ProjectCard = ({ id, img, url, github, title, text }) => {
	return (
		<article className="bg-white rounded-lg shadow-md hover:shadow-lg flex flex-col justify-between">
			<img
				className="h-64 rounded-t-md w-full object-cover"
				src={img}
				alt={title}
			/>
			<div className="p-6 flex-grow">
				<h3 className="text-xl tracking-wide font-medium">{title}</h3>
				<ProjectDescription text={text} />
			</div>
			<div className="mt-4 flex gap-x-4 p-6">
				<a href={github} target="_blank">
					<FaGithubSquare className="icons" />
				</a>
				<a href={url} target="_blank">
					<TbWorldWww className="icons" />
				</a>
			</div>
		</article>
	);
};

export default ProjectCard;
