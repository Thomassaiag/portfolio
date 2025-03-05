import React from 'react'

import { FaLinkedinIn, FaGithubSquare } from "react-icons/fa";

import herImg from "../assets/hero.svg";
const linkedinLink = "https://www.linkedin.com/in/thomas-saiag-5a56232/";
import { gitHubLink } from "../../data";

const Hero = () => {
	return (
		<div className="bg-emerald-100 py-24">
			<div className="align-element py-4 grid md:grid-cols-2">
				<article>
					<h1 className="text-7xl font-bold tracking-wider">
						I'm Thomas
					</h1>
					<p className=" mt-4 text-3xl text-slate-600 capitalize tracking-wide">
					 Full-Stack developer
					</p>
					<div className="flex flex-row gap-x-4 text-3xl mt-4">
						<a href={linkedinLink} target="_blank">
							<FaLinkedinIn className="icons"/>
						</a>
						<a href={gitHubLink} target="_blank">
							<FaGithubSquare className="icons" />
						</a>
					</div>
				</article>
				<article className="invisible  md:visible">
					<img className="h-80 ld:h-96 w-auto" src={herImg} alt="hero image" />
				</article>
			</div>
		</div>
	);
};

export default Hero;
