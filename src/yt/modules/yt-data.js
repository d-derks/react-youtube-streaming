import deferred from 'rawblock/utils/deferred';
import loadScript from 'rawblock/utils/loadscript';

let globalApiKey;
let isInit = false;
const ytPromise = deferred();
const cache = {};

export default function initYt(apiKey){

    if(apiKey){
        globalApiKey = apiKey;
    }

    if(!isInit){
        isInit = true;

        loadScript('https://apis.google.com/js/api.js').then(() => {
            window.gapi.load('client', () => {
                window.gapi.client.load('youtube', 'v3', () => {
                    ytPromise.resolve();
                });
            });
        });
    }

    return ytPromise;
}

function createResource(properties) {
    const resource = {};
    const normalizedProps = properties;

    for (let p in properties) {
        const value = properties[p];

        if (p && p.substr(-2, 2) == '[]') {
            var adjustedName = p.replace('[]', '');
            if (value) {
                normalizedProps[adjustedName] = value.split(',');
            }
            delete normalizedProps[p];
        }
    }

    for (let p in normalizedProps) {
        // Leave properties that don't have values out of inserted resource.
        if (normalizedProps.hasOwnProperty(p) && normalizedProps[p]) {
            const propArray = p.split('.');
            let ref = resource;

            for (let pa = 0; pa < propArray.length; pa++) {
                const key = propArray[pa];

                if (pa == propArray.length - 1) {
                    ref[key] = normalizedProps[p];
                } else {
                    ref = ref[key] = ref[key] || {};
                }
            }
        }
    }

    return resource;
}

function removeEmptyParams(params) {
    for (let p in params) {
        if (params[p] == null || params[p] == 'undefined') {
            delete params[p];
        }
    }

    return params;
}

export function api(requestMethod, path, params, properties) {
    params = removeEmptyParams(params);

    const key = Array.from(arguments).map(arg => typeof arg == 'object' ? JSON.stringify(arg) : arg).join(';;;');

    if(!cache[key]){
        cache[key] = deferred();

        ytPromise.then(() => {
            let request;

            if(!params.key){
                params.key = globalApiKey;
            }

            if (properties) {
                const resource = createResource(properties);

                request = window.gapi.client.request({
                    'body': resource,
                    'method': requestMethod,
                    'path': path,
                    'params': params,
                });
            } else {
                request = window.gapi.client.request({
                    'method': requestMethod,
                    'path': path,
                    'params': params,
                });
            }

            request.execute((data) => {
                cache[key].resolve(data);

                setTimeout(() => {
                    cache[key] = null;
                }, 2000);
            });
        });
    }

    return cache[key];
}
