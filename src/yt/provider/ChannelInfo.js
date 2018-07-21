import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import deferred from 'rawblock/utils/deferred';
import {loadChannelInfo} from '../ducks/channel-info';

import { api } from '../modules/yt-data';

const mapState = ({channelInfo}) => ({
    channelInfo,
});

const mapDispatch = (dispatch) => (
    bindActionCreators({loadChannelInfo}, dispatch)
);

export default connect(mapState, mapDispatch)(class ChannelInfoProvider extends React.PureComponent {

    static propTypes = {
        channelId: PropTypes.string,
        forUsername: PropTypes.string,
        visual: PropTypes.func.isRequired,
        channelInfo: PropTypes.object.isRequired,
        loadChannelInfo: PropTypes.func.isRequired,
    };

    componentDidMount(){
        const { channelId, forUsername, loadChannelInfo } = this.props;

        loadChannelInfo({channelId, forUsername});
    }

    render(){
        const { visual: Visual } = this.props;

        return (
            <Visual
                {...this.props}
                {...this.props.channelInfo}
            />
        );
    }
});
