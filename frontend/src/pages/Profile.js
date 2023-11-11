import ProfileContainer from "../components/ProfileContainer";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
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
      <ProfileContainer buttonText="Profile" />
    </div>
  );
};

export default Profile;
