import React from "react";
import SectionTitle from "./SectionTitle";
import { TbFileCv } from "react-icons/tb";


const resumeUrl = "/CV_Thomas_Saiag.pdf";

const Resume = () => {
	return (
		<div className="align-element" id="resume">
			<SectionTitle text="Resume" />
			<div>
				<h3>You can dowload my Resume</h3>
				<a href={resumeUrl} download="CV_Thomas_Saiag.pdf">
					Click here
				</a>
                <h3>Or you can view it directly:</h3>
                <a href={resumeUrl} target="_blank" rel='noopener noreferrer'><TbFileCv className="icons"/></a>
			</div>
		</div>
	);
};

export default Resume;
