import * as api from '../api';
// we import everything from api as api

// ACTIONS
// action creators --> the function that returns an action


export const getPosts = ()=> async(dispatch) =>{
    
    try {
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data});

    } catch (error) {
        console.log(error.message);
    }
    
}
