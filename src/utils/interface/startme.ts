import { ObjectId } from "mongodb";

export interface StartMeInterface {
    _id?: ObjectId;
    name?: string;
    description?: string;
}