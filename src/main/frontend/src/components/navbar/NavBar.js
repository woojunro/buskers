import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/profile");
  }
  const goToLoginPage = () => {
    navigate("/login-page");
  }
  const goToMainPage = () => {
    navigate("/");
  }

  return (
    <nav className={styles.navBar} id="nav">
      <div className={styles.frameParent}>
        <goToMainPage className={styles.buskersWrapper} onClick={goToMainPage}>
          <h1 className={styles.buskers} id="Buskers">
            Buskers
          </h1>
        </goToMainPage>
        <div className={styles.frame}>
          <img
            className={styles.broadcastIcon}
            id="streaming"
            alt=""
            src="/streaming@2x.png"
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
