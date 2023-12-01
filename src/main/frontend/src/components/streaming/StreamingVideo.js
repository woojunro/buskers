import { useEffect } from "react";
import styles from "./StreamingVideo.module.css";

const StreamingVideo = ({ playbackUrl }) => {
  useEffect(() => {
    window.flowplayer &&
      window.flowplayer("#live-video", {
        src: playbackUrl,
        token:
          "eyJraWQiOiIwWE44RnRTYkQxblYiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjIjoie1wiYWNsXCI6MzgsXCJpZFwiOlwiMFhOOEZ0U2JEMW5WXCJ9IiwiaXNzIjoiRmxvd3BsYXllciJ9.wHlyQZ86rIHD8ldgnpiWbmFBmR4zt_3FSj78GMk7lfQ1es7K8y0MuHzbqcJfp0lm6LcUbUkQ5PsazIsAybxivg",
      });
  }, [playbackUrl]);

  return (
    <div className={styles.vectorWrapper}>
      <div>{playbackUrl}</div>
      <div className={styles.frameChild} id="live-video" />
    </div>
  );
};

export default StreamingVideo;
