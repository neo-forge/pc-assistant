import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Settings from "../pages/Setting";
import Application from "../pages/Application";
import System from "../pages/System";
import Login from "../pages/Login";
import Error404 from "../pages/Error/404";
const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/application" element={<Application />} />
          <Route path="/system" element={<System />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
