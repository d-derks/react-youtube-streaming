import React from 'react';
import PropTypes from 'prop-types';
import './intro.css';

export default function Intro(props) {

    const { title, thumbnails, isloading, description } = props;

    return (
        <article className="b-intro">
            <div className="intro-inner">
                <div className="intro-media">
                    <div className="intro-media-inner">
                        {
                            isloading ? (
                                    null
                            ) :
                                (
                                    <img
                                        className="intro-media-img"
                                        src={thumbnails.high.url}
                                        alt={thumbnails.alt || ''}
                                    />
                                )

                        }

                    </div>
                </div>

                        {
                            isloading ? (
                                <div className="intro-textbox">
                                    <div className="intro-textbox-placeholder">
                                        <svg className="intro-textbox-placeholder-svg" viewBox="0 0 565 564">
                                            <path d="M4 124h557v25H4zM3 165h447v25H3z"/>
                                            <circle  cx="37.619" cy="72.601" r="31.498"/>
                                            <path d="M86 68h299v25H86z"/>
                                        </svg>
                                    </div>
                                </div>
                            ) :
                                (
                                <div className="intro-textbox" >
                                    <h1 className="intro-textbox-header">
                                        {title}
                                    </h1>
                                    <p className="intro-textbox-copytext">
                                        {description}
                                    </p>
                                </div>
                                )
                        }


            </div>
        </article>
    );
}

Intro.propTypes= {
    title: PropTypes.string,
    thumbnails: PropTypes.object,
    isloading: PropTypes.bool,
    description: PropTypes.string,
};
