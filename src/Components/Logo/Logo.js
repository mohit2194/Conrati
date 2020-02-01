import React from 'react';
import styles from './Logo.module.css';
import Logo from '../../assets/logo.png';

const { logoArea, logoIcon } = styles;

const logo = () => {
return (
    <div className={logoArea}>
        <img className={logoIcon} src={Logo} alt="" />
    </div>
);
}

export default logo;