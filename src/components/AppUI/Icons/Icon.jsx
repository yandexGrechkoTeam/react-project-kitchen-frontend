import React from 'react';
import icons from './Icons.svg';
import styles from './icons.module.css';
export default function Icon({ name, size }) {
  return (
    <span className={styles['icon-wrapper']}>
      <svg width={size} height={size}>
        <use xlinkHref={`${icons}#${name}`} />
      </svg>
    </span>
  );
}
