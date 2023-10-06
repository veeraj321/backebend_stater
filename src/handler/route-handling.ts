import { startme } from "../router/routes";
import { StartMeInterface } from "../utils/interface";
import { Request, Response } from "express";
import { modal } from "../Db/mongodb/schema"
import datavalidation from "./validators/dataValidation";
import idValidators from "./validators/idvalidators";
import errorDecorators from "../decorators/errror -decorators"



class RouteHandler {
    @errorDecorators.handleResponseError
    public async creatData(request: Request, response: Response) {

        const getData: StartMeInterface = request.body;
        datavalidation.validationForCreateData(getData)
        const data = await modal.create(getData)
        response.status(200).json(data)
        console.log(getData);
    }


    @errorDecorators.handleResponseError
    public async fetchDataById(request: Request, response: Response) {
        const id = request.params.id
        idValidators.ObjectIdValidators(id);
        const data = await modal.findById(id)
        response.status(200).json(data)
        console.log(data);

    }
    @errorDecorators.handleResponseError
    public async fetchData(request: Request, response: Response) {
        const data = await modal.find()
        response.status(200).json(data)
        console.log(data);

    }

    @errorDecorators.handleResponseError
    public async UpdateDataById(request: Request, response: Response) {
        const id = request.params.id
        const getData: StartMeInterface = request.body;
        datavalidation.validationForUpdate(getData)
        idValidators.ObjectIdValidators(id);
        const data = await modal.findByIdAndUpdate(id, request.body)
        response.status(200).json(data)
        console.log(data);

    }

    @errorDecorators.handleResponseError
    public async deleteDataById(request: Request, response: Response) {
        const id = request.params.id
        idValidators.ObjectIdValidators(id);
        const data = await modal.findByIdAndDelete(id)
        response.status(200).json(data)
        console.log(data);

    }

    @errorDecorators.handleResponseError
    public async deleteData(request: Request, response: Response) {
        console.log("sdfgj");
        const data = await modal.deleteMany()
        response.status(200).json(data)
        console.log(data);

    }


}

const routeHandler = new RouteHandler();
export default routeHandler;