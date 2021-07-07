import React from 'react';


//export const Textarea = (props) => {
export const Textarea = ({input, meta, ...props}) => {
	debugger;
	return (
		<div>
			<textarea {...input} {...props}/>
		</div>
	)
}
