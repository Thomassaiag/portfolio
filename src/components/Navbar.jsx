import React from "react";
import { links } from "../../data";

const Navbar = () => {
	return (
		<nav className="bg-emerald-200">
			<div className="mx-auto columns-4 gap-20">
				{links.map((link) => {
					const { id, href, text } = link;
					return (
						<a href={href} key={id}>
							{text}
						</a>
					);
				})}
			</div>
		</nav>
	);
};

export default Navbar;
