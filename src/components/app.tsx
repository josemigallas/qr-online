import * as React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "../reducers";

interface Props extends React.Props<App> {
}

const store = createStore(
    reducers
);

export class App extends React.Component<Props, {}> {
    public render() {
        return (
            <Provider store={store}>
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </Provider>
        );
    }
}