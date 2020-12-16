export const fetchProducts = (category, sortBy) => async dispatch => {
  dispatch(setLoaded(false))
      fetch(`https://my-json-server.typicode.com/Koralldv/demo/products?${category !== null ? `category=${category}` :
    ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
      .then(response => response.json())
      .then(data => {
        dispatch(setProducts(data));
      });
}

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
})

export const setProducts = (items) => ({
    type: 'SET_PRODUCTS',
    payload: items,
})

