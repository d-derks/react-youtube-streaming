import React from 'react';
import Proptypes from 'prop-types';
import PlayListProvider from '../../provider/PlaylistProvider';
import UploadsSpecial from '../UploadsSpecial';
import Subheader from '../Subheader';

export default function UploadsSectionSpecial(props){

    const playlistId = props.contentDetails.relatedPlaylists.uploads;

    return (
        <div className="page-section is-bg-enchanted">
            <div className="page-section-inner">
                <Subheader
                    isClasses='is-bright'
                />
                <PlayListProvider
                    playlistId={playlistId}
                    visual={UploadsSpecial}
                />
            </div>
        </div>
    );
}

UploadsSectionSpecial.propTypes = {
    contentDetails: Proptypes.object.isRequired,
};
