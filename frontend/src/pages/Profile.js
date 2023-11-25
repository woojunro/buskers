import ProfileContainer from "../components/ProfileContainer";
import styles from "./Profile.module.css";
import NavBar from "../components/NavBar";

const Profile = () => {
  return (
    <div className={styles.profile}>
    <NavBar/>
      <ProfileContainer buttonText="Profile" />
    </div>
  );
};

export default Profile;
