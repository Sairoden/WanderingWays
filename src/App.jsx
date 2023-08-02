import { Routes, Route } from "react-router-dom";

// Pages
import { Product, Pricing, Homepage, NotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
