import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./layouts/AppLayout";
import ProductsPreview from "./pages/ProductsPreview";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import ForgetPassword from "./pages/ForgetPassword";
import EmailVerification from "./pages/EmailVerification";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPreview />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/forget-password" element={<ForgetPassword/>} />
          <Route path="/email-verification" element={<EmailVerification/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
