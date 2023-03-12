<<<<<<< Updated upstream
// a reducers is a function which acceot a  state and an action than based on the action type it does some logic


// in here our state is posts

const reducer = (posts = [],action) =>{
=======
export default (state = [],action) =>{
>>>>>>> Stashed changes
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
<<<<<<< Updated upstream
            return posts;
        default:
            return posts;
    }
}

export default reducer;
=======
            return state;
    
        default:
            return state;
    }
}

// here state = posts
>>>>>>> Stashed changes
