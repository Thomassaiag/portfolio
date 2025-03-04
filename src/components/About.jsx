import React from "react";
import SectionTitle from "./SectionTitle";
import aboutImg from "../assets/about.svg";

const about = `After 17 years in the Industry and Tech sectors, I took on the challenge of becoming a full-stack developer.
Over 2 years of hands-on training at Ada Tech School, I built solid expertise in JavaScript, React, Node.js, SQL, Docker, Git, Testing, CI/CD, and PTC ThingWorx through a wide range of projects.
I also work independently on personal projects to sharpen my skills in Python, and other technologies.

My previous career gave me valuable strengths that I bring to every project:`;
const skills = [
	"Strong ability to understand client needs and translate them into technical solutions",
	"Sharp analytical mindset shaped by experience in finance, and data analysis",
	"Solid project management skills and ability to thrive in international team environments",
	"Excellent communication skills, with a talent for making complex topics easy to understand",
	"Confidence in public speaking and presenting ideas",
	"Adaptability to fast-changing, complex environments",
];

const About = () => {
	return (
		<section className="bg-white py-20" id="about">
			<div className="align-element grid md:grid-cols-2 items-center gap-16">
				<img src={aboutImg} alt="about" className="image" />
				<article>
					<SectionTitle text="About me" />
					<p className="text-slate-600 mt-8 leading-loose">
						{about.split("\n").map((line, index) => {
							return (
								<React.Fragment key={index}>
									{line}
									<br />
								</React.Fragment>
							);
						})}
					</p>
                    <div className="pl-5">
					<ul className="text-slate-600 leading-loose list-disc">
						{skills.map((line, index) => {
                            return <li key={index}>{line}</li>;
						})}
					</ul>
                        </div>
				</article>
			</div>
		</section>
	);
};

export default About;
