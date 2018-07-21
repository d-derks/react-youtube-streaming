import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';
import PropTypes from 'prop-types';
import Mediabox from '../Mediabox';
import truncate from '../../modules/truncate';

export default function Item(props) {

    const { snippet, playlistId } = props;

    return(
        <article className="b-item">
            <Link
                to={`/playlist/${playlistId}/${snippet.resourceId.videoId}`}
                className="item-inner"
            >
                <div className="item-media">
                    <Mediabox
                        thumbnails={snippet.thumbnails}
                    />
                </div>
                <div className="item-textbox">
                    <h2 className="item-header">{snippet.title}</h2>
                    <p className="item-copytext">{truncate(snippet.description, 100)}</p>
                </div>
            </Link>
        </article>
    );
}

Item.propTypes = {
    snippet: PropTypes.object,
    playlistId: PropTypes.string,
};


