import React from 'react';
import styles from './navbar.module.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className={styles['navbar']}>
        <div>
          <Link  to='/'>profile </Link>
        </div>
        <div>
        <Link  to='/message'>message</Link>
        </div>
        <div>
        <a href='/news'>news</a>
        </div>
        <div>
        <a href='/music'>music</a>
        </div>
        <div>
        <a href='/settings'>settings</a>
        </div>
      </nav>
    )
}

export default Navbar;
