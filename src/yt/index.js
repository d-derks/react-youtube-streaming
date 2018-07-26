import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { saveMetadata } from './ducks/metadata';
import loadYt from './modules/yt-data';

import PlaylistPage from './pages/PlaylistPage';
import HomePage from './pages/HomePage';
import PlayerPage from './pages/PlayerPage';

import './scss/normalize.css';
import './scss/basics.css';
import './components/Page/page.css';
import './components/Column/column.css';




const mapDispatch = (dispatch) => (
    bindActionCreators({ saveMetadata }, dispatch)
);

const ScrollTop = withRouter(class ScrollTop extends React.Component {

    static propTypes = {
        location: PropTypes.string,
        children: PropTypes.any,
    };

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render(){
        return this.props.children;
    }
});

export default connect(null, mapDispatch)(class YTNavigator extends React.Component {

    static propTypes = {
        apiKey: PropTypes.string.isRequired,
        channelId: PropTypes.string,
        forUsername: PropTypes.string,
        categories: PropTypes.array,
        saveMetadata: PropTypes.func,
    };

    constructor(){
        super(...arguments);

        this.state = {
            state: 0,
        };
    }

    componentDidMount(){
        const { apiKey, channelId, forUsername, saveMetadata } = this.props;

        saveMetadata({ apiKey, channelId, forUsername });

        loadYt(apiKey).then(() => {
            this.setState({ state: 1 });
        });
    }

    render(){
        /* eslint-disable react/jsx-no-bind */
        return (
            <BrowserRouter
                basename={process.env.PUBLIC_URL}
            >
                <ScrollTop {...this.props}>

                        <Route
                            exact
                            path="/playlist/:playlistId"
                            render={ ({ match }) => (
                                <PlaylistPage
                                    {...this.props}
                                    playlistId={match.params.playlistId}
                                />
                            )}
                        />

                        <Route
                            exact
                            path="/playlist/:playlistId/:videoId"
                            render={ ({ match }) => {

                                return (
                                    <PlayerPage
                                        {...this.props}
                                        playlistId={match.params.playlistId}
                                        videoId={match.params.videoId}
                                    />
                                );
                            }}
                        />

                        <Route
                            exact
                            path="/"
                            render={() => (
                                <HomePage
                                    {...this.props}
                                />
                            )}
                        />

                </ScrollTop>
            </BrowserRouter>
        );
    }
});
