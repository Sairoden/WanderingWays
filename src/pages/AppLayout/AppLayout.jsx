// Styles
import styles from "./AppLayout.module.css";

// Components
import { Sidebar, Map, User } from "../../components";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
