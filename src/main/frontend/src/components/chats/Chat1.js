import { useMemo } from "react";
import styles from "./Chat1.module.css";


const Chat1 = ({
                   dimensionCode,
                   userCode,
                   chat1AlignSelf,
                   rectangleDivWidth,
                   rectangleDivAlignSelf,
                    chatDto, idx
               }) => {
    const chat1Style = useMemo(() => {
        return {
            alignSelf: chat1AlignSelf,
        };
    }, [chat1AlignSelf]);

    const rectangleDivStyle = useMemo(() => {
        return {
            width: rectangleDivWidth,
            alignSelf: rectangleDivAlignSelf,
        };
    }, [rectangleDivWidth, rectangleDivAlignSelf]);

    return (
        <div key={idx} className={styles.chat1} style={chat1Style}>
            <div className={styles.chat1Child} style={rectangleDivStyle} />
            <div className={styles.chats}>{chatDto.message}</div>
            <img
                className={styles.chat1Item}
                id="user-profile"
                alt=""
                src={dimensionCode}
            />
            <div className={styles.user1}>{chatDto.sender}</div>
        </div>
    );
};

export default Chat1;
