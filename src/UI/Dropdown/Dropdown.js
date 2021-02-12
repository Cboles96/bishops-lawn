import React from 'react';

import dropdownArrow from '../../assets/images/icons/dropdown-arrow.jpeg';
import classes from '../Dropdown/Dropdown.module.css';

const dropdown = (props) => (
    <div className={classes.Dropdown}>
        <img src={dropdownArrow} alt="dropdown-arrow"></img>
    </div>
);

export default dropdown;