import React from 'react';
import styles from './navbar.module.scss';
const Navbar = () => {
    return(
        <nav className={styles['navbar']}>
        <div>
          <a  href='#'>profile</a>
        </div>
        <div>
        <a  href='#'>message</a>
        </div>
        <div>
        <a href='#'>news</a>
        </div>
        <div>
        <a href='#'>music</a>
        </div>
        <div>
        <a href='#'>settings</a>
        </div>
      </nav>
    )
}

export default Navbar;
