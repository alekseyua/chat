import React from 'react';
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles['header']}>
                <img className={styles['header-logo']} 
                    src='https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/HTML/Element/img/favicon144.png' alt='icon profile'
                />
        </header>
    )
}

export default Header;