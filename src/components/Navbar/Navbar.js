import React from 'react';
import styles from './navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

  const menuSideBarElement = props.menuSideBar.map(link => {
    return (<div key={link.id} >
      <NavLink className={styles['nav__link']} to={link.path}>{link.nameLink}</NavLink>
    </div>)
  })

  return (
    <nav className={styles['navbar']}>
      {menuSideBarElement}
    </nav>
  )
}

export default Navbar;
