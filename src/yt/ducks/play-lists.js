import createAsyncActionType from '../modules/create-async-action-type';
import { api } from '../modules/yt-data';

const LOAD_PLAYLIST = createAsyncActionType('yt/playlist/LOAD');
const playlistPromises = {};

export const loadPlaylist = (playlistId) => ((dispatch) => {
    if(!playlistId){
        throw 'No playlistId parameter for loadPlaylist';
    }

    if(!playlistPromises[playlistId]){
        playlistPromises[playlistId] = api('GET',
            '/youtube/v3/playlistItems',
            {
                maxResults: 25,
                part: 'snippet,contentDetails',
                playlistId,
            });

        dispatch({
            type: LOAD_PLAYLIST.PENDING,
            payload: {
                playlistId,
            },
        });

        playlistPromises[playlistId].then(data => {
            dispatch({
                type: LOAD_PLAYLIST.SUCCESS,
                payload: {
                    playlistId,
                    data,
                },
            });
        });
    }

    return playlistPromises[playlistId];
});

export default function reducer(state = {}, {type, payload}) {
    switch (type) {
        case LOAD_PLAYLIST.PENDING:
            state = {
                ...state,
                [payload.playlistId]: {
                    state: 0,
                    playlistId: payload.playlistId,
                },
            };
            break;
        case LOAD_PLAYLIST.SUCCESS:
            state = {
                ...state,
                [payload.playlistId]: {
                    ...payload.data,
                    state: 1,
                    playlistId: payload.playlistId,
                },
            };
            break;
    }

    return state;
}
