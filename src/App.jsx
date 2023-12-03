import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./layouts/AppLayout";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/forgot-password" element={<ForgetPassword/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
