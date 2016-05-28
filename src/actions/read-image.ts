import {Actions} from "./actions";
import {IAction} from "redux";

export interface IReadImage extends IAction {
}

export function readImage(): IReadImage {
    return {
        type: Actions.READ_IMAGE,
    };
}