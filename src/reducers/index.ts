import {combineReducers} from "redux";
import {homePageReducer, HomePageState} from "./home-page-reducer";
import {IAction} from "redux";

export default combineReducers({
    homePageReducer,
})

export interface IReducers {
    homePageReducer: HomePageState;
}
