import { ObjectId } from "mongodb";
import { MyError } from "../../utils/classes";
import { errormsg } from "../../constants";

class IdValidators {
    public ObjectIdValidators = (id: string) => {
        if (/^[0-9a-fA-F]{24}$/.test(id)) {
            return true;
        }
        throw new MyError(400, errormsg.COMMON_ERROR_CONSTANTS.invalidObjectId);
    }


}
const idValidators = new IdValidators();

export default idValidators;

