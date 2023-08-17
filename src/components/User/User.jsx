// Styles
import styles from "./User.module.css";

// Contexts
import { useAuthContext } from "../../contexts/auth_context";
import { useNavigate } from "react-router-dom";

function User() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
