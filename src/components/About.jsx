import SectionTitle from "./SectionTitle";
import aboutImg from "../assets/about.svg";

const About = () => {
	return (
		<section className="bg-white py-20" id="about">
			<div className="align-element grid md:grid-cols-2 items-center gap-16">
				<img src={aboutImg} alt="about" className="w-full h-64" />
				<article>
					<SectionTitle text="About me" />
					<p className="text-slate-600 mt-8 leading-loose">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Consequatur provident et ratione, corporis
						temporibus non, eos vitae facilis ipsa debitis rem dolor
						autem molestiae. Dolor alias impedit perferendis ex
						cupiditate.
					</p>
				</article>
			</div>
		</section> 
	);
};

export default About;
