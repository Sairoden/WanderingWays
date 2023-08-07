// React
import { Routes, Route, Navigate } from "react-router-dom";

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
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<CountryList />} />
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
