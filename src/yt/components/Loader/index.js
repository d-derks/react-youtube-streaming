import React from 'react';
import './loader.css';

export default function DefaultLoader() {
    return (
        <div className="b-loader">
            <div className="loader-inner">
                <svg className="loader-svg" viewBox="25 25 50 50">
                    <circle className="loader-svg-inner" cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10"/>
                </svg>
            </div>
        </div>
    );
}
