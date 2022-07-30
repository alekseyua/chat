import React from 'react';
import styles from './navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <div>
        <NavLink className={styles['nav__link']} to='/'>profile </NavLink>
      </div>
      <div>
        <NavLink className={styles['nav__link']} to='/message'>message</NavLink>
      </div>
      <div>
        <NavLink className={styles['nav__link']} to='/news'>news</NavLink>
      </div>
      <div>
        <NavLink className={styles['nav__link']} to='/music'>music</NavLink>
      </div>
      <div>
        <NavLink className={styles['nav__link']} to='/settings'>settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
