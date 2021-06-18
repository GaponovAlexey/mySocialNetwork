import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
    
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile/" activeClassName={s.activelink}>Profile </NavLink>
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
                <div className={s.item}>
                <NavLink to='users' activeClassName={s.activelink} >Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;