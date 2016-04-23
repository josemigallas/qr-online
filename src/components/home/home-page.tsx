import * as React from "react";

export interface Props extends React.Props<HomePage> {
}

export class HomePage extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="">
            </div>
        );
    }
}
