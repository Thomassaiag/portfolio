import React from "react";
import { Hero, Skills, About, Projects, Resume, Navbar } from "../components";

const HomeLayout = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Skills />
			<About />
			<Projects />
			<Resume />
		</>
	);
};

export default HomeLayout;
