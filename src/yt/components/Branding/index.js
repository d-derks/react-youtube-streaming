import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './branding.css';

export default function Branding() {

    return(
        <div className="b-branding">
            <Link className="branding-inner"
                  to=''
            >
                <svg className="branding-logo" viewBox="0 0 80 80">
                    <circle fill="#ef494f" cx="40" cy="40" r="40"/>
                    <circle fill="none" stroke="#F3F3F3" stroke-miterlimit="10" cx="39.828" cy="39.829" r="37.319"/>
                    <g fill="#F3F3F3">
                        <path d="M63.256 58.882a.73.73 0 0 1-.951.407l-44.84-17.961a.731.731 0 1 1 .545-1.358l44.84 17.96a.733.733 0 0 1 .406.952z"/>
                        <path d="M63.317 40.448a.736.736 0 0 0-.957-.41L17.234 58.114a.737.737 0 0 0 .548 1.367l45.125-18.075a.737.737 0 0 0 .41-.958z"/>
                    </g>
                    <path fill="#F3F3F3" d="M63.078 33.791a.679.679 0 0 1-.679.679H17.573a.679.679 0 0 1 0-1.358h44.826c.375 0 .679.304.679.679zM40.29 27.98c4.264.014 7.869-3.537 7.919-7.799.049-4.215-3.574-7.895-7.803-7.923-4.303-.029-7.965 3.582-7.969 7.86-.005 4.241 3.598 7.848 7.853 7.862zm.055-14.498c3.722-.01 6.672 2.952 6.636 6.663-.037 3.776-2.895 6.603-6.681 6.608-3.705.006-6.594-2.845-6.638-6.55-.044-3.773 2.876-6.71 6.683-6.721z"/>
                </svg>
            </Link>
        </div>
    );
}

Branding.propTypes = {
    snippet: PropTypes.object,
    isloading: PropTypes.bool,
};
