import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Menu } from '@material-ui/core';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import SwipeableTemporaryDrawer from './headerPanel';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

export default function Header(props) {
    const classes = useStyles();
    return (<>
        <React.Fragment>
            <div className={ s.cloc1 }>
            </div>
            <AppBar position="static" className={ s.header }>
                <Toolbar>
                    <IconButton edge="start" className={ classes.menuButton } color="inherit" aria-label="menu">
                        <DirectionsRunIcon />
                        <SwipeableTemporaryDrawer />
                    </IconButton>
                    <Typography variant="h6" className={ classes.title }>
                        <img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png' />
                    </Typography>
                    { props.isAuth
                        ? <div>{ props.login }<Button color="inherit" onClick={ props.logout }>log out</Button></div>
                        : <NavLink to={ '/login' }><Button className={ s.loginBlock } variant="contained" color="secondary">Login</Button></NavLink> }
                </Toolbar>
            </AppBar>
        </React.Fragment>
    </>)
}

//export default Header;








//const Header = (props) => {
//    return (<>
//        <div className={ s.cloc1 }>
//        </div>
//        <header className={ s.header }>
//            <span>
//                <img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png' />
//            </span>
//            <div className={ s.loginBlock }>
//                { props.isAuth
//                    ? <div>{ props.login }<button onClick={ props.logout }>log out</button></div>
//                    : <NavLink to={ '/login' }>login</NavLink> }
//            </div>
//        </header>
//    </>)
//}