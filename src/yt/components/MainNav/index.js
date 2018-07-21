import React from 'react';
import PropTypes from 'prop-types';
import './mainnav.css';
import { Link } from 'react-router-dom';

export default function MainNav(props){
    const { categories } = props;
    return (
        <nav className="mainnav">
            <ul className="mainnav-list">{

                categories.map((item, index) => {

                        return (
                            <MainNavItem
                                key={index}
                                {...item}
                            />
                        );
                    }
                )
            }
            </ul>
        </nav>
    );
}

MainNav.propTypes= {
    categories: PropTypes.array.isRequired,
};

function MainNavItem(props){
    const { label, playlist } = props;

    return (
        <li className="mainnav-item">
            <Link
                className="mainnav-item-inner"
                to={`/playlist/${playlist}`}
            >
                {label}
            </Link>
        </li>
    );
}

MainNavItem.propTypes = {
    label: PropTypes.string.isRequired,
    playlist: PropTypes.string.isRequired,
};


