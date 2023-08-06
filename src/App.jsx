// React
import { Routes, Route, Navigate } from "react-router-dom";
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
import { CityList, CountryList, City, Form } from "./components";

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
          <Route index element={<Navigate replace to="cities" />} />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

// 17 ka na
