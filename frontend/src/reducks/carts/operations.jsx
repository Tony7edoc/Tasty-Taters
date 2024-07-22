import { addCartAction,increaseCartAction,decreaseCartAction,fetchCartAction } from "./actions";

const CARTS_KEY = "CARTS_KEY"


export const fetchFromLocalStorage = () => {
    return async (dispatch) => {
        let cartsJSON = localStorage.getItem(CARTS_KEY);
        let carts = {};
        if (cartsJSON) {
            carts = JSON.parse(cartsJSON)
        }
        const subtotal = calculateSubtoal(carts);
        dispatch(fetchCartAction(carts,subtotal))
    }
}

export const addCart = (item) => {
    return async (dispatch,getState) => {
        let prevCarts = getState().carts.list;
        prevCarts[item.id] = {item: item, selected_count: 1};
        const subtotal = calculateSubtoal(prevCarts);
        setToLocalStorage(prevCarts);
        dispatch(addCartAction(prevCarts,subtotal))
    }
}

export const increaseCart = (item) => {
    return async (dispatch,getState) => {
        let prevCarts = getState().carts.list;
        let nextSelectedCount = prevCarts[item.id].selected_count + 1;
        prevCarts[item.id] = {"item": item, "selected_count": nextSelectedCount};
        const subtotal = calculateSubtoal(prevCarts);
        setToLocalStorage(prevCarts);
        dispatch(increaseCartAction(prevCarts,subtotal))
    }
}

export const decreaseCart = (item) => {
    return async (dispatch,getState) => {
        let prevCarts = getState().carts.list;
        let nextSelectedCount = prevCarts[item.id].selected_count - 1;
        if (nextSelectedCount > 0) {
        prevCarts[item.id] = {"item": item, "selected_count": nextSelectedCount};
        } else {
            delete prevCarts[item.id]
        }
        const subtotal = calculateSubtoal(prevCarts);
        setToLocalStorage(prevCarts);
        dispatch(decreaseCartAction(prevCarts,subtotal))
    }
}

const setToLocalStorage = (carts) => {
    localStorage.setItem(CARTS_KEY,JSON.stringify(carts))
}


const calculateSubtoal = (carts) => {
    let subtotal = 0;

    for(let key in carts) {
        subtotal += (Number(carts[key].item.price) * carts[key].selected_count)
    }

    return subtotal;
}
