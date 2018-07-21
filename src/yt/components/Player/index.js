import React from 'react';
import PropTypes from 'prop-types';
import './player.css';

export default function Player({ videoId }) {

    return (

            <iframe
                    className="player-inner"
                    type="text/html"
                    width="1000"
                    height="563"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameBorder="0"
                    allowFullScreen="allowFullScreen"
            />

    );
}

Player.propTypes = {
    videoId: PropTypes.string,
};
