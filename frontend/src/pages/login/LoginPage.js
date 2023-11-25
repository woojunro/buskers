import LoginFormContainer from "../../components/login/LoginFormContainer";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.slide1691}>
        <nav className={styles.navBar} id="nav">
          <div className={styles.frameParent}>
            <div className={styles.buskersWrapper}>
              <h1 className={styles.buskers} id="Buskers">
                Buskers
              </h1>
            </div>
            <div className={styles.frame}>
              <img
                className={styles.broadcastIcon}
                id="streaming"
                alt=""
                src="/streaming1@2x.png"
              />
              <img
                className={styles.userProfileIcon}
                alt=""
                src="/user-profile1@2x.png"
              />
            </div>
          </div>
        </nav>
        <div className={styles.body}>
          <LoginFormContainer />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
