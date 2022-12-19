import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

function Nav(props) {
	return (
		<nav className="py-10 mb-12 flex justify-between">
			<h1 className="text-xl font-burtons dark:text-white">WM</h1>
			<ul className="flex items-center">
				<li>
					<BsFillMoonStarsFill
						className="cursor-pointer text-2xl dark:fill-white"
						onClick={props.toggleDarkMode}
					/>
				</li>
				<li>
					<a
						className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
						href="https://drive.google.com/file/d/1TK6vL4SM8r7kdgdF4ktqcmivsV66I7PM/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
