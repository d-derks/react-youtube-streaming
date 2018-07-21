import { combineReducers } from 'redux';

import channelInfo from './channel-info';
import playLists from './play-lists';
import metadata from './metadata';

export default combineReducers({
    channelInfo,
    playLists,
    metadata,
});
