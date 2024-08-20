import classes from './Box.module.css';

function Box(props){
	return (
		<div className={classes.box} onClick={() => props.onSelectReport(props.serviceName)}>
			<div className={classes.image_container}>
				<i className={props.image} style={{ fontSize: '5em' }} alt={props.text}></i>
			</div>
		<p>{props.text}</p>
		</div>
	);
}

export default Box;