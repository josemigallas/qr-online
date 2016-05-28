import * as React from "react";
import * as Utils from "../../common/utils";
import {HomePageState} from "../../reducers/home-page-reducer";
import jsQR = require("jsqr");

export interface Props extends React.Props<Scanner> {
    url: string;
}

export class Scanner extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    public componentWillUpdate(nextProps: Props, nextState: HomePageState): void {
        if (this.props.url) {
            setTimeout(this.readImage, 1000);
        }
    }

    private readImage(): void {
        const video = document.getElementById("video") as HTMLVideoElement;
        const data: ImageData = Utils.getFrameImageDataFromVideo(video);
        const decoded: string = jsQR.decodeQRFromImage(data, video.width, video.height);
        alert(decoded);
    }

    public render(): JSX.Element {
        return (
            <div>
                <video id="video" className="video" autoPlay="true" src={ this.props.url }></video>
            </div>
        );
    }
}