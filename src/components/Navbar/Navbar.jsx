import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Test from './Test/test';

const Tess1 = (props) => {
    return (
        <div>
            {props.name}
        </div>
    )
}
const Navbar = (props) => {
    
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <h1><NavLink to='friend' activeClassName={s.activelink}></NavLink>{props.name}</h1>
            </div>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activelink}>Profile </NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activelink}>Messages </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='News' activeClassName={s.activelink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='Music' activeClassName={s.activelink}>Music</NavLink>
            </div>
                <div className={s.item}>
                <NavLink to='Settings' activeClassName={s.activelink}>Settings</NavLink>
            </div>
                <div className={s.item}>
                <NavLink to='test' activeClassName={s.activelink} >test</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;