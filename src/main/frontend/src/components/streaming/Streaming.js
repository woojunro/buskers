import StreamingVideo from "./StreamingVideo";
import StreamingInfo from "./StreamingInfo";
import styles from "./Streaming.module.css";
import { useEffect, useState } from "react";

const Streaming = ({ broadcast }) => {
  const [playbackUrl, setPlaybackUrl] = useState("");

  useEffect(() => {
    if (!broadcast) return;
    const streamId = broadcast.streamId;
    fetch(`https://api.video.wowza.com/api/v1.11/live_streams/${streamId}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_WOWZA_TOKEN}`,
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      const stream = await res.json();
      setPlaybackUrl(stream.live_stream.player.hls_playback_url);
    });
  }, [broadcast]);

  return (
    <div className={styles.frameParent}>
      <StreamingVideo playbackUrl={playbackUrl} />
      <StreamingInfo broadcast={broadcast} />
    </div>
  );
};

export default Streaming;
