// React
import { Link } from "react-router-dom";

// Styles
import styles from "./Logo.module.css";
import LogoImage from "../../assets/logo.png";

function Logo() {
  return (
    <Link to="/">
      <img src={LogoImage} alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
