const SAVE_META = 'yt/metadata/SAVE';

export const saveMetadata = (payload) => ({
    type: SAVE_META,
    payload,
});

export default function reducer(state = {}, {type, payload}) {

    if(type == SAVE_META){
        state = {
            ...state,
            ...payload,
        };
    }
    return state;
}
