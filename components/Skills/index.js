import React from 'react';
import Image from 'next/image';
import frontend from '../../public/frontend.png';
import server from '../../public/server.png';
import tools from '../../public/tools.png';

function Skills() {
	return (
		<section>
			<div>
				<h3 className="text-3xl py-1 dark:text-white">Skills</h3>
				<p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
					"Web development skills are like spices - a little goes a long way,
					but the right blend can take your site from bland to grand."
				</p>
			</div>
			<div className="lg:flex gap-10">
				<div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-slate-700">
					<Image className="mx-auto" src={frontend} width={100} height={100} />
					<h3 className="text-lg font-medium pt-8 pb-2">Front End</h3>
					<p className="py-2">
						Front-end tools used to develop the user interface and user
						experience of a website or application.
					</p>
					<h4 className="py-4 text-teal-600">Front End tools I use :</h4>
					<ul className="text-gray-800 py-2 dark:bg-gray-200 rounded-lg font-bold">
						<li>JavaScript</li>
						<li>React</li>
						<li>NextJS</li>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>BootStrap</li>
						<li>TailwindCSS</li>
					</ul>
				</div>
				<div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-slate-700">
					<Image className="mx-auto" src={server} width={100} height={100} />
					<h3 className="text-lg font-medium pt-8 pb-2">Back End</h3>
					<p className="py-2">
						Back-end tools used to build and manage the server-side
						infrastructure and logic of a website or application.
					</p>
					<h4 className="py-4 text-teal-600">Back End tools I use</h4>
					<ul className="text-gray-800 py-2 dark:bg-gray-200 rounded-lg font-bold">
						<li>Node</li>
						<li>Express</li>
						<li>MongoDB</li>
						<li>MySQL</li>
						<li>Sequelize</li>
						<li>GraphQL</li>
						<li>REST API</li>
					</ul>
				</div>
				<div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-slate-700">
					<Image className="mx-auto" src={tools} width={100} height={100} />
					<h3 className="text-lg font-medium pt-8 pb-2">Tools</h3>
					<p className="py-2">
						SWE tools used to support the development, testing, and maintenance
						of software applications.
					</p>
					<h4 className="py-4 text-teal-600">Development Tools I use</h4>
					<ul className="text-gray-800 py-2 dark:bg-gray-200 rounded-lg font-bold">
						<li>GitHub</li>
						<li>Git</li>
						<li>Agile</li>
						<li>Heroku</li>
						<li>PWA</li>
						<li>TDD</li>
						<li>Webpack</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Skills;
