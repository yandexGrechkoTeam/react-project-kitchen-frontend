import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import LoggedOutView from '../Logged/LoggedOutView/LoggedOutView';
import LoggedInView from '../Logged/LoggedInView/LoggedInView';
import styles from './Header.module.scss';

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
          <div className="headerLogo">
            <Link
              to="/"
              className={classNames(
                styles.logo,
                'text_type_headline text_shadow'
              )}
            >
              {appName}
            </Link>
          </div>
          <nav className={styles.navbar}>
            <ComponentLogged currentUser={currentUser} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
