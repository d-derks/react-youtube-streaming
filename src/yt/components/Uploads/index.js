import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './uploads.css';
import UploadItem from '../UploadItem';

export default function Uploads(props) {

    const { playlist, totalItems } = props;

    return(
        playlist.items ?
            playlist.items.slice(0, totalItems).map( (item, index) =>
                (
                    <div
                        className="column-3 is-gutter"
                        key={index}
                    >
                        <UploadItem
                            {...item.snippet}
                        />
                    </div>
                )
            ) :
            (
                <Fragment>
                    <UploadPlaceholder />
                    <UploadPlaceholder />
                    <UploadPlaceholder />
                    <UploadPlaceholder />
                </Fragment>
            )

    );
}

export const UploadPlaceholder = () => (
    <div className="column-3 is-gutter">
        <svg className="item-placeholder" viewBox="0 0 317 598">
            <path fill="#FFF" d="M303 570c0 6.627-5.373 12-12 12H32c-6.627 0-12-5.373-12-12V26c0-6.627 5.373-12 12-12h259c6.627 0 12 5.373 12 12v544z"/>
            <path className="item-placeholder-item" fill="#4C5660" d="M47 64h232v171H47zM47 326h192v23H47zM47 291h229v23H47zM48 401h191v12H48zM47 373h229v12H47zM48 429h229v12H48zM48 455h191v12H48zM47 480h229v12H47z"/>
        </svg>
    </div>
);

Uploads.propTypes = {
    playlist: PropTypes.object.isRequired,
    totalItems: PropTypes.number.isRequired,
};
