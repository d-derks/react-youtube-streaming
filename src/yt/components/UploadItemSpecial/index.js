import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './uploaditemspecial.css';
import truncate from '../../modules/truncate';


export default function UploadItem(props) {

    const { channelId, resourceId, title, description } = props;

    return(
        <article className="b-uploaditemspecial">
            <Link to={`/playlist/${channelId}/${resourceId.videoId}`} className="uploaditemspecial-inner" >
                <div className="uploaditemspecial-section">
                    <div className="uploaditemspecial-textbox">
                        <h2 className="uploaditemspecial-header">{title}</h2>
                        <p className="uploaditemspecial-copytext">{truncate(description, 75)}</p>
                    </div>
                </div>
            </Link>
        </article>
    );
}

UploadItem.propTypes = {
    description: PropTypes.string,
    thumbnails: PropTypes.object,
    channelId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    resourceId: PropTypes.object,
};
