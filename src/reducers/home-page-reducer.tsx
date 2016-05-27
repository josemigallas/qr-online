import objectAssign = require("object-assign");
import {IAction} from "redux";
import {Actions} from "../actions/actions";
import {ISetVideoUrl} from "../actions/set-video-url";
import {IError} from "../actions/error";

export class HomePageState {

    public stream: any;
    public getUserMedia: (
        options: { video?: boolean; audio?: boolean },
        onSuccess: (stream: any) => void,
        onError?: (error: Error) => void
    ) => void;

    constructor() {
        let n: any = navigator;
        this.getUserMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia || n.oGetUserMedia;
    }
}

export function homePageReducer(state: HomePageState = new HomePageState(), action: IAction): HomePageState {
    switch (action.type) {
        case Actions.SET_VIDEO_URL:
            const caseSetVideoUrl = action as ISetVideoUrl;
            const newState = objectAssign({}, state, { stream: caseSetVideoUrl.stream });
            return newState;

        case Actions.ERROR:
            const caseError = action as IError;
            const newErrorState = objectAssign({}, state, { message: caseError.message });
            return newErrorState;

        default:
            return state;
    }
}
