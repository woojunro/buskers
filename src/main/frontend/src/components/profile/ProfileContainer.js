import {useEffect, useMemo, useState} from "react";
import styles from "./ProfileContainer.module.css";
import axios from "axios";

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

    const [userInfo, setUserInfo] = useState({});
    const [isClicked, setIsClicked]=useState(false);
    const [userName, setUserName] = useState();

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/users/me")
            .then((res)=> {
                console.log(res);
                setUserInfo(res.data);
                setUserName(res.data.name);
            })
            .catch((res)=>console.log(res));
    }, []);

    const onClickEditHandler = (userId, userName) =>{
        axios.patch("http://localhost:8080/api/v1/users/"+userId,
            {name: userName}, )
            .then((res)=>{
                console.log("수정된 정보", res);
                setUserInfo(res.data);
                setUserName(res.data.name);
            });
        setIsClicked(false);
    }
    const handleChange = (e) => {
        const updateUserName = e.target.value;
        console.log(updateUserName);
        setUserName(updateUserName);
    }

    if(!isClicked){
        return (
            <div className={styles.profileParent}>
                <div className={styles.profile}>{buttonText}</div>
                <div className={styles.userNameWrapper}>
                    <div className={styles.userName} style={userNameStyle}>
                        USER Name: {userInfo.name}
                    </div>
                </div>
                <div className={styles.userNameWrapper}>
                    <div className={styles.userName} style={eMailStyle}>
                        USER EMAIL: {userInfo.email}
                    </div>
                </div>
                <div className={styles.userNameWrapper}>
                    <div className={styles.userName} style={passwordStyle}>
                        password
                    </div>
                </div>
                <div className={styles.frame} onClick={()=> setIsClicked(true) }>
                    <div className={styles.profile1}>회원 이름 수정 하기</div>
                </div>
            </div>
        );}

    else{
        return(
            <form className={styles.profileParent} onSubmit={()=>onClickEditHandler}>
                <div className={styles.profile}>{buttonText}</div>
                <div className={styles.userNameWrapper}>
                    <input
                        className={styles.userName}
                        style={userNameStyle}
                        placeholder='user name'
                        value={userName}
                        onChange={handleChange}/>

                </div>
                <button type='button' className={styles.frame} onClick={()=>onClickEditHandler(userInfo.id, userName)}>
                    <div className={styles.profile1}>저장</div>
                </button>
            </form>
        )




    }
};

export default ProfileContainer;
