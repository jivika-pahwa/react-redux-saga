import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant"

export const productData = (initialData = [], action) => {
    switch (action.type) {
        // case PRODUCT_LIST:
        //     console.log("PRODUCT_LIST condition ", action)
        //     return [...initialData, action.payload]
        case SET_PRODUCT_LIST:
            console.log("SET_PRODUCT_LIST condition ", action)
            return [action.ApiData]
        default:
            return initialData
    }
}