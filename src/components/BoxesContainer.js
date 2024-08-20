import Box from './Box.js';
import Settings from '../BoardsSettings.json';

function BoxesContainer({onSelectReport}) {
	return (
		<div className='container'>
			{ Settings.map(board => <Box key={board.name}
										 image={board.image}
										 text={board.description}
										 onSelectReport={onSelectReport}
										 serviceName={board.name} />) }
		</div>
	);
}

export default BoxesContainer;