import {useGoogleLogin} from "@react-oauth/google";
import styles from "./LoginFormContainer.module.css";

export default function LoginButton(){
    const login = useGoogleLogin({
        ux_mode: "redirect",
        redirect_uri: "http://localhost:8080/login/callback",
        onSuccess: codeResponse => console.log(codeResponse),
        flow: 'auth-code',
    });
    return(
        <div className={styles.frame1}>
            <div className={styles.frame2} onClick={()=>login()}>
                Sign up google
            </div>
        </div>
    )
}