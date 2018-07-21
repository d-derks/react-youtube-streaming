import createAsyncActionType from '../modules/create-async-action-type';
import { api } from '../modules/yt-data';

const promises = {};
const LOAD_CHANNEL_INFO = createAsyncActionType('yt/channelinfo/LOAD');

export const loadChannelInfo = ({channelId: id, forUsername, part = 'snippet,contentDetails,statistics'}) => ((dispatch) => {
    if(!id && !forUsername){
        throw('you should add either channelId or forUsername');
    }

    const options = {
        id,
        forUsername,
        part,
    };

    const key = JSON.stringify(options);


    if(!promises[key]){
        dispatch({
            type: LOAD_CHANNEL_INFO.PENDING,
        });

        promises[key] = api(
            'GET',
            '/youtube/v3/channels',
            options,
        )
            .then(({items}) => {
                if(!items[0]){
                    throw 'Now items key on channelInfo';
                }

                dispatch({
                    type: LOAD_CHANNEL_INFO.SUCCESS,
                    payload: items[0],
                });
            })
            .catch(payload => {
                dispatch({
                    type: LOAD_CHANNEL_INFO.ERROR,
                    payload,
                });
            })
        ;
    }

    return promises[key];
});

export default function reducer(state = {state: -2}, {type, payload}) {
    switch (type) {
        case LOAD_CHANNEL_INFO.PENDING:
            state = {
                ...state,
                state: 0,
            };
            break;
        case LOAD_CHANNEL_INFO.SUCCESS:
            state = {
                ...state,
                ...payload,
                state: 1,
            };
            break;
        case LOAD_CHANNEL_INFO.ERROR:
            state = {
                ...state,
                ...payload,
                state: -1,
            };
            break;
    }

    return state;
}
