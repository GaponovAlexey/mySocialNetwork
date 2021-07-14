import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
//import classes from './One.module.css';
import {
	Typography, Paper, Container, Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStayles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(1)
	},
	title: {
		flexGrow: 1
	},
	mainFeaturesPost: {
		position: 'relative',
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4)
	},
	mainFeaturesPostContainer: {
		position: 'relative',
		padding: 'theme.spacing(6)',
		marginTop: theme.spacing(8),
	},
	overlay: {
		//position: 'absolute',
		top: 0,
		botton: 0,
		right: 0,
		left: 0,
		backgroundOverlay: "rgba(0,0,0,0.3)"
	}
}))

const One = () => {
	const classes = useStayles();
	return (
		<main>
			<Paper className={ classes.mainFeaturesPost }
				style={ { backgroundImage: `url(https://source.unsplash.com/random)` } }>
				<Container fixed >
					<div className={classes.overlay}>
						<Grid container>
							<Grid ithem md={ 6 }>
								<div className={ classes.mainFeaturesPostContainer }>
									<Typography
										color="red"
										align='center'
										component='h1'
										variant='h4'
										gutterBottom
									>
										Web Developer Blog of Success
									</Typography>
									<Typography
										color="red"
										align='center'
										component='h5'
										variant='h5'
										gutterBottom
									>
										Want a free account to try out the new version of generatedata? We're looking for people to test it out prior to releasing the script in the next few weeks.
										Preference will be given to people who already have an account on the site, but more eyes the better! Just reach out to me at
									</Typography>
								</div>
							</Grid>
						</Grid>
					</div>
				</Container>
			</Paper>

		</main>
	)
}


export default One;