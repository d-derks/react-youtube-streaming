import React from 'react';
import PropTypes from 'prop-types';
import MainNav from '../components/MainNav';
import Branding from '../components/Branding';
import ChannelInfoProvider from '../provider/ChannelInfo';
import PageInfo from '../components/PageInfo';
import Sidenav from '../components/Sidenav';
import Togglebtn from '../components/Togglebtn';
import NavOverlay from '../components/NavOverlay';
import { ProviderCase } from '../components/ProviderCase';
import { Context } from '../components/ProviderCase';


export default class DefaultTemplate extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            viewportSmall: window.innerWidth <= 768,
        };

        this.currentWidth = this.currentWidth.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.currentWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.currentWidth);
    }

    currentWidth() {
        this.setState(
            {
                viewportSmall: window.innerWidth <= 768,
            }
        );
    }

    render() {
        const { categories, children } = this.props;
        const { viewportSmall } = this.state;

        return (
            <ProviderCase>
                <div className="l-page">
                    {
                        viewportSmall ?
                            <NavOverlay
                                categories={categories}
                            />
                            :
                            null
                    }
                    {
                        viewportSmall ?
                            <Togglebtn />
                            :
                            null
                    }
                    <div className="page-wrapper">
                        <header className="page-header">
                            <div className="page-header-inner">
                                <div className="page-header-section is-flex">
                                    <ChannelInfoProvider
                                        {...this.props}
                                        isloading={true}
                                        visual={Branding}
                                    />
                                    <Sidenav />
                                </div>
                                <Context.Consumer>
                                    { (context) => (
                                        !context.state.isToggleOpen && (!viewportSmall && categories) ?
                                            (
                                                <div className="page-header-section is-nav">
                                                    <MainNav categories={categories} />
                                                </div>
                                            ) :
                                            null
                                        )}
                                </Context.Consumer>

                            </div>
                        </header>
                        <main className="page-main">
                            <div className="page-main-inner">
                                {children}
                            </div>
                        </main>
                        <footer className="page-footer">
                            <div className="page-footer-inner">
                                <PageInfo {...this.props}/>
                            </div>
                        </footer>
                    </div>
                </div>
            </ProviderCase>
        );
    }
}


DefaultTemplate.propTypes = {
    categories: PropTypes.array,
    children: PropTypes.any,
};
