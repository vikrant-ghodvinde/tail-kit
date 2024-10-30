import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "../path";
import Home from "@/pages/Home/Home";
import Introduction from "@/pages/GettingStarted/Introduction/Introduction";
import Colors from "@/pages/GettingStarted/Colors/Colors";
import Installation from "@/pages/GettingStarted/Installation/Installation";
import HTMLInstallation from "@/pages/Installation/HTMLInstallation/HTMLInstallation";
import NextInstallation from "@/pages/Installation/NextInstallation/NextInstallation";
import ViteInstallation from "@/pages/Installation/ViteInstallation/ViteInstallation";
import ManualInstallation from "@/pages/Installation/ManualInstallation/ManualInstallation";
import LaravelInstallation from "@/pages/Installation/LaravelInstallation/LaravelInstallation";
import Alert from "@/pages/Components/Alert/Alert";
import Avatar from "@/pages/Components/Avatar/Avatar";
import Badge from "@/pages/Components/Badge/Badge";
import Button from "@/pages/Components/Button/Button";
import Typography from "@/pages/GettingStarted/Typography/Typography";
import Breadcrumb from "@/pages/Components/Breadcrumb/Breadcrumb";
import Card from "@/pages/Components/Card/Card";
import Checkbox from "@/pages/Components/Checkbox/Checkbox";
import Input from "@/pages/Components/Input/Input";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PATH.HOME}
          element={
            <Suspense fallback={"...Loading"}>
              <Home />
            </Suspense>
          }
        />

        {/* GETTING STARTED ROUTES */}
        <Route path={PATH.DOCS.PARENT}>
          <Route
            path={PATH.DOCS.CHILDREN.INTRODUCTION}
            element={
              <Suspense fallback={"...Loading"}>
                <Introduction />
              </Suspense>
            }
          />
          <Route
            path={PATH.DOCS.CHILDREN.INSTALLATION}
            element={
              <Suspense fallback={"...Loading"}>
                <Installation />
              </Suspense>
            }
          />
          <Route
            path={PATH.DOCS.CHILDREN.TYPOGRAPHY}
            element={
              <Suspense fallback={"...Loading"}>
                <Typography />
              </Suspense>
            }
          />
          <Route
            path={PATH.DOCS.CHILDREN.COLORS}
            element={
              <Suspense fallback={"...Loading"}>
                <Colors />
              </Suspense>
            }
          />
        </Route>

        {/* COMPONENTS ROUTES */}
        <Route path={PATH.INSTALLATION.PARENT}>
          <Route
            path={PATH.INSTALLATION.CHILDREN.HTML}
            element={
              <Suspense fallback={"...Loading"}>
                <HTMLInstallation />
              </Suspense>
            }
          />
          <Route
            path={PATH.INSTALLATION.CHILDREN.NEXT}
            element={
              <Suspense fallback={"...Loading"}>
                <NextInstallation />
              </Suspense>
            }
          />
          <Route
            path={PATH.INSTALLATION.CHILDREN.VITE}
            element={
              <Suspense fallback={"...Loading"}>
                <ViteInstallation />
              </Suspense>
            }
          />
          <Route
            path={PATH.INSTALLATION.CHILDREN.MANUAL}
            element={
              <Suspense fallback={"...Loading"}>
                <ManualInstallation />
              </Suspense>
            }
          />
          <Route
            path={PATH.INSTALLATION.CHILDREN.LARAVEL}
            element={
              <Suspense fallback={"...Loading"}>
                <LaravelInstallation />
              </Suspense>
            }
          />
        </Route>

        {/* COMPONENTS ROUTES */}
        <Route path={PATH.COMPONENTS.PARENT}>
          <Route
            path={PATH.COMPONENTS.CHILDREN.ALERT}
            element={
              <Suspense fallback={"...Loading"}>
                <Alert />
              </Suspense>
            }
          />
          <Route
            path={PATH.COMPONENTS.CHILDREN.AVATAR}
            element={
              <Suspense fallback={"...Loading"}>
                <Avatar />
              </Suspense>
            }
          />
          <Route
            path={PATH.COMPONENTS.CHILDREN.BADGE}
            element={
              <Suspense fallback={"...Loading"}>
                <Badge />
              </Suspense>
            }
          />
          <Route
            path={PATH.COMPONENTS.CHILDREN.BREADCRUMB}
            element={
              <Suspense fallback={"...Loading"}>
                <Breadcrumb />
              </Suspense>
            }
          />
          <Route
            path={PATH.COMPONENTS.CHILDREN.BUTTON}
            element={
              <Suspense fallback={"...Loading"}>
                <Button />
              </Suspense>
            }
          />
          <Route
            path={PATH.COMPONENTS.CHILDREN.CARD}
            element={
              <Suspense fallback={"...Loading"}>
                <Card />
              </Suspense>
            }
          />
          <Route
            path={PATH.COMPONENTS.CHILDREN.CHECKBOX}
            element={
              <Suspense fallback={"...Loading"}>
                <Checkbox />
              </Suspense>
            }
          />
          <Route
            path={PATH.COMPONENTS.CHILDREN.INPUT}
            element={
              <Suspense fallback={"...Loading"}>
                <Input />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
