import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js"

const app = express(); // we are initiallizing the app

// adding prefix to routes
app.use('/posts',postRoutes); // it basically said that every route start with localhost:5000/posts

// general setup
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// connecting server with database 
const CONNECTION_URL = "mongodb://dhruvjain9100:jain12345@ac-wqctfjb-shard-00-00.1rsuw5m.mongodb.net:27017,ac-wqctfjb-shard-00-01.1rsuw5m.mongodb.net:27017,ac-wqctfjb-shard-00-02.1rsuw5m.mongodb.net:27017/?ssl=true&replicaSet=atlas-39lfzg-shard-0&authSource=admin&retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))).catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false); // to make sure we dont get any warings in the console.... this is giving error as it is deprecated


