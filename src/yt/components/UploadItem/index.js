import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './uploaditem.css';
import truncate from '../../modules/truncate';


export default function UploadItem(props) {

    const { thumbnails: img, channelId, resourceId, title, description } = props;

    return(
        <article className="b-uploaditem">
            <Link to={`/playlist/${channelId}/${resourceId.videoId}`} className="uploaditem-inner" >
                <div className="uploaditem-media">
                    <div className="uploaditem-media-inner">
                        <img className="uploaditem-img"
                             src={img.high.url}
                             alt={img.alt || ''}
                        />
                    </div>
                </div>
                <div className="uploaditem-textbox">
                    <h2 className="uploaditem-header">{title}</h2>
                    <p className="uploaditem-copytext">{truncate(description, 100)}</p>
                </div>

            </Link>
        </article>
    );
}

UploadItem.propTypes = {
    description: PropTypes.string.isRequired,
    thumbnails: PropTypes.object.isRequired,
    channelId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    resourceId: PropTypes.object,
};
