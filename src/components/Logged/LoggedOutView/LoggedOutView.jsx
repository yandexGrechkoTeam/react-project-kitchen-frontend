import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Logged.module.scss';
import NavItem from '../../AppUI/NavItem/NavItem';

const menuList = [
  {
    icon: 'home',
    name: 'Главная',
    to: '/',
    active: false,
  },
  {
    icon: 'home',
    name: 'Войти',
    to: '/login',
    active: false,
  },
];

function LoggedOutView({ currentUser }) {
  return (
    <ul className={styles.navbar_list}>
      <NavItem icon="home" name="Главная" size="24" />
      <NavItem icon="login" name="Войти" size="24" />
    </ul>
  );
}

export default LoggedOutView;
