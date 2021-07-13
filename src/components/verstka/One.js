import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
//import classes from './One.module.css';
import {
	AppBar, Container, Toolbar,
	IconButton, Typography, Box,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStayles = makeStyles((theme) => ({
	root: {
		flexGrow:1 
	},
	menuButton: {
		marginRight: theme.spacing(1)
	},
	title: {
		flexGrow:1
	}
}))

const One = () => {
	const classes = useStayles();
	return (
		<AppBar position='fixed'>
			<Container fixed>
				<Toolbar>
					<IconButton edge='start'
						color='inherit' aria-laabel='menu' className={classes.menuButton}> 
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' className={ classes.title }> My Mens Blog</Typography>
					<Box mr={ 3 }>
						<Button color='inherit' variant='outlined'>log In</Button>
					</Box>
					<Button color='secondary' variant='contained'>Sing Up</Button>
				</Toolbar>
			</Container>
		</AppBar>
	)
}


export default One;