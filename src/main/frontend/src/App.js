import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import Profile from "./pages/profile/Profile";
import LoginPage from "./pages/login/LoginPage";
import { useAtom } from "jotai";
import { userIdAtom } from "./atom";

function App() {
  const [userId, setUserId] = useAtom(userIdAtom);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login-page" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
