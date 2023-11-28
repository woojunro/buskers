import { useMemo } from "react";
import styles from "./ProfileContainer.module.css";

const ProfileContainer = ({
                              buttonText,
                              propColor,
                              propColor1,
                              propColor2,
                          }) => {
    const userNameStyle = useMemo(() => {
        return {
            color: propColor,
        };
    }, [propColor]);

    const eMailStyle = useMemo(() => {
        return {
            color: propColor1,
        };
    }, [propColor1]);

    const passwordStyle = useMemo(() => {
        return {
            color: propColor2,
        };
    }, [propColor2]);

    return (
        <div className={styles.profileParent}>
            <div className={styles.profile}>{buttonText}</div>
            <div className={styles.userNameWrapper}>
                <div className={styles.userName} style={userNameStyle}>
                    user name
                </div>
            </div>
            <div className={styles.userNameWrapper}>
                <div className={styles.userName} style={eMailStyle}>
                    e-mail
                </div>
            </div>
            <div className={styles.userNameWrapper}>
                <div className={styles.userName} style={passwordStyle}>
                    password
                </div>
            </div>
            <div className={styles.frame}>
                <div className={styles.profile1}>회원정보 수정</div>
            </div>
        </div>
    );
};

export default ProfileContainer;
