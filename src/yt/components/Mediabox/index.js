import React from 'react';
import './mediabox.css';
import PropTypes from 'prop-types';

export default function Mediabox(props) {
    const { videoId, source, type, poster, thumbnails: img } = props;

    let innerComponent;

    switch (type) {
        case 'iframe':
            innerComponent = (
                <iframe
                    className="mediabox-media"
                    type="text/html"
                    width="1000"
                    height="563"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameBorder="0"
                    allowFullScreen="allowFullScreen"
                />
            );
            break;
        case 'video':
            innerComponent = (
                <video
                    src={source}
                    poster={poster}
                    className="mediabox-media"
                >
                </video>
            );
            break;
        default:
            innerComponent = (
                <img
                    src={img.high.url}
                    alt={img.alt || ''}
                    className="mediabox-img"
                />
            );
            break;
    }

    return(
        <div className="b-mediabox">
            <div className="mediabox-inner">
                {
                    innerComponent
                }
            </div>
        </div>
    );
}

Mediabox.propTypes = {
    thumbnails: PropTypes.object.isRequired,
    source: PropTypes.object,
    type: PropTypes.string,
    poster: PropTypes.string,
    videoId: PropTypes.string,
};
