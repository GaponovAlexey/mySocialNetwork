import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png' />
        <div className={s.loginBlock}>
            { props.isAuth ? props.login 
            : <NavLink to={'/login'}>login</NavLink>}
        </div>
    </header>
}

export default Header;