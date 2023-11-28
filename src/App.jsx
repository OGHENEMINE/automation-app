import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./layouts/AppLayout";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
