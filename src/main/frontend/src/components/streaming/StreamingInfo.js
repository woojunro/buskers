import styles from "./StreamingInfo.module.css";

const StreamingInfo = () => {
    return (
        <div className={styles.streamingInfo}>
            <div className={styles.frame}>
                <h1 className={styles.leeMuJinContainer} id="title">
                    <span>이무진(LEE Mu JIN)-북서울의 버스킹</span>
                    <span className={styles.span}>{` `}</span>
                </h1>
                <div className={styles.frameClap}>
                    <img
                        className={styles.frameClapChild}
                        id="clap"
                        alt=""
                        src="/rectangle-17@2x.png"
                    /></div>
            </div>
            <div className={styles.frame1}>
                <img
                    className={styles.frameItem}
                    id="user-profile"
                    alt=""
                    src="/rectangle-16@2x.png"
                />
                <div className={styles.userName}>user name</div>
            </div>
        </div>
    );
};

export default StreamingInfo;
