import { combineReducers } from 'redux'

import filtersReducer from './filters'
import productsReducer from './products'
import cartReducer from './cart'
import postsReducer from './posts'

const rootReducer = combineReducers({
    filters: filtersReducer,
    products: productsReducer,
    cart: cartReducer,
    posts: postsReducer
})

export default rootReducer;