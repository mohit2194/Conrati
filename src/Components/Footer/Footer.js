import React from 'react';
import styles from './Footer.module.css';
import Lists from '../../config/footerLinks';

const { mainFooter,
        footerLinks,
} = styles;


const footer = () => {
    return (
        <footer className={mainFooter}>
            <ul className={footerLinks}>
                <h3>{Lists.listOne.Header}</h3>
                {Lists.listOne.lists.map(list => 
                <li>{list}</li>
            )}
            </ul>
            <ul className={footerLinks}>
            <h3>{Lists.listTwo.Header}</h3>
                {Lists.listTwo.lists.map(list => 
                <li>{list}</li>
            )}
            </ul>
            <ul className={footerLinks}>
            <h3>{Lists.listThree.Header}</h3>
                {Lists.listThree.lists.map(list =>
                     <li>{list}</li>
            )}
            </ul>
        </footer>
    );
}

export default footer;