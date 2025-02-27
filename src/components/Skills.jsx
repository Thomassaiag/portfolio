import React from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../../data";
import SkillsCard from "./SkillsCard";

const Skills = () => {
	return (
		<section className="align-element py-20" id="skills">
			<SectionTitle />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3gap-8 py-16">
				{skills.map((skill) => {
					const { id } = skill;
					return <SkillsCard key={id} {...skill} />;
				})}
			</div>
		</section>
	);
};

export default Skills;
