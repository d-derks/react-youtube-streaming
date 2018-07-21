export default function createAsyncActionType(type) {
    return {
        PENDING: `${type}_PENDING`,
        SUCCESS: `${type}_SUCCESS`,
        ERROR: `${type}_ERROR`,
    };
}
