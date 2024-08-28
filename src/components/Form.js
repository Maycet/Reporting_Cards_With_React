import classes from './Form.module.css';

function doNothing(event) {event.stopPropagation();}

function Form(props) {
	return (
		<>
			<div className={classes.form_box} onClick={doNothing}>
				<div >
					<i className={props.image} style={{ fontSize: '5em' }} alt={props.text}></i>
				</div>
				<p>{props.text}</p>
			</div>
		</>
	);
}

export default Form;