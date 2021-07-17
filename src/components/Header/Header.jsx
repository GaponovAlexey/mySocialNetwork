import React from 'react';
import { NavLink } from 'react-router-dom';
import Clock from '../utils/Validators/Clock';
import s from './Header.module.css';

const Header = (props) => {
    return (<>
        <div className={ s.cloc1 }>
            <Clock />
        </div>
        <header className={ s.header }>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png' />
            <div className={ s.loginBlock }>
                { props.isAuth
                    ? <div>{ props.login }<button onClick={ props.logout }>log out</button></div>
                    : <NavLink to={ '/login' }>login</NavLink> }
            </div>
        </header>
    </>)
}

export default Header;