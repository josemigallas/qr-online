import * as React from "react";

export interface Props extends React.Props<Scanner> {
    url: string;
}

export class Scanner extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div>
                <video className="video" autoPlay="true" src={ this.props.url }></video>
            </div>
        );
    }
}