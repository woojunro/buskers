import styles from "./LoginFormContainer.module.css";

const LoginFormContainer = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.login}>Login</div>
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <div className={styles.googleLogin}>Google Login</div>
        </div>
      </div>
      <div className={styles.frame3}>
        <div className={styles.signInHere}>Sign in here</div>
      </div>
    </div>
  );
};

export default LoginFormContainer;
