import * as api from '../api';
<<<<<<< Updated upstream

// Action creaters --> functions that return actions

export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        
        dispatch({type : 'FETCH_ALL', payload: data});

    } catch (error) {
        console.log("ERROR HEREHEEEE " );
    }
    
}
=======
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
>>>>>>> Stashed changes
