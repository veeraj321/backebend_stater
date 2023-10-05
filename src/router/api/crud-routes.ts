import { Application, Response, Request, request } from "express";
import { routeHandler } from "../../handler";

const express = require("express");
const crudRoute: Application = express.Router();




crudRoute.post("/", (request: Request, response: Response) => {
    routeHandler.creatData(request, response);
})

crudRoute.get("/", (request: Request, response: Response) => {
    routeHandler.fetchData(request, response);
})

crudRoute.get("/:id", (request: Request, response: Response) => {

    routeHandler.fetchDataById(request, response);
})

crudRoute.put("/:id", (request: Request, response: Response) => {

    routeHandler.UpdateDataById(request, response);
})
crudRoute.delete("/:id", (request: Request, response: Response) => {

    routeHandler.deleteDataById(request, response);
})
crudRoute.delete("/", (request: Request, response: Response) => {

    routeHandler.deleteData(request, response);

})

export default crudRoute;