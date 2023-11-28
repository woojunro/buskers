import LoginFormContainer from "../../components/login/LoginFormContainer";
import styles from "./LoginPage.module.css";
import NavBar from "../../components/navbar/NavBar";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
        <NavBar/>
        <div className={styles.body}>
          <LoginFormContainer />
        </div>
    </div>
  );
};

export default LoginPage;
