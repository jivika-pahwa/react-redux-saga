import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"

export const cartData = (initialData = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("ADD_TO_CART condition ", action)
            return [action.payload,...initialData]
        case REMOVE_FROM_CART:
            console.log("REMOVE_FROM_CART condition ", action);
            console.log("REMOVE_FROM_CART condition ", initialData);
            // initialData.length = initialData.length ? initialData.length - 1 : []
            initialData.pop()
            return [...initialData]
        case EMPTY_CART:
            console.log("EMPTY CART condition ", action);
            initialData = []
            return [...initialData]
        default:
            return initialData
    }
}