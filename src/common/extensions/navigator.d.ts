interface Navigator {
    getUserMedia(
        options: { video?: boolean; audio?: boolean },
        onSuccess: (stream: any) => void,
        onError?: (error: Error) => void
    ): void;
}