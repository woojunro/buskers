import Chat1 from "./Chat1";
import styles from "./ChatFormContainer.module.css";

const ChatFormContainer = () => {
    return (
        <div className={styles.chat1Parent}>

            <div className={styles.chatInput}>
                <img className={styles.chatInputChild} alt="" src="/vector-1.svg" />
                <img
                    className={styles.chatInputItem}
                    id="send"
                    alt=""
                    src="/rectangle-11@2x.png"
                />
                <textarea
                    className={styles.textarea}
                    placeholder="채팅을 입력하세요"
                    rows={1}
                    cols={30}
                />
                <img
                    className={styles.chatInputInner}
                    id="user-profile"
                    alt=""
                    src="/rectangle-131@2x.png"
                />
                <div className={styles.userName}>user Name</div>
            </div>

            <Chat1
                dimensionCode="/rectangle-13@2x.png"
                userCode="user_3"
                chat1AlignSelf="stretch"
                rectangleDivWidth="unset"
                rectangleDivAlignSelf="stretch"
            />
            <Chat1
                dimensionCode="/rectangle-13@2x.png"
                userCode="user_2"
                chat1AlignSelf="stretch"
                rectangleDivWidth="unset"
                rectangleDivAlignSelf="stretch"
            />
            <Chat1
                dimensionCode="/rectangle-13@2x.png"
                userCode="user_1"
                chat1AlignSelf="stretch"
                rectangleDivWidth="unset"
                rectangleDivAlignSelf="stretch"
            />
        </div>
    );
};

export default ChatFormContainer;
