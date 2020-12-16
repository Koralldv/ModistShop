

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
    totalSale: 0,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);
const getTotalSale = arr => arr.reduce((sum, obj) => obj.sale + sum, 0);

const cart = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_PRODUCT':

        const currentProductItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

        const newItems = {
            ...state.items,
            [action.payload.id]: {
                items: currentProductItems,
                totalPrice: getTotalPrice(currentProductItems),
            }
            }  

        const allProducts =  [].concat.apply([], Object.values(newItems).map((obj) => obj.items));
        const totalPrice = getTotalPrice(allProducts);
        const totalSale = getTotalSale(allProducts);
        return {
            ...state,
            items: newItems,
            totalCount: allProducts.length,
            totalPrice,
            totalSale,
        }

        case 'CLEAR_PRODUCT':
            return{
                ...state,
                items: [],
                totalCount: 0,
                totalPrice: 0,
                totalSale: 0,
            }

        case 'REMOVE_PRODUCT':
            const newItemsDel = {
                ...state.items,
            }
            const currentTotalPrice = newItemsDel[action.payload].totalPrice;
            const currentTotalCount = newItemsDel[action.payload].items.length;
            const currentTotalSale = newItemsDel[action.payload].items[0].sale*currentTotalCount;
            delete newItemsDel[action.payload];

            return{
                ...state,
                items: newItemsDel,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
                totalSale: state.totalSale - currentTotalSale,
            }
        case 'PLUS_PRODUCT': {
                const newItemsPlus = [
                    ...state.items[action.payload].items,
                    state.items[action.payload].items[0]
                ]
                const newItems = {
                    ...state.items,
                    [action.payload]: {
                        items: newItemsPlus,
                        totalPrice: getTotalPrice(newItemsPlus)
                    }
                }
                const allProducts =  [].concat.apply([], Object.values(newItems).map((obj) => obj.items));
                const totalPrice = getTotalPrice(allProducts);
                const totalSale = getTotalSale(allProducts);
                return{
                    ...state,
                    items: {
                        ...state.items,
                        [action.payload]: {
                            items: newItemsPlus,
                            totalPrice: getTotalPrice(newItemsPlus)
                        }
                    },
                    totalPrice,
                    totalSale,
                    totalCount: allProducts.length,
                }
            }
            case 'MINUS_PRODUCT': {
                const oldItems = state.items[action.payload].items;
                const newItemsMinus = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
                const newItems = {
                    ...state.items,
                    [action.payload]: {
                        items: newItemsMinus,
                        totalPrice: getTotalPrice(newItemsMinus)
                    }
                }
                const allProducts =  [].concat.apply([], Object.values(newItems).map((obj) => obj.items));
                const totalPrice = getTotalPrice(allProducts);
                const totalSale = getTotalSale(allProducts);
                return{
                    ...state,
                    items: {
                        ...state.items,
                        [action.payload]: {
                            items: newItemsMinus,
                            totalPrice: getTotalPrice(newItemsMinus)
                        }
                    },
                    totalPrice,
                    totalSale,
                    totalCount: allProducts.length,
                }
            }
            case 'SINGLE_PRODUCT': {
                const items = state.items;
                return{
                    // ...state,
                    items: items,
                    // id: [action.payload.id]
                }
            }

        default:
            return state;
    }
}
export default cart;