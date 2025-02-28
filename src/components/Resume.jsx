import React from "react";
import SectionTitle from "./SectionTitle";
import { TbFileCv } from "react-icons/tb";
import { IoMdEye } from "react-icons/io";

const resumeUrl = "/CV_Thomas_Saiag.pdf";
import resumeImg from "../assets/resume.svg";

const Resume = () => {
	return (
		<section className="py-20 align-element " id="resume">
			<div className="grid md:grid-cols-2 gap-8">
				<img className="image" src={resumeImg} alt="resume image" />

				<article>
					<SectionTitle text="Resume" />
					<div className="grid md:grid-cols-2 gap-8">
						<div>
							<p className="text-slate-600 mt-8 leading-loose mb-6">
								You can dowload my Resume
							</p>
							<a href={resumeUrl} download="CV_Thomas_Saiag.pdf">
								<TbFileCv className="icons" />
							</a>
						</div>
						<div>
							<p className="text-slate-600 mt-8 leading-loose mb-6">
								Or, you can view it directly
							</p>
							<a
								href={resumeUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<IoMdEye className="icons" />
							</a>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Resume;
