import { Box, Breadcrumbs, Button } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Clock from '../utils/Validators/Clock';
import SimpleMenu from '../utils/Validators/openMenu';
import s from './Navbar.module.css';




const Navbar = (props) => {

  return (
    <nav className={ s.nav }>
      <div className={ s.item }>
        <NavLink to="/profile" activeClassName={ s.activelink }>
          <Button variant="outlined" color="link" >Profile</Button>
        </NavLink>
      </div>
      <div className={ `${s.item} ${s.active}` }>
        <NavLink to="/dialogs" activeClassName={ s.activelink }>
          <Button variant="outlined" color="link" >Messages</Button>
        </NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='/users' activeClassName={ s.activelink } >
          <Button variant="outlined" color="link" >Users</Button>
        </NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='/News' activeClassName={ s.activelink }>
          <Button variant="outlined" color="link" >News</Button>
        </NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='/KN' activeClassName={ s.activelink }>
          <Button variant="outlined" color="link" >Game</Button>
        </NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='/LearnJsx' activeClassName={ s.activelink } >
          <Button variant="outlined" color="link" >JS-Learned</Button>
        </NavLink>
      </div>
      <div className={ s.item }>
        <NavLink to='/one' activeClassName={ s.activelink } >
          <Button variant="outlined" color="link" >JS-Верстка</Button>
        </NavLink>
      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Breadcrumbs aria-label="breadcrumb">
        <div className={ s.loginBlock }>
          { props.isAuth ? props.login
            : <NavLink to={ '/login' }>login</NavLink> }
        </div>
      </Breadcrumbs>
      <br></br>
      <br></br>
      <br></br>
      <div>
      <SimpleMenu />
      </div>
        <Clock />
    </nav>
  )
}
export default Navbar;