import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icons/Icon';
import styles from './index.module.scss';
function NavItem({ name, icon, active, to = '#', size }) {
  return (
    <li className={styles.nav__item}>
      <Icon name={icon} size={size} />
      <Link to={to}>{name}</Link>
    </li>
  );
}

export default NavItem;
