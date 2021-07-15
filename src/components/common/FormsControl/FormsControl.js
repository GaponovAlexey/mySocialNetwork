import React from 'react';
import { Field } from 'redux-form';
import s from "./FormsControl.module.css";


const FormsControl = ({ input, meta, child, element, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={ s.formControl + " " + (hasError ? s.error : " ") }>
			<div>
				{ props.children }
			</div>
			{ hasError && <span>{ meta.error }</span> }
		</div>
	)
}


export const Textarea = (props) => {
	const { input, meta, child, ...restProps } = props;
	return <FormsControl { ...props }><textarea { ...props.input } { ...restProps } /></FormsControl>
}

export const Input = (props) => {
	const { input, meta, child, ...restProps } = props;
	return <FormsControl { ...props }><input { ...props.input } { ...restProps } /></FormsControl>
}


export const CreateField = (placeholder, name, validate, component ) => {
	<Field
		placeholder={ placeholder }
		name={ name }
		component={ component }
		validate={ validate } />
}


