import { useState } from 'react';
import BoxesContainer from './components/BoxesContainer.js';
import EmbeddedReport from './components/EmbeddedReport.js';
import Form from './components/Form.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import './index.css';
import Modal from './components/Modal.js';
import Settings from './BoardsSettings.json';

function App() {
	const [showModal, setShowModal] = useState(false);
	const [serviceName, setServiceName] = useState('');
	function closeModal() { setShowModal(false); }
	function openModal(service) {
		setShowModal(true);
		setServiceName(service);
	}

	const matchingObject = Settings.find(setting => setting.name === serviceName);

	return (
		<div id='main' className='scrolled-offset'>
			{
				showModal && matchingObject &&
				<Modal onClose={closeModal}>
					{
						serviceName !== "window-stack" ?
							<EmbeddedReport reportId={matchingObject.name}
								embedUrl={matchingObject.url} /> :
							<Form />
					}
				</Modal>
			}
			<h1 style={{ textAlign: 'center', marginBottom: '2em' }}>Embedded Reports Application</h1>
			<BoxesContainer onSelectReport={openModal} />
		</div>
	);
}

export default App;