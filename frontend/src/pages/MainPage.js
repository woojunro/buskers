import NavBar from "../components/NavBar";
import Streaming from "../components/Streaming";
import ChatFormContainer from "../components/ChatFormContainer";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <main className={styles.frame} id="main">
        <NavBar />
        <main className={styles.frame1} id="main">
          <div className={styles.frameInner}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-19@2x.png"
            />
          </div>
          <div className={styles.frameDiv}>
            <Streaming />
          </div>
          <ChatFormContainer />
          <div className={styles.frameInner}>
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
};

export default MainPage;
