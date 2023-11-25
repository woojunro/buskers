import ProfileContainer from "../../components/profile/ProfileContainer";
import styles from "./Profile.module.css";
import NavBar from "../../components/navbar/NavBar";

const Profile = () => {
  return (
    <div className={styles.profile}>
    <NavBar/>
      <ProfileContainer buttonText="Profile" />
    </div>
  );
};

export default Profile;
