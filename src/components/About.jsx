import React from "react";
import SectionTitle from "./SectionTitle";
import aboutImg from "../assets/about.svg";

const About = () => {
	return (
		<section className="bg-white py-20" id="about">
			<div className="align-element grid md:grid-cols-2 items-center gap-16">
				<img src={aboutImg} alt="about" className="image" />
				<article>
					<SectionTitle text="About me" />
					<p className="text-slate-600 mt-8 leading-loose">
						To update
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;
