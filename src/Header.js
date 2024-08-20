import React from 'react';
import './App.css';

function Header() {
	return (
		<div>
			<header id="header" className="header fixed-top">
				<div className='container'>
					<div className='logo'>
						<a href="https://maycet.github.io/"><img src="maycet_3.1_blanco.png" alt="Logo Maycet" className="img-fluid" /></a>						
					</div>
				</div>
				{/* Content of the header will go here */}
			</header>
		</div>
	);
}

export default Header;