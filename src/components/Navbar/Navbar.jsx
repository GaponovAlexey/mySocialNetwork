import React from 'react';
import { NavLink } from 'react-router-dom';
import Clock from '../utils/Validators/Clock';
import s from './Navbar.module.css';




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
        <NavLink to='KN' activeClassName={ s.activelink }>Game-k/n</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='test' activeClassName={ s.activelink } >html/css/form/mod</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='Reactjs' activeClassName={ s.activelink } >LearnReactjs</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='LearnJsx' activeClassName={ s.activelink } >LearnJs</NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='one' activeClassName={ s.activelink } >Верстка</NavLink>
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
        <Clock />
      </div>
    </nav>
  )
}
export default Navbar;