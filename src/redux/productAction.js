import * as types from './constant';

export const productListing = () => {
    console.log("action productListing called ");
    return {
        type: types.PRODUCT_LIST,
    }
};

