import NavBar from "../../components/navbar/NavBar";
import Streaming from "../../components/streaming/Streaming";
import ChatFormContainer from "../../components/chats/ChatFormContainer";
import styles from "./MainPage.module.css";
import {useEffect,useState} from "react";
import { useAtomValue } from "jotai";
import { userIdAtom } from "../../atom";
import { useNavigate } from "react-router-dom";


const MainPage = () => {

    const userId = useAtomValue(userIdAtom);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [broadcastList, setBroadcastList] = useState([]);
    const [broadcastIdx, setBroadcastIdx] = useState(-1);
    const [chatList, setChatList] = useState([]);//채팅 기록
    const token = JSON.stringify("token");//user token

    useEffect(() => {
        console.log("chatList", chatList);
    }, [chatList]);
    useEffect(() => {
        console.log("broadcastList:", broadcastList);
    }, [broadcastList]);


    const callback = function(chatDto){
        if(chatDto.body) {
            const msg = JSON.parse(chatDto.body);
            console.log("msg:", msg);
            setChatList((prev)=> [...prev, msg]);
        }
    };

    useEffect(() => {
        if (!userId) {
            navigate("/login-page");
            return;
        }

        fetch("/api/v1/broadcasts", {
            credentials: "include",
        }).then(async (res) => {
            if (res.ok) {
                const list = await res.json();
                setBroadcastList(list);

                if (list && list.length > 0) {
                    setBroadcastIdx(0);
                }
            }
        });
        setIsLoading(false);
    }, []);


    const handleBeforeClick = () => {
        if (broadcastIdx > 0) setBroadcastIdx(broadcastIdx - 1);
        console.log("click before");
    };

    const handleNextClick = () => {
        if (broadcastList && broadcastIdx < broadcastList.length - 1)
            setBroadcastIdx(broadcastIdx + 1);
        console.log("click next");
    };

    if (isLoading) return <h1>Loading...</h1>;
    if(broadcastList.length!==0&&broadcastIdx>=0){
        return (
            <div className={styles.mainPage}>
                <main className={styles.frame} id="main">
                    <NavBar
                        broadcastList={broadcastList}
                        setBroadcastList={setBroadcastList}
                    />
                        <main className={styles.frame1} id="main">
                            <div className={styles.frameInnerLeft} onClick={handleBeforeClick}>
                                <img
                                    className={styles.frameChild}
                                    alt=""
                                    src="/rectangle-19@2x.png"
                                />
                            </div>
                            <div className={styles.frameDiv}>
                                <Streaming broadcast={broadcastList[broadcastIdx]} />
                            </div>
                            <ChatFormContainer
                                chatList={chatList}
                                broadcastList={broadcastList}
                                callback={callback}
                                roomId={broadcastList[broadcastIdx].streamId}
                                userId = {userId}
                            />

                            <div className={styles.frameInnerRight} onClick={handleNextClick}>
                                <img
                                    className={styles.frameChild}
                                    id="next"
                                    alt=""
                                    src="/rectangle-18@2x.png"
                                />
                            </div>
                        </main>
                </main>
            </div>
        );

    }
    else{
        return(
            <div className={styles.mainPage}>
                <main className={styles.frame} id="main">
                    <NavBar
                        broadcastList={broadcastList}
                        setBroadcastList={setBroadcastList}
                    />
                    <div className={styles.noBusking}>No busking</div>
                </main>
            </div>

        )
    }



};

export default MainPage;
