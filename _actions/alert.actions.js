import { alertConstants } from '../_constants';

export const alertActions = {
    successRequest,
    successResponse,
    error,
    clear
};

function successRequest() {
    return { type: alertConstants.SUCCESS_REQUEST };
}

function successResponse(message) {
    return { type: alertConstants.SUCCESS_RESPONSE, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear(){
    return { type: alertConstants.CLEAR };
}