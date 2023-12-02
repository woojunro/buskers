import styles from "./NavBar.module.css";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import { userIdAtom } from "../../atom";
import { useAtomValue } from "jotai";

const NavBar = () => {
    const userId = useAtomValue(userIdAtom);

    const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/profile");
  }
  const goToMainPage = () => {
    navigate("/");
  }
  const onBroadcastButtonClick = () => {
        const title = prompt("버스킹 제목을 입력해주세요:", "버스킹");
        fetch("https://api.video.wowza.com/api/v1.11/live_streams", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_WOWZA_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                live_stream: {
                    aspect_ratio_height: 720,
                    aspect_ratio_width: 1280,
                    billing_mode: "pay_as_you_go",
                    broadcast_location: "asia_pacific_s_korea",
                    encoder: "other_rtmp",
                    name: title,
                    transcoder_type: "transcoded",
                },
            }),
        }).then(async (res) => {
            if (res.ok) {
                const stream = await res.json();
                const streamId = stream.live_stream.id;
                const sourceInfo = stream.live_stream.source_connection_information;

                await fetch(
                    `https://api.video.wowza.com/api/v1.11/live_streams/${streamId}/start`,
                    {
                        method: "PUT",
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_WOWZA_TOKEN}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                await fetch("/api/v1/broadcasts", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title,
                        streamId,
                    }),
                }).then(async (broadcastRes) => {
                    if (broadcastRes.ok) {
                        alert(
                            "<연결정보>\nServer: " +
                            sourceInfo.primary_server +
                            "\nPort: " +
                            sourceInfo.host_port +
                            "\nStream: " +
                            sourceInfo.stream_name +
                            "\nUsername: " +
                            sourceInfo.username +
                            "\nPassword: " +
                            sourceInfo.password
                        );
                        navigate("/");
                    }
                });
                await axios.post("http://localhost:8080/api/v1/chat/createRoom",
                    {
                        roomId: streamId.toString(),
                        roomName: title.toString(),
                    },
                    {"Content-type": "application/json"},)
                    .then((res) => {
                        console.log(res);
                        //setStreamIdList((prev) => [...prev, res.data]);
                    })
                    .catch((res) => console.log(res));


            }
        });
    };
    // const goToBroadcast = async () => {
    //     await
    // }



    return (
    <nav className={styles.navBar} id="nav">
      <div className={styles.frameParent}>
        <goToMainPage className={styles.buskersWrapper} onClick={goToMainPage}>
          <h1 className={styles.buskers} id="Buskers">
            Buskers
          </h1>
        </goToMainPage>
        <div className={styles.frame} >
          <img
            className={styles.broadcastIcon}
            id="streaming"
            alt=""
            src="/streaming@2x.png"
            onClick={onBroadcastButtonClick}
          />
          <goToProfile onClick = {goToProfile} className={styles.userProfileIcon}>
          <img
            className={styles.profile_img}
            alt=""
            src="/user-profile@2x.png"
          /></goToProfile>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
