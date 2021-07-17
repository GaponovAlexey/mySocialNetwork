import React from 'react';
import { NavLink } from 'react-router-dom';
import Clock from '../utils/Validators/Clock';
import s from './Navbar.module.css';
import NavbarStatus from './NavbarStatus';




const Navbar = (props) => {

  return (
    <nav className={ s.nav }>
      <div className={ s.item }>
        <NavLink to="/profile" activeClassName={ s.activelink }>Profile </NavLink>
      </div>
      <div className={ `${s.item} ${s.active}` }>
        <NavLink to="/dialogs" activeClassName={ s.activelink }>Messages </NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='users' activeClassName={ s.activelink } >Users</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='News' activeClassName={ s.activelink }>News</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='KN' activeClassName={ s.activelink }>Игра - крест\нолик</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='test' activeClassName={ s.activelink } >test</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='one' activeClassName={ s.activelink } >one</NavLink>
      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className={ s.loginBlock }>
        { props.isAuth ? props.login
          : <NavLink to={ '/login' }>login</NavLink> }
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <NavbarStatus
          profile={ props.profile }
          status={ props.status }
          updateStatus={ props.updateStatus }
        />
      </div>
    </nav>
  )
}
export default Navbar;