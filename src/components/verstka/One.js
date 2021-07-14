import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
//import classes from './One.module.css';
import {
	Typography, Paper, Container,
	Grid, Card, CardMedia, CardContent,
	CardActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import { PlayCircleFilled } from '@material-ui/icons/PlayCircleFilled';
import { Layericon } from '@material-ui/icons/Layericon';



const useStayles = makeStyles((theme) => ({
	mainFeaturesPost: {
		position: 'relative',
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),

		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'

	},
	mainFeaturesPostContainer: {
		position: 'relative',
		padding: 'theme.spacing(6)',
		marginTop: theme.spacing(8),
	},
	mainButton: {
		marginRight: theme.spacing(1)
	},
	cardGrid: {
		marginTop: theme.spacing(4)
	},
	CardMedia: {
		paddingTop: '56.25%'
	}

}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

const One = () => {
	const classes = useStayles();


	return (
		<main>
			<Paper className={ classes.mainFeaturesPost }
				style={ { backgroundImage: `url(https://source.unsplash.com/random)` } }>
				<Container fixed >
					<Grid container ithem md={ 6 }>
						<div className={ classes.mainFeaturesPostContainer }>
							<Typography
								align='center'
								component='h1'
								variant='h4'
								gutterBottom
							>
								Web Developer Blog of Success
							</Typography>
							<Typography
								align='center'
								component='h5'
								variant='h5'
								gutterBottom
							>
								Want a free account to try out the new version of generatedata? We're looking for people to test it out prior to releasing the script in the next few weeks.
							</Typography>
							<Button variant='contained' color='secondary'>
								Learn more
							</Button>
						</div>
					</Grid>
				</Container>
			</Paper>
			<div className={ classes.mainContent }>
				<Container maxWidth='sm'>
					<Typography align='center' variant='h2' >My Blog</Typography>
					<Typography align='center' variant='h5' >Note! I'm in the process of updating the email server configuration for this domain, in anticipation of the newer version of the site.</Typography>
					<div className={ classes.mainButton }>
						<Grid container spacing={ 2 } justify='center'>
							<Grid item>
								<Button variant='contained' color='primary' >Start Now</Button>
							</Grid>
							<Grid item>
								<Button variant='outlined' color='primary'>Leatn mo</Button>
							</Grid>
						</Grid>
					</div>
				</Container>
			</div>
			<Container className={ classes.cardGrid } maxWidth='md'>
				<Grid container spacing={ 4 }>
					{ cards.map((card) => (
						<Grid item key={ card } xs={ 12 } sm={ 6 } md={ 4 }>
							<Card className={ classes.card }></Card>
							<CardMedia className={ classes.CardMedia }
								images="https://sourse.unsplash/random"
								title='image title'
							/>
							<CardContent className={classes.CardMedia}>
								<Typography variant='h5'>Blog Post</Typography>
								<Typography>
									Howdy all. Today I made a long overdue update to this site, incorporating a whole array of new features and bug fixes. It should all be backward compatible and bug
								</Typography>
							</CardContent>
							<CardActions>
								<Button size='small' color='primary'>
									View
								</Button>
								<Button size='small' color='primary'>
									Edit
								</Button>
								<Layericon/>
								{/*<PlayCircleFilled />*/}

							</CardActions>
						</Grid>

					)) }

				</Grid>
			</Container>
		</main>
	)
}


export default One;