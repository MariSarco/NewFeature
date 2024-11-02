import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../components/App/App";
import HomePage from "../pages/HomePage/HomePage.tsx";
import { LazyProjectsPage } from "../pages/ProjectsPage/LazyProjectsPage.async.tsx";
import { LazyContactsPage } from "../pages/ContactsPage/LazyContactsPage.async.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/projects" element={<LazyProjectsPage />} />
      <Route path="/contacts" element={<LazyContactsPage />} />
    </Route>
  )
);