import React from 'react';
import Button from './Button';


const Header = ({ showForm, changeTextAndColor }) => {
    return (
        <div className="buildings">
        <header className="header">
            <h2 className="app-header">Building Management</h2>
            <Button onClick={showForm} color={changeTextAndColor ? 'red' : 'green'} text={changeTextAndColor ? 'Close' : 'Add'} />
        </header>
        </div>
    )
}

export default Header;
