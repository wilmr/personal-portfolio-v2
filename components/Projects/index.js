import React from 'react';
import Image from 'next/image';
import musicmarket from '../../public/musicmarket.png';
import deepthoughts from '../../public/deepthoughts.png';
import photoport from '../../public/photoport.png';
import musicenvivo from '../../public/musicenvivo.png';

function Projects() {
	return (
		<section>
			<div>
				<h3 className="text-3xl py-1 dark:text-white">Projects</h3>
			</div>
			<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
				<div className="basis-1/3 flex-1">
					<h3 className="text-medium text-center">Music Market</h3>
					<a
						href="https://g02-music-market.herokuapp.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={musicmarket}
							className="rounded-lg object-cover"
							width={'100%'}
							height={'100%'}
							layout="responsive"
						/>
					</a>
				</div>
				<div className="basis-1/3 flex-1">
					<h3 className="text-medium text-center">Deep Thoughts</h3>
					<a
						href="https://cryptic-wave-02667.herokuapp.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={deepthoughts}
							className="rounded-lg object-cover"
							width={'100%'}
							height={'100%'}
							layout="responsive"
						/>
					</a>
				</div>
				<div className="basis-1/3 flex-1">
					<h3 className="text-medium text-center">Photo Port</h3>
					<a
						href="https://wilmr.github.io/photo-port/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={photoport}
							className="rounded-lg object-cover"
							width={'100%'}
							height={'100%'}
							layout="responsive"
						/>
					</a>
				</div>
				<div className="basis-1/3 flex-1">
					<h3 className="text-medium text-center">Music en Vivo</h3>

					<a
						href="https://wilmr.github.io/Music-en-Vivo/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={musicenvivo}
							className="rounded-lg object-cover"
							width={'100%'}
							height={'100%'}
							layout="responsive"
						/>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Projects;
