import React from 'react';
import './navoverlay.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from '../ProviderCase';
import classNames from 'classnames';

export default function NavOverlay(props) {

    const { categories } = props;

    return(
        <Context.Consumer>
            { (context) => {
                const navoverlayClass =  classNames(
                    'b-navoverlay',
                    {
                        'is-visible': context.state.isToggleOpen,
                    },
                );

                return(
                    <div className={ navoverlayClass }
                    >
                        <div className="navoverlay-inner">
                            <nav className="navoverlay-nav">
                                <ul className="navoverlay-list">
                                    {
                                        categories.map((item, index) => {
                                            return (
                                                <NavOverlayItem
                                                    key={index}
                                                    {...item}
                                                />
                                            );
                                        })
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                    );
            }}
        </Context.Consumer>
    );
}

NavOverlay.propTypes = {
    categories: PropTypes.array,
    isClasses: PropTypes.string,
};



function NavOverlayItem(props){
    const { label, playlist } = props;

    return (
        <li className="navoverlay-item">
            <Link
                className="navoverlay-item-inner"
                to={`/playlist/${playlist}`}
            >
                {label}
            </Link>
        </li>
    );
}

NavOverlayItem.propTypes = {
    label: PropTypes.string.isRequired,
    playlist: PropTypes.string.isRequired,
};



