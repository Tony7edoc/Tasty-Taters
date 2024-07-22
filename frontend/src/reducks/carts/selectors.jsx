import {createSelector} from 'reselect';

const cartSelector = (state) => state.carts;

export const getCarts = createSelector (
    [cartSelector],
    state => state.list
)


export const getSubtotal = createSelector(
    [cartSelector],
    state => state.subtotal
)
