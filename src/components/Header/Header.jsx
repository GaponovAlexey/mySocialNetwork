import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png' />
    </header>
}

export default Header;