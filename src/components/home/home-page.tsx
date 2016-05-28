import * as React from "react";
import {Scanner} from "./scanner";
import {HomePageState} from "../../reducers/home-page-reducer";

export interface Props extends React.Props<HomePage> {
    stream: any;

    getUserMedia: (
        options: { video?: boolean; audio?: boolean },
        onSuccess: (stream: any) => void,
        onError?: (error: Error) => void
    ) => void;

    onSuccess: (stream: any) => void;
    onError: (message: Error) => void;
}

export class HomePage extends React.Component<Props, {}> {

    private url: string;

    constructor(props: Props) {
        super(props);
    }

    public componentWillMount(): void {
        this.props.getUserMedia.call(navigator, { video: true }, this.props.onSuccess, this.props.onError);
    }

    public componentWillUpdate(nextProps: Props, nextState: HomePageState): void {
        if (nextProps.stream) {
            this.url = window.URL.createObjectURL(nextProps.stream);
        }
    }

    public render(): JSX.Element {
        return (
            <div>
                <Scanner url={ this.url } />
            </div>
        );
    }
}
