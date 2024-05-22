import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginContainer from "../containers/auth/LoginContainer";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;