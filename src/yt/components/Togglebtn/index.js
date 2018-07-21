import React from 'react';
import './togglebtn.css';
import { Context } from '../ProviderCase';

export default function Togglebtn() {

    return(
            <div className="b-togglebtn">
                <Context.Consumer>
                    { (context) => (
                        <button
                            onClick={ context.handleClick }
                            className="togglebtn-btn"
                            type="button"
                            aria-expanded={ context.state.isToggleOpen }
                        >
                            <span className="togglebtn-inner">
                                toggle button
                            </span>
                        </button>
                    )
                }
                </Context.Consumer>
            </div>

    );
}
