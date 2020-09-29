import React from 'react';
import Divider from '@material-ui/core/Divider';

const textStyle = {
    textAlign: 'center'
}



function Menu () {
    return (
    <div className="body-menu">
        <div style={textStyle} className='divider'>
            <div className='divider-mask'>
                <span>
                    <i><h1>MENU</h1></i>
                </span>
            </div>
        </div>
        {/* <Divider variant="middle" /> */}
        <div>
            <h1>$5</h1>
            <ul className="menu-list">
            <li>BOJO BURGER</li>
            <li>TILAPIA SANDWHICH</li>
            <li>SAUSAGE SANDWHICH</li>
            <li>CHICKEN SANDWHICH</li>
            </ul>
        </div>
        <Divider variant="middle" />
        <div>
            <h1>$7</h1>
            <ul className="menu-list">
            <li>FISH WHOPPER</li>
            <li>PORK CHOP SANDWHICH</li>
            <li>CHICKEN WINGS</li>
            <li>HOT WINGS</li>
            </ul>
        </div>
        <Divider variant="middle" />
        <div>
            <h1>$11</h1>
            <ul className="menu-list">
            <li>SNAPPER FILET SANDWHICH</li>
            <li>CATFISH FILET SANDWHICH</li>
            <li>BIG B BURGER</li>
            <li>FISH OF THE DAY</li>
            </ul>
        </div>
        <Divider variant="middle" />
        <div>
            <h1>Kids Meals</h1>
            <ul className="menu-list">
            <li>JR. FOOTLONG</li>
            <li>JR BOJO BURGER</li>
            <li>GRILLED CHEESE</li>
            <li>CHICKEN STRIPS</li>
            </ul>
        </div>
    </div>
    );
}


export default Menu;