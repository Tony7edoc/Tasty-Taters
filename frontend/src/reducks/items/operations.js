import API from "../../API";
import { fetchItemsAction } from "./actions";

const api = new API();

export const fetchItems = (category) => {
    return async (dispatch) => {
        return api.getItems(category)
        .then((items) => {
            console.log(items)
            dispatch(fetchItemsAction(items.results))
            
        })
        .catch((error) => {
            alert("Failed To Connect Api: /items",error)
        })
    }
}