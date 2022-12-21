import React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import { Fade } from 'react-awesome-reveal';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);
	function toggleDarkMode() {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	}
	return (
		<div className={darkMode ? 'dark' : ''}>
			<Head>
				<title>Wilmer Martinez Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-white px-10 py-10 md:px-20 lg:px-40 dark:bg-gray-900">
				{/* add min-h-screen to section to take full vh */}
				<Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
				<Fade>
					<Hero />
					<Skills />
					<Projects />
					<ContactForm />
				</Fade>
			</main>
			<Footer />
		</div>
	);
}
