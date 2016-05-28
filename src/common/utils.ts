export function getFrameImageDataFromVideo(video: HTMLVideoElement): ImageData {
    let canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    let context = canvas.getContext("2d");
    context.drawImage(video, 0, 0);
    return context.getImageData(0, 0, canvas.width, canvas.height);
}