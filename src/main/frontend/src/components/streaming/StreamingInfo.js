import styles from "./StreamingInfo.module.css";

const StreamingInfo = ({ broadcast }) => {
  const onStopButtonClick = () => {
    const ok = window.confirm("정말 종료하시겠습니까?");

    if (!ok) return;

    fetch(
      `https://api.video.wowza.com/api/v1.11/live_streams/${broadcast?.streamId}/stop`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_WOWZA_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      fetch(
        `https://api.video.wowza.com/api/v1.11/live_streams/${broadcast?.streamId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_WOWZA_TOKEN}`,
          },
        }
      );
    });

    fetch(`/api/v1/broadcasts/${broadcast?.id}/end`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => window.location.reload());
  };

  return (
    <div className={styles.streamingInfo}>
      <div className={styles.frame}>
        <h1 className={styles.leeMuJinContainer} id="title">
          <span>{broadcast?.title}</span>
          <span className={styles.span}>{` `}</span>
        </h1>
        <div className={styles.frameClap}>
          <button onClick={onStopButtonClick}>방송종료</button>
        </div>
      </div>
      <div className={styles.frame1}>
        <img
          className={styles.frameItem}
          id="user-profile"
          alt=""
          src="/rectangle-16@2x.png"
        />
        <div className={styles.userName}>{broadcast?.host?.name}</div>
      </div>
    </div>
  );
};

export default StreamingInfo;
