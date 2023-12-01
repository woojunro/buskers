import LoginFormContainer from "../../components/login/LoginFormContainer";
import styles from "./LoginPage.module.css";
import NavBar from "../../components/navbar/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GOOGLE_LOGIN_REDIRECT_URI } from "../../constant";
import { useSetAtom } from "jotai";
import { userIdAtom } from "../../atom";

const LoginPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const setUserId = useSetAtom(userIdAtom);

  const loginFailedMessage = "로그인에 실패하였습니다. 다시 시도해주세요.";

  useEffect(() => {
    const code = queryParams.get("code");
    if (code) {
      fetch("/api/v1/auth/login/google", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: code,
          redirectUri: GOOGLE_LOGIN_REDIRECT_URI,
        }),
      })
        .then((res) => {
          if (res.ok) {
            fetch("/api/v1/users/me", {
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            }).then(async (meRes) => {
              if (meRes.ok) {
                const me = await meRes.json();
                setUserId(me.id);
                navigate("/");
              }
            });
          } else {
            alert(loginFailedMessage);
          }
        })
        .catch(() => {
          alert(loginFailedMessage);
        });
    }
  }, []);

  return (
    <div className={styles.loginPage}>
      <NavBar />
      <div className={styles.body}>
        <LoginFormContainer />
      </div>
    </div>
  );
};

export default LoginPage;
