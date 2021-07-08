import React from 'react';
import s from "./FormsControl.module.css";


const FormsControl = ({ input, meta, child, element, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={ s.formControl + " " + (hasError ? s.error : " ") }>
			<div>
				<element { ...input } { ...props } />
			</div>
			{ hasError && <span>{ meta.error }</span> }
		</div>
	)
}


export const Textarea = (props) => {
	return <FormsControl { ...props }><textarea { ...props.input } { ...props } /></FormsControl>
}

export const Input = (props) => {
	return <FormsControl { ...props }><input { ...props.input } { ...props } /></FormsControl>
}




//export const Input = ({ input, meta, ...props }) => {
//	const hasError = meta.touched && meta.error;
//	return (
//		<div className={ s.formControl + " " + (hasError ? s.error : " ") }>
//			<div>
//				<input { ...input } { ...props } />
//			</div>
//			{ hasError && <span>{ meta.error }</span> }
//		</div>
//	)
//}


//export const Element = Element => ({ input, meta, ...props }) => {
//	const hasError = meta.touched && meta.error;
//	return (
//		<div className={ s.formControl + " " + (hasError ? s.error : "") }>
//			<Element { ...input } { ...props } />
//			{ hasError && <span> { meta.error } </span> }
//		</div>
//	);
//};
//А потом просто его импортим в компоненту формы, вызываем как

//const Textarea = Element("textarea");

//и передаем

//	< Field component = { Textarea } .../>

//Все работает!)