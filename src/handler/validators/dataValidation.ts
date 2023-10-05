import { StartMeInterface } from "../../utils/interface"
import { errormsg } from "../../constants";
import { MyError } from "../../utils/classes";

class DataValidations {
    public validationForCreateData = (payload: StartMeInterface) => {
        let errorMsg = "";
        if (Object.keys(payload).length == 0) {
            throw new MyError(400, errormsg.COMMON_ERROR_CONSTANTS.emptyObject)

        }
        if (!payload?.name || payload.name.trim() === "") {
            errorMsg = errorMsg + errormsg.ERRORS_MSG_CONSTANTS.nameIsRequired
        }

        if (!payload?.description || payload.description.trim() === "") {
            errorMsg = errorMsg + errormsg.ERRORS_MSG_CONSTANTS.descriptionIsRequired
        }
        if (errorMsg !== "") {
            throw new MyError(400, errorMsg)
        }
    }

    public validationForUpdate = (payload: StartMeInterface) => {
        let errorMsg = "";
        if (Object.keys(payload).length == 0) {
            throw new MyError(400, errormsg.COMMON_ERROR_CONSTANTS.emptyObject)

        }
        if (payload.name === null || payload.name?.trim() === "") {
            errorMsg = errorMsg + errormsg.ERRORS_MSG_CONSTANTS.nameIsRequired
        }

        if (payload.description === null || payload.description?.trim() === "") {
            errorMsg = errorMsg + errormsg.ERRORS_MSG_CONSTANTS.descriptionIsRequired
        }
        if (errorMsg !== "") {
            throw new MyError(400, errorMsg)
        }
    }
}

const datavalidation = new DataValidations();

export default datavalidation;