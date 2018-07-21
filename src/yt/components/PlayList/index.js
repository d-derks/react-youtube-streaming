import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

export default function PlayList(props) {

    const { playlist, totalItems = 8 } = props;

    return(
        playlist && playlist.items ?
            playlist.items.slice(0, totalItems).map( (item, index) =>
                (
                    <div
                        className="column-3 is-gutter"
                        key={index}
                    >
                        <Item
                            {...item}
                            playlistId={playlist.playlistId}
                        />
                    </div>
                )
            ) :
            (
               null
            )
    );
}


PlayList.propTypes = {
    playlist: PropTypes.object,
    totalItems: PropTypes.number,
};

