import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_cyxh6g9',
				'template_0i6x6lr',
				form.current,
				'avDf71P-wy8sNIBQc'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	return (
		<section className="mt-20 p-10 bg-gray-100 rounded-md">
			<h3 className="text-2xl font-medium mb-8 text-center">Contact</h3>
			<form ref={form} onSubmit={sendEmail}>
				<div className="flex flex-col md:flex-row md:items-center mb-6">
					<label htmlFor="name" className="w-full md:w-1/4 mb-2 md:mb-0">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="user_name"
						placeholder="John Doe"
						className="w-full md:w-3/4 p-2 border rounded-md"
					/>
				</div>
				<div className="flex flex-col md:flex-row md:items-center mb-6">
					<label htmlFor="email" className="w-full md:w-1/4 mb-2 md:mb-0">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="user_email"
						placeholder="john@example.com"
						className="w-full md:w-3/4 p-2 border rounded-md"
					/>
				</div>
				<div className="flex flex-col md:flex-row md:items-center mb-6">
					<label htmlFor="message" className="w-full md:w-1/4 mb-2 md:mb-0">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						placeholder="Enter your message here"
						rows="6"
						className="w-full md:w-3/4 p-2 border rounded-md"
					></textarea>
				</div>
				<div className="text-center">
					<button
						type="submit"
						value="Send"
						className="bg-teal-500 text-white px-4 py-2 rounded-md"
					>
						Submit
					</button>
				</div>
			</form>
		</section>
	);
}

export default ContactForm;
