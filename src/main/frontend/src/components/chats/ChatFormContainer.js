import Chat1 from "./Chat1";
import styles from "./ChatFormContainer.module.css";
import * as StompJs from "@stomp/stompjs";
import React, {useEffect, useState} from "react";



const ChatFormContainer = ({chatList,broadcastList, callback, roomId, userId}) => {

    useEffect(() => {
        console.log("chatList", chatList);
    }, [chatList]);
    let [client, changeClient] = useState(null);
    const [chat, setChat] = useState("");
    const token = JSON.stringify("token");//user token


    const disConnect = () => {
        if(client ===null){
            return
        }
        client.deactivate();
    };
    const sendChat = () => {
        if(chat === ""){
            return ;
        }
        client.publish({
            destination:"/pub/chat/sendMessage",
            body: JSON.stringify({
                type: "TALK",
                roomId: roomId,
                sender: userId,
                message: chat,
                time: "time"
            })
        });
        console.log("chat:", chat);
        setChat("");
    };
    // //enter chat room
    // const sendName =  async () => {
    //     await client.subscribe("/sub/chat/room/"+roomId, callback);
    //     await client.publish({
    //         destination: "/pub/chat/enterUser",
    //         body: JSON.stringify({
    //             'type': 'ENTER',
    //             'roomId': roomId,
    //             'sender': userId,
    //             'time': "time"
    //         })
    //     })
    //
    //     await console.log(userId, "입장!");
    // }


    useEffect(() => {
        if(broadcastList.length===0) {
            return () => disConnect();
        }
        else{
            try{
                const clientData = new StompJs.Client({
                    brokerURL: "ws://localhost:8080/ws-stomp",
                    connectHeaders:{
                        login:"",
                        passcode: "password",
                    },
                    debug:function (str){
                        console.log(str);
                    },
                    // reconnectDelay:5000,
                    // heartbeatIncoming: 4000,
                    // heartbeatOutgoing:4000,
                });
                //subscribe
                clientData.onConnect = function(){
                    clientData.subscribe("/sub/chat/room/"+roomId, callback);
                    console.log("subscribe");
                };
                clientData.activate();
                changeClient(clientData);

            }
            catch(err) {
                console.log(err);
            }
        }
    }, [broadcastList]);

    const onChangeChat = (e)     => {
        setChat(e.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className={styles.chat1Parent}>
            <form className={styles.chatInput} onSubmit={handleSubmit}>
                <img className={styles.chatInputChild} alt="" src="/vector-1.svg" />
                <img
                    className={styles.chatInputItem}
                    id="send"
                    alt=""
                    src="/rectangle-11@2x.png"
                />
                <input
                    className={styles.textarea}
                    placeholder="채팅을 입력하세요"
                    value={chat}
                    onChange={onChangeChat}
                    onKeyDown={(e)=>{
                        if(e.key==='Enter'){
                            sendChat();
                        }}}
                />
                <img
                    className={styles.chatInputInner}
                    id="user-profile"
                    alt=""
                    src="/rectangle-131@2x.png"
                    onClick={sendChat}
                />
                <div className={styles.userName}>{userId}</div>
            </form>
            {chatList.map((chatDto, idx) => (
                <Chat1
                    dimensionCode="/rectangle-13@2x.png"
                    userCode="user_3"
                    chat1AlignSelf="stretch"
                    rectangleDivWidth="unset"
                    rectangleDivAlignSelf="stretch"
                    chatDto = {chatDto}
                    idx = {idx}
                />
            )
            )}


        </div>
    );
};

export default ChatFormContainer;

