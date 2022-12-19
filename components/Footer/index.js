import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function Footer() {
	return (
		<footer className="py-8 text-center text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800">
			<p>Copyright &copy; {new Date().getFullYear()} Wilmer Martinez</p>
			<div className="flex justify-center mt-4">
				<a
					href="https://www.linkedin.com/in/wilmer-martinez/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiFillLinkedin className="text-xl mx-4" />
				</a>
				<a
					href="https://github.com/wilmr"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiFillGithub className="text-xl mx-4" />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
