// React
import { Outlet } from "react-router-dom";

// Styles
import styles from "./Sidebar.module.css";

// Components
import Logo from "../Logo/Logo";
import AppNav from "../AppNav/AppNav";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}
