import React from 'react';
import PropTypes from 'prop-types';
import DefaultTemplate from '../Template/DefaultTemplate';

import PlayListProvider from '../provider/PlaylistProvider';
import PlayList from '../components/PlayList';
import Mediabox from '../components/Mediabox';
import Subheader from '../components/Subheader';

export default function PlayerPage(props){
    const { playlistId, videoId } = props;

    return (
        <DefaultTemplate {...props}>
            <div className="page-section is-bg-euphoric">
                <div className="page-section-inner is-width-medium">
                    <Subheader/>
                    <div className="columngroup is is-gutter-outer">
                        <div className="column-12 is-gutter">
                            <Mediabox
                                type="iframe"
                                videoId={videoId}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section is-bg-euphoric">
                <div className="page-section-inner is-padded-bottom">
                    <div className="columngroup">
                        <PlayListProvider
                            playlistId={playlistId}
                            visual={PlayList}
                            totalItems={8}
                            isloaded={true}
                        />
                    </div>
                </div>
            </div>
        </DefaultTemplate>
    );
}

PlayerPage.propTypes = {
    playlistId: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
};
