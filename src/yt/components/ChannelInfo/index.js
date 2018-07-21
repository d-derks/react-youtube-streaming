import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Intro from '../Intro';
import UploadsSection from '../UploadsSection';
import UploadsSectionSpecial from '../UploadsSectionSpecial';

export default function ChannelInfo(props) {

    if(props.state < 1){

        return (
            <Fragment>
                <div className="page-section is-bg-enchanted">
                    <div className="page-section-inner is-special">
                        <Intro
                            isloading={true}
                        />
                    </div>
                </div>
                <UploadsSection/>
            </Fragment>

        );
    } else {

        return (
            <Fragment>
                <div className="page-section is-bg-enchanted">
                    <div className="page-section-inner is-special">
                        <Intro
                            {...props.snippet}
                        />
                    </div>
                </div>
                <UploadsSection
                    {...props}
                />
                <UploadsSectionSpecial
                    {...props}
                />
            </Fragment>
        );
    }
}

ChannelInfo.propTypes = {
    state: PropTypes.number.isRequired,
};


