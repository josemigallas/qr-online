import { Actions } from "./actions";
import { IAction } from "redux";

export interface IError extends IAction {
    message: Error;
}

export function onError(message: Error): IError {
    return {
        type: Actions.ERROR,
        message: message
    };
}