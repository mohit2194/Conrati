import React from 'react';
import styles from './Divider.module.css';


const divider = (props) => {
    return (
        <div className={(props.align === 'vertical')? styles.dividerVertical : styles.dividerHorizontal} />
    )
}

export default divider;