// React
import { useSearchParams } from "react-router-dom";

// Styles
import styles from "./Map.module.css";

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  console.log(lat, lng);

  return (
    <div className={styles.mapContainer}>
      <h1>{lat}</h1>
      <h1>{lng}</h1>
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        Change position
      </button>
    </div>
  );
}
