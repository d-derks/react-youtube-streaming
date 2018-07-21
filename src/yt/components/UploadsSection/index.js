import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import PlayListProvider from '../../provider/PlaylistProvider';
import Uploads, { UploadPlaceholder } from '../Uploads';
import Subheader from '../Subheader';

export default function UploadsSection(props){

    const playlistId = props.contentDetails && props.contentDetails.relatedPlaylists.uploads;

    return (
        <div className="page-section is-bg-euphoric">
            <div className="page-section-inner is-padded">
                <Subheader />
                <div className="columngroup is-gutter-outer">
                {
                    playlistId ? (
                        <PlayListProvider
                            playlistId={playlistId}
                            totalItems={7}
                            visual={Uploads}
                        />
                    ) : (
                        <Fragment>
                            <UploadPlaceholder />
                            <UploadPlaceholder />
                            <UploadPlaceholder />
                            <UploadPlaceholder />
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
