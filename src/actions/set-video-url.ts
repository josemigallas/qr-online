import { Actions } from "./actions";
import { IAction } from "redux";

export interface ISetVideoUrl extends IAction {
    stream: any;
}

export function setVideoUrl(stream: any): ISetVideoUrl {
    return {
        type: Actions.SET_VIDEO_URL,
        stream: stream
    };
}