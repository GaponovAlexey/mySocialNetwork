import { Button, CardMedia, Icon } from "@material-ui/core";
import React from "react";
import { Link, NavLink, Route, Router, Switch } from "react-router-dom";
import LearnJs from "./LearnJs/Js/LearnJs";
import s from './Tit.module.css';
import video from './../../asets/images/game.mp4';


import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={ value !== index }
			id={ `simple-tabpanel-${index}` }
			aria-labelledby={ `simple-tab-${index}` }
			{ ...other }
		>
			{ value === index && (
				<Box p={ 3 }>
					<Typography>{ children }</Typography>
				</Box>
			) }
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

export default function TestTitulRout() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={ classes.root }>
			<AppBar position="static">
				<Tabs value={ value } onChange={ handleChange } aria-label="simple tabs example">
					<Tab label="Js" { ...a11yProps(0) } />
					<Tab label="Item free" { ...a11yProps(1) } />
					<Tab label="Item free" { ...a11yProps(2) } />
				</Tabs>
			</AppBar>
			<TabPanel value={ value } index={ 0 }>
				<NavLink className={ s.one } activeClassName="active" to='/JS'>
					<Button variant='contained' color='secondary'>Js one </Button>
					<NavLink className={ s.two } to='/ReactJs'>
						<Button variant='contained' color='secondary'> React</Button>
						<NavLink className={ s.four } to='/oneTwoJS'>
							<Button variant='contained' color='secondary'> oneTwo</Button>
						</NavLink>
						<NavLink className={ s.five } to='/'>
							<Button variant='contained' color='secondary'> free</Button>
						</NavLink>
					</NavLink>
				</NavLink>
			</TabPanel>
			<TabPanel value={ value } index={ 1 }>
				Item Two
			</TabPanel>
			<TabPanel value={ value } index={ 2 }>
				Item Three
			</TabPanel>
		</div>
	);
}


