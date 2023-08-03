import { Routes, Route } from "react-router-dom";

// Pages
import {
  Product,
  Pricing,
  Homepage,
  NotFound,
  AppLayout,
  Login,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<h1>INDEX ELEMENT</h1>} />
          <Route path="cities" element={<h1>CITIES COMPONENT</h1>} />
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
