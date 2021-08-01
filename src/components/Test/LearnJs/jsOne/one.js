import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button, Tooltip } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(16),
			height: theme.spacing(16),
		},
	},
}));

export default function SimplePaper() {
	const classes = useStyles();

	return (
		<div className={ classes.root }>
			<CircularProgress disableShrink />
			<Tooltip title="Add" arrow>
				<Button >Arrow</Button>
			</Tooltip>
			<Paper elevation={ 0 } />
			<Paper />
			<Paper elevation={ 3 } />
		</div>
	);
}