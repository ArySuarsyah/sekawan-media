import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginContainer from "../containers/auth/LoginContainer";
import DashboardContainer from "../containers/dashboard/DashboardContainer";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardContainer />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;