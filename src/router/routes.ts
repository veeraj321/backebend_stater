const express = require("express");


export const app = express();
import mongoose from "mongoose";
import crudRoute from "./api/crud-routes";
app.use(express.json());



export const startme = (): void => {

    app.listen(5000, () => {
        try {
            console.log("running on port 3000");
        }
        catch (err) {
            console.log("not running on port 3000");
        }



    })
    mongoose.connect("mongodb+srv://veeraj:messi@cluster0.ab4a7jb.mongodb.net/Api?retryWrites=true&w=majority&appName=AtlasApp")
        .then(() => {
            app.listen(5000, () => {
                try {
                    console.log("running on port 3000");
                    console.log("mongodb connected")
                }
                catch (err) {
                    console.log("not running on port 3000");
                }
            })
        })
        .catch((error) => {
            console.log(error)
        })
}
app.use("/api", crudRoute)

