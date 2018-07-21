import React from 'react';
import DefaultTemplate from '../Template/DefaultTemplate';

import ChannelInfoProvider from '../provider/ChannelInfo';
import ChannelInfo from '../components/ChannelInfo';

export default function HomePage(props = {}){

    return (
        <DefaultTemplate
            {...props}
        >

            <ChannelInfoProvider
                {...props}
                visual={ChannelInfo}
            />

        </DefaultTemplate>
    );
}
