import styles from "./StreamingVideo.module.css";

const StreamingVideo = () => {
    return (
        <div className={styles.vectorWrapper}>
            <img
                className={styles.frameChild}
                id="live-video"
                alt=""
                src="/rectangle-7@2x.png"
            />
        </div>
    );
};

export default StreamingVideo;
