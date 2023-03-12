// a reducers is a function which acceot a  state and an action than based on the action type it does some logic


// in here our state is posts

const reducer = (posts = [],action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}

export default reducer;