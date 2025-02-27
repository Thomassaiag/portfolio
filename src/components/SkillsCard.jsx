import React from "react";
import { IoLogoJavascript } from "react-icons/io5";

const SkillsCard = ({ title, icon, text }) => {
	return (
		<article>
            {icon}
            <h4>{title}</h4>
            <p>{text}</p>
			<div>SkillsCard</div>
		</article>
	)
}

export default SkillsCard;
