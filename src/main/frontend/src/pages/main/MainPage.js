import NavBar from "../../components/navbar/NavBar";
import Streaming from "../../components/streaming/Streaming";
import ChatFormContainer from "../../components/chats/ChatFormContainer";
import styles from "./MainPage.module.css";
import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { userIdAtom } from "../../atom";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const userId = useAtomValue(userIdAtom);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [broadcastList, setBroadcastList] = useState([]);
  const [broadcastIdx, setBroadcastIdx] = useState(-1);

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
  };

  const handleNextClick = () => {
    if (broadcastList && broadcastIdx < broadcastList.length - 1)
      setBroadcastIdx(broadcastIdx + 1);
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className={styles.mainPage}>
      <main className={styles.frame} id="main">
        <NavBar />
        <main className={styles.frame1} id="main">
          <div className={styles.frameInnerLeft}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-19@2x.png"
              onClick={handleBeforeClick}
            />
          </div>
          <div className={styles.frameDiv}>
            {broadcastIdx >= 0 ? (
              <Streaming broadcast={broadcastList[broadcastIdx]} />
            ) : (
              <div>스트리밍 중인 버스킹이 없습니다.</div>
            )}
          </div>
          <ChatFormContainer />
          <div className={styles.frameInnerRight}>
            <img
              className={styles.frameChild}
              id="next"
              alt=""
              src="/rectangle-18@2x.png"
              onClick={handleNextClick}
            />
          </div>
        </main>
      </main>
    </div>
  );
};

export default MainPage;
