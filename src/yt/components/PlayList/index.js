import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import ItemPlaceholder from '../ItemPlaceholder';

export default function PlayList(props) {

    const { playlist, totalItems = 8, contentPlaceholder } = props;

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
            contentPlaceholder ?
                (
                    <Fragment>
                        <ItemPlaceholder />
                        <ItemPlaceholder />
                        <ItemPlaceholder />
                        <ItemPlaceholder />
                    </Fragment>
                ) :
                null
    );
}


PlayList.propTypes = {
    playlist: PropTypes.object,
    totalItems: PropTypes.number,
};

