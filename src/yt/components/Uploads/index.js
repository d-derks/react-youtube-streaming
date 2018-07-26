import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './uploads.css';
import UploadItem from '../UploadItem';
import ItemPlaceholder from '../ItemPlaceholder';

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
                    <ItemPlaceholder />
                    <ItemPlaceholder />
                    <ItemPlaceholder />
                    <ItemPlaceholder />
                </Fragment>
            )

    );
}

Uploads.propTypes = {
    playlist: PropTypes.object.isRequired,
    totalItems: PropTypes.number.isRequired,
};
