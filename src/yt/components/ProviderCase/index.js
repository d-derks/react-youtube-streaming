import React from 'react';
import PropTypes from 'prop-types';

export const Context = React.createContext();

export class ProviderCase extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            isToggleOpen: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(
            prevState => ({
                isToggleOpen
                :
                !prevState.isToggleOpen
            }
        ));
    }

    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                extraClass: '.is-open',
                handleClick: this.handleClick,
            }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

ProviderCase.propTypes = {
    children: PropTypes.any,
};
