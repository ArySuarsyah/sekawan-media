import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;