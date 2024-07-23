import axios from 'axios';
const LOGIN_USER_KEY = 'WD_FORUM_LOGIN_USER_KEY';

var baseURL;
// if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
//     baseURL = process.env.REACT_APP_API_BASE_URL;
// } else {
//     baseURL = 'http://127.0.0.1:8000';
// }


baseURL = 'http://127.0.0.1:8000';

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */


export default class API {
   getItems = async (category) => {
    let url = '/items';
    if (category) {
        url +='?category' + category;
    }
    const items = await api 
    .get(url)
    .then((response) => {
        console.log(response.data)
        return response.data

    })
    .catch((error) => {
        throw new Error(error)
    })
    return items;
   }
   writeReview = async (item_id,name,body,like_count) => {
    const formData = new FormData();
    formData.append('item',item_id);
    formData.append('name',name);
    formData.append('body',body);
    formData.append('like_count',like_count);

    const savedReview = await api.post('/reviews/add',formData)
    .then((response) => {
        response.data();
    })
    .catch((error) => {
        throw new Error(error)
    })
    return savedReview
   }

   getReviews = async(item_id) => {
    let url = '/reviews?item_id' + item_id;
    const reviews = await api
    .get(url)
    .then((response) => {
        return response.data.results;
    })
    .catch((error) => {
        throw new Error(error)
    })
    return reviews
   }
}
