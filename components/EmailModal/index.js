import { useState } from 'react';

const EmailSentModal = ({ show, handleClose }) => {
	const [showEmailSentModal, setShowEmailSentModal] = useState(false);

	const handleCloseEmailSentModal = () => {
		setShowEmailSentModal(false);
	};

	return (
		<div className={`modal ${show ? 'block' : 'hidden'}`}>
			<section className="modal-main">
				<h3 className="text-2xl font-medium text-center mb-8">
					Email Sent Successfully!
				</h3>
				<div className="text-center">
					<button
						className="bg-teal-500 text-white px-4 py-2 rounded-md"
						onClick={handleClose}
					>
						Close
					</button>
				</div>
			</section>
		</div>
	);
};

export default EmailSentModal;
