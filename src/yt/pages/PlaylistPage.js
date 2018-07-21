import React from 'react';
import PropTypes from 'prop-types';
import DefaultTemplate from '../Template/DefaultTemplate';

import PlayListProvider from '../provider/PlaylistProvider';
import PlayList from '../components/PlayList';
import Subheader from '../components/Subheader';

export default function PlaylistPage(props){
    const { playlistId } = props;

    return (
        <DefaultTemplate {...props}>
            <div className="page-section is-bg-euphoric">
                <div className="page-section-inner is-padded">
                    <Subheader/>
                    <div className="columngroup is-gutter-outer">
                        <PlayListProvider
                            playlistId={playlistId}
                            visual={PlayList}
                            totalItems={8}
                        />
                    </div>
                </div>
            </div>
        </DefaultTemplate>
    );
}

PlaylistPage.propTypes = {
    playlistId: PropTypes.string.isRequired,
};
