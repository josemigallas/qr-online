import {connect} from "react-redux";
import {HomePage} from "./home-page";
import {HomePageState} from "../../reducers/home-page-reducer";
import {IReducers} from "../../reducers/index";
import { setVideoUrl } from "../../actions/set-video-url";
import { onError } from "../../actions/error";

export const homePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

function mapStateToProps(state: IReducers): HomePageState {
    return {
        stream: state.homePageReducer.stream,
        getUserMedia: state.homePageReducer.getUserMedia
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSuccess: (stream: any) => dispatch(setVideoUrl(stream)),
        onError: (message: Error) => dispatch(onError(message))
    };
}
