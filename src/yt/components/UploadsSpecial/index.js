import React from 'react';
import PropTypes from 'prop-types';
import './uploadsspecial.css';
import UploadItem from '../UploadItem';
import UploadItemSpecial from '../UploadItemSpecial';

export default function UploadsSpecial(props) {

    const { playlist } = props;

    return(
        <div className="columngroup is-gutter-outer">
            <div className="column-3 is-gutter">
                {
                    playlist.items ?
                        playlist.items.slice(7, 9).map( (item, index) =>
                            (
                                <UploadItemSpecial
                                    {...item.snippet}
                                    key={index}
                                />
                            )
                        )
                        :
                        (
                            <h1>No content</h1>
                        )
                }
            </div>
            <div className="column-3 is-gutter">
        {
            playlist.items ?
            playlist.items.slice(9,10).map( (item, index) =>
                (
                    <UploadItem
                        {...item.snippet}
                        key={index}
                    />
                )
            )
            :
            (
                <h1>No content</h1>
            )
    }
            </div>
            <div className="column-3 is-gutter">
                {
                    playlist.items ?
                        playlist.items.slice(10, 12).map( (item, index) =>
                            (
                                <UploadItemSpecial
                                    {...item.snippet}
                                    key={index}
                                />
                            )
                        )
                        :
                        (
                            <h1>No content</h1>
                        )
                }
            </div>
            <div className="column-3 is-gutter">
                {
                    playlist.items ?
                        playlist.items.slice(12,13).map( (item, index) =>
                            (
                                <UploadItem
                                    {...item.snippet}
                                    key={index}
                                />
                            )
                        )
                        :
                        (
                            <h1>No content</h1>
                        )
                }
            </div>
        </div>
    );

}

UploadsSpecial.propTypes = {
    playlist: PropTypes.object.isRequired,
    totalItems: PropTypes.number,
};
