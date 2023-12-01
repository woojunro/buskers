import { useGoogleLogin } from "@react-oauth/google";
import styles from "./LoginFormContainer.module.css";
import { GOOGLE_LOGIN_REDIRECT_URI } from "../../constant";

export default function LoginButton() {
  const login = useGoogleLogin({
    ux_mode: "redirect",
    redirect_uri: GOOGLE_LOGIN_REDIRECT_URI,
    flow: "auth-code",
  });
  return (
    <div className={styles.frame1}>
      <div className={styles.frame2} onClick={() => login()}>
        Sign up google
      </div>
    </div>
  );
}
