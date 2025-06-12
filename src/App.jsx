import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/auth/SignInPage";
import TripsPage from "./pages/TripsPage";
import SignInPage from "./pages/auth/SignInPage";
import SignupPage from "./pages/auth/SignUpPage";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/Privacy";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/trips" element={<TripsPage />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
