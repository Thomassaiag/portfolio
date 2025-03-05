import React from 'react'
import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaPython, FaNode } from 'react-icons/fa';

import { RiTailwindCssFill } from "react-icons/ri";
import TwxLogo from './src/components/TwxLogo';
// import LaurePoterieImg from "./images/laurePoterie.jpg";


export const gitHubLink = "https://github.com/Thomassaiag";

export const links = [
	{ id: nanoid(), href: "#home", text: "home" },
	{ id: nanoid(), href: "#skills", text: "skills" },
	{ id: nanoid(), href: "#about", text: "about" },
	{ id: nanoid(), href: "#projects", text: "projects" },
	{ id: nanoid(), href: '#resume', text: "resume" },
];

export const skills = [
	{
		id: nanoid(),
		title: "HTML&CSS",
		icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
		text: "To udpate",
	},
    	{
		id: nanoid(),
		title: "Tailwind & Bootstrap",
		icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
		text: "To udpate",
	},

	{
		id: nanoid(),
		title: "Javascript",
		icon: <FaJs className="h-16 w-16 text-emerald-500" />,
		text: "To update",
	},
	{
		id: nanoid(),
		title: "Node.Js",
		icon: <FaNode className="h-16 w-16 text-emerald-500" />,
		text: "To update",
	},
	{
		id: nanoid(),
		title: "React",
		icon: <FaReact className="h-16 w-16 text-emerald-500" />,
		text: "To update",
	},
	{
		id: nanoid(),
		title: "Python",
		icon: <FaPython className="h-16 w-16 text-emerald-500" />,
		text: "To update",
	},
	{
		id: nanoid(),
		title: "Thingworx",
		icon: <TwxLogo />,
		text: "To update",
	},
];

export const projects = [
	{
		id: nanoid(),
		img: "./images/laurePoterie.JPG",
		url: "http://188.165.238.74:14000/",
		github: "https://github.com/Thomassaiag/SitePoterieLaure",
		title: "Laure Poterie",
		text: "Product visualisation \nAuthentication and Secured Routes setup with JWT \nAdmin features (full site update) \nNewsLetter subscription \nMessages sending with Nodemailer \nTested with Vitest \nDeployed with a CI/CD and Docker",
	},
	{
		id: nanoid(),
		img: "./images/mixMatcher.JPG",
		url: "https://shakr.netlify.app/",
		github: "https://github.com/Thomassaiag/MixMatcherSolo",
		title: "Shakr",
		text: `A fun project to fetch a Cocktail API
        Fetch with axios and React Queries to allow caching
        Singe Page Application with React Router
        Execution confirmation with Toastify`,
	},
	{
		id: nanoid(),
		img: "./images/Portfolio.JPG",
		url: "https://thomassaiagportfolio.netlify.app/",
		github: "https://github.com/Thomassaiag/portfolio",
		title: "This Portfolio (A bit Meta, I know...)",
		text: "Experimenting with TailwindCSS.",
	},
];
