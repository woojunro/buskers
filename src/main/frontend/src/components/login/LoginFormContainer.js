import styles from "./LoginFormContainer.module.css";
import {GoogleOAuthProvider} from "@react-oauth/google";
import LoginButton from './LoginButton'

const LoginFormContainer = () => {


  return (
    <div className={styles.frame}>
      <div className={styles.login}>Login</div>
        <GoogleOAuthProvider clientId={"584824258955-5l6foi1anol0ffum8si62bt5stgu5te5.apps.googleusercontent.com"}>
            <LoginButton></LoginButton>
        </GoogleOAuthProvider>
    </div>
  );
};

export default LoginFormContainer;
