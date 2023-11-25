import StreamingVideo from "./StreamingVideo";
import StreamingInfo from "./StreamingInfo";
import styles from "./Streaming.module.css";

const Streaming = () => {
  return (
    <div className={styles.frameParent}>
      <StreamingVideo />
      <StreamingInfo />
    </div>
  );
};

export default Streaming;
