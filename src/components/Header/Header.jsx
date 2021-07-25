import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (<>
        <div className={ s.cloc1 }>
        </div>
        <header className={ s.header }>
            <span>
                <img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png' />
            </span>
            <div className={ s.loginBlock }>
                { props.isAuth
                    ? <div>{ props.login }<button onClick={ props.logout }>log out</button></div>
                    : <NavLink to={ '/login' }>login</NavLink> }
            </div>
        </header>
    </>)
}

export default Header;