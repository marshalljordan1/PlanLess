import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import NewClass from "../pages/NewClass";
import NewPlan from "../pages/NewPlan";
import WelcomePage from "../pages/WelcomePage";

const Router = () => (
  <Routes>
    <Route index element={<WelcomePage />} />
    <Route path="log-in" element={<LoginPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route path="/new-class" element={<NewClass />} />
    <Route path="/plan-class" element={<NewPlan />} />
  </Routes>
);

export default Router;
