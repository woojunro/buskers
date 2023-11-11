import ProfileContainer from "../components/ProfileContainer";
import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles.signIn}>
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
      <ProfileContainer
        buttonText="sign In"
        propColor="#d9d9d9"
        propColor1="#d9d9d9"
        propColor2="#d9d9d9"
      />
    </div>
  );
};

export default SignIn;
