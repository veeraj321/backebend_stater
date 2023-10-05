class MyError extends Error {

    statuscode: number;

    constructor(statuscode: number, errormsg: string) {
        super(errormsg);
        this.statuscode = statuscode;
        this.name = Error.name;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    }
}

export default MyError;
