import * as types from './constant';

export const addToCart = (request) => {
    console.log("action addToCart called ", request);
    return {
        type: types.ADD_TO_CART,
        payload : request
    }
};

export const removeToCart = (request) => {
    return {
        type: types.REMOVE_FROM_CART,
        payload : request
    }
};

export const emptyCart = () => {
    return {
        type: types.EMPTY_CART,
    }
};