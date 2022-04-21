import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import LoggedOutView from '../LoggedOutView/LoggedOutView';
import LoggedInView from '../LoggedInView/LoggedInView';

import styles from './Header.module.css';

function ComponentLogged({ currentUser }) {
  if (currentUser) {
    return <LoggedInView currentUser={currentUser} />;
  }
  return <LoggedOutView currentUser={currentUser} />;
}

const Header = ({ appName, currentUser }) => {
  return (
    <header>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className={styles.headerLogo}>
            <Link to="/" className="text-shadow">
              {appName}
            </Link>
          </div>
          <nav className="navbar navbar-light">
            <ComponentLogged currentUser={currentUser} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
