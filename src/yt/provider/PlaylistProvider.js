import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadPlaylist } from '../ducks/play-lists';

const mapState = ({playLists}) => ({
    playLists,
});

const mapDispatch = (dispatch) => (
    bindActionCreators({loadPlaylist}, dispatch)
);

export default connect(mapState, mapDispatch)(class PlaylistProvider extends React.PureComponent {

    static propTypes = {
        playLists: PropTypes.object.isRequired,
        visual: PropTypes.any.isRequired,
        playlistId: PropTypes.string.isRequired,
        loadPlaylist: PropTypes.func.isRequired,
    };

    static loadingPlaylist = {state: 0};

    componentWillReceiveProps(nextProps){
        this.loadPlaylist(nextProps);
    }

    componentDidMount(){
        this.loadPlaylist();
    }

    loadPlaylist(props){
        let {loadPlaylist, playlistId} = props || this.props;

        if(!loadPlaylist){
            loadPlaylist = this.props.loadPlaylist;
        }

        if(!playlistId){
            playlistId = this.props.playlistId;
        }

        if(playlistId !== this._loadedPlaylistId){
            this._loadedPlaylistId = playlistId;
            loadPlaylist(playlistId);
        }

    }

    render(){
        const {playLists, playlistId, visual: Visual} = this.props;

        return (
            <Visual
                {...this.props}
                playlist={playLists[playlistId] || PlaylistProvider.loadingPlaylist}
            />
        );
    }
});
