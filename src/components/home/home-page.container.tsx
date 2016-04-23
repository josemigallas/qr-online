import {connect} from "react-redux";
import {HomePage} from "./home-page";
import {HomePageState} from "../../reducers/home-page-reducer";
import {IReducers} from "../../reducers/index";

export const homePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

function mapStateToProps(state: IReducers): HomePageState {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}
