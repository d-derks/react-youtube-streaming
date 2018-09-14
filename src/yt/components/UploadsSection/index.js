import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import PlayListProvider from '../../provider/PlaylistProvider';
import Uploads from '../Uploads';
import Subheader from '../Subheader';
import ItemPlaceholder from '../ItemPlaceholder';

export default function UploadsSection(props){

    const playlistId = props.contentDetails && props.contentDetails.relatedPlaylists.uploads;

    return (
        <div className="page-section is-bg-euphoric">
            <div className="page-section-inner">
                <Subheader />
                <div className="columngroup">
                {
                    playlistId ? (
                        <PlayListProvider
                            playlistId={playlistId}
                            totalItems={7}
                            visual={Uploads}
                        />
                    ) : (
                        <Fragment>
                            <ItemPlaceholder />
                            <ItemPlaceholder />
                            <ItemPlaceholder />
                            <ItemPlaceholder />
                        </Fragment>
                    )
                }
                </div>
            </div>
        </div>
    );
}

UploadsSection.propTypes = {
    contentDetails: Proptypes.object,
};
