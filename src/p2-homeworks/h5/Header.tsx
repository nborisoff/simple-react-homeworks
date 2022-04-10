import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routing'
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.menu}>
            <NavLink to={PATH.PRE_JUNIOR} className={(navData) => navData.isActive ? `${styles.active} ${styles.link}`: styles.link}>Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={(navData) => navData.isActive ? `${styles.active} ${styles.link}` : styles.link}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={(navData) => navData.isActive ? `${styles.active} ${styles.link}` : styles.link}>Junior Plus </NavLink>
            <div className={styles.nav}>Menu</div>
        </div>
    )
}

export default Header
