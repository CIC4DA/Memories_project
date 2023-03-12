import React from "react";
import Post from "./Post/Post.js";
<<<<<<< Updated upstream
// import useStyles from './styles';
import { useSelector } from "react-redux";

const Posts = () => {
    const posts = useSelector((state)=>state.posts);

=======
import { useSelector } from "react-redux";
import useStyles from './styles.js';

const Posts = () => {
    // const classes = useStyles();
    const posts = useSelector((state)=>state.posts);
>>>>>>> Stashed changes
    console.log(posts);
    return(
        <>
            <h1>Posts</h1>
            <Post/>
            <Post/>
        </>
    );
}


export default Posts;