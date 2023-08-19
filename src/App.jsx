// React
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import {
  CityList,
  CountryList,
  City,
  Form,
  SpinnerFullPage,
} from "./components";

// Pages
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Product = lazy(() => import("./pages/Product/Product"));
const Pricing = lazy(() => import("./pages/Product/Pricing"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout/AppLayout"));
const Login = lazy(() => import("./pages/Login/Login"));
const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute"));

// dist/assets/index-cae33dfa.js   524.51 kB │ gzip: 148.89 kB
// dist/assets/index-136a92c4.js           365.79 kB │ gzip: 102.28 kB

function App() {
  return (
    <>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

// 19  ka na
