export const addProduct = (ProductObj) => ({
    type: 'ADD_PRODUCT',
    payload: ProductObj,
})

export const clearProduct = () => ({
    type: 'CLEAR_PRODUCT',
})

export const removeProduct = (id) => ({
    type: 'REMOVE_PRODUCT',
    payload: id,
})

export const plusProduct = (id) => ({
    type: 'PLUS_PRODUCT',
    payload: id,
})

export const minusProduct = (id) => ({
    type: 'MINUS_PRODUCT',
    payload: id,
})

export const singleProduct = (id) => ({
    type: 'SINGLE_PRODUCT',
    payload: id,
})