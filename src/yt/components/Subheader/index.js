import React from 'react';
import './subheader.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Subheader(props) {
    const { isClasses } = props;
    const titleClass =  classNames('subheader-title', isClasses);
    const leadingClass = classNames('subheader-leadin', isClasses);


    return(
        <div className="b-subheader">
            <h2 className={ titleClass }>Watch now the latest yoga videos</h2>
            <p className={ leadingClass }>The newest videos straight from the Yoga with Adriene channel on Youtube</p>
        </div>
    );
}

Subheader.propTypes = {
    isClasses: PropTypes.string,
};
