import { MyError } from "../utils/classes";

class ErrorDecorator {



    public handleResponseError(target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args: any[]) {
            const response = args[1];
            try {
                const result = await originalMethod.apply(this, args);
                return result;
            } catch (error) {
                const errorStack: MyError = error as MyError;
                const status = errorStack.statuscode || 500;
                response.status(status).json({ message: errorStack.message });//json must be last it will end the code

            }
        };
    }
}

const errorDecorators = new ErrorDecorator();

export default errorDecorators;
