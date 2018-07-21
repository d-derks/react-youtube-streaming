import React from 'react';
import './sidenav.css';

export default function Sidenav() {

    return(
        <div className="b-sidenav">
            <ul className="sidenav-list">
                <li className="sidenav-item">
                    <a
                        className="sidenav-item-inner"
                        href='https://www.youtube.com/user/yogawithadriene/featured'
                    >
                        <p>Watch more on Youtube</p>
                    </a>
                </li>
            </ul>
        </div>
    );
}
