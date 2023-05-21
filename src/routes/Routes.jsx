import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import NewClass from "../pages/NewClass";
import NewPlan from "../pages/NewPlan";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/new-class" element={<NewClass />} />
      <Route path="/plan-class" element={<NewPlan />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
