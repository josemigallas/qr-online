import objectAssign = require("object-assign");
import {IAction} from "redux";
import {Actions} from "../actions/actions";

export class HomePageState {
    constructor() {
    }
}

export function homePageReducer(state: HomePageState = new HomePageState(), action: IAction): HomePageState {
    switch (action.type) {
        default:
            return state;
    }
}
