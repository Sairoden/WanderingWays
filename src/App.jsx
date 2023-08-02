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
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/app" element={<AppLayout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

// 8 ka na
