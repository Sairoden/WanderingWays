// React
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Pages
import {
  Product,
  Pricing,
  Homepage,
  NotFound,
  AppLayout,
  Login,
} from "./pages";

// Components
import { CityList } from "./components";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = `http://localhost:8000`;

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        setCities(data);
      } catch (err) {
        alert("There was an error loading data...");
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, [BASE_URL]);

  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={<h1>COUNTRIES COMPONENT</h1>} />
          <Route path="form" element={<h1>FORM COMPONENT</h1>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

// 8 ka na
