import {useEffect, useState} from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import Profile from "./pages/profile/Profile";
import LoginPage from "./pages/login/LoginPage";
import axios from 'axios';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/main')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login-page" element={<LoginPage />} />
      </Routes>
  );
}
export default App;
