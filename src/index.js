import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import Yt from './yt';

import registerServiceWorker from './registerServiceWorker';

const siteConfig = {
    apiKey: 'AIzaSyAfXsr0dXymQau2roaJOs_CtgwGf_IT_aM',
    forUsername: 'yogawithadriene',
    categories: [
        {
            label: 'Intermediate yoga',
            playlist: 'PLui6Eyny-Uzw8CEkrdtRgxXAx8hPtQFpc',
        },
        {
            label: 'True 30 day challange',
            playlist: 'PLui6Eyny-UzwIo3OBXV_KlsWaxUANvWhh',
        },
        {
            label: 'Yoga for weightloss',
            playlist: 'PLui6Eyny-Uzx2jQYA8MS73ND2kUMHyII8',
        },
        {
            label: 'Yoga on the road',
            playlist: 'PLui6Eyny-Uzzb7UrYJDW2TFCDlS2IUN34',
        },
        {
            label: 'Yoga for self love',
            playlist: 'PLui6Eyny-UzxnCWxVUD2JBFASKfVhBi7c',
        },
    ],
};

ReactDOM.render((
    <Provider store={store}>
        <Yt
            {...siteConfig}
        />
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
