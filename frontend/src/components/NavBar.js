import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
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
            src="/streaming@2x.png"
          />
          <img
            className={styles.userProfileIcon}
            alt=""
            src="/user-profile@2x.png"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
