import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
//import classes from './One.module.css';
import {
	Typography, Paper, Container,
	Grid, Card, CardMedia, CardContent,
	CardActions,
	BottomNavigation,
	BottomNavigationAction,
} from '@material-ui/core';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';



const useStayles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
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
	},


}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

const One = () => {
	const classes = useStayles();
	const [value, setValue] = React.useState('recents')

	const handleChange = (e, newValue) => {
		setValue(newValue)
	}

	return (
		<>
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
									image="https://source.unsplash.com/random"
									title='image title'
								/>
								<CardContent>
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
									<LayerIcon />
									<PlayCircleFilledIcon />
								</CardActions>
							</Grid>
						)) }
					</Grid>
				</Container>
			</main>
			<footer>
				<Typography variant='h6' align='center'>Footer</Typography>
				<BottomNavigation
					value={ value }
					onChange={ handleChange }
					className={ classes.root }
				>
					<BottomNavigationAction
						label='Recents'
						value='recents'
						icon={ <RestoreIcon /> }
					/>
					<BottomNavigationAction
						label='Favorite'
						value='favorite'
						icon={ <FavoriteIcon /> }
					/>
					<BottomNavigationAction
						label='Nearby'
						value='nearby'
						icon={ <LocationIcon /> }
					/>
					<BottomNavigationAction
						label='Folder'
						value='folder'
						icon={ <FolderIcon /> }
					/>
				</BottomNavigation>
				<Typography align='center' color='textSecondary'
					components='p' variant='subtitle1'>
					My Social Network
				</Typography>
			</footer>
		</>
	)
}


export default One;