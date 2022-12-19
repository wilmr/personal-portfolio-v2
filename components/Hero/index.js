import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function Hero() {
	return (
		<div className="text-center p-10">
			<h2 className="text-5xl py-2 text-teal-600 font-medium font-burtons md:text-6xl">
				Wilmer Martinez
			</h2>
			<h3 className="text-2xl py-2 md:text-3xl dark:text-white">
				Full Stack Web Developer
			</h3>
			<p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
				As a lifelong tech enthusiast, I have always been drawn to the world of
				web development. In 2022 I began training in modern app development at
				UC Davis Coding Bootcamp. With a backgorund in computer science and a
				natural aptitude for problem-solving, I have the skills and knowledge to
				create functional and visually appealing websites. In my spare time, you
				can find me tinkering with new technologies, staying up-to-date with the
				latest web development trends, and collaborating with other
				professionals in the industry.
			</p>
			<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
				<a
					href="https://www.linkedin.com/in/wilmer-martinez/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiFillLinkedin />
				</a>
				<a
					href="https://github.com/wilmr"
					target="_blank"
					rel="noopener noreferrer"
				>
					{' '}
					<AiFillGithub />
				</a>
			</div>
		</div>
	);
}

export default Hero;
