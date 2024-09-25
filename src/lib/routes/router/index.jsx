import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "../path";
import Home from "@/pages/Home/Home";
// import Components from "@/pages/Components/Components";
import Button from "@/pages/Components/elements/Button/Button";
import Badge from "@/pages/Components/elements/Badge/Badge";
import Avatar from "@/pages/Components/elements/Avatar/Avatar";
import Introduction from "@/pages/GettingStarted/Introduction/Introduction";
import Colors from "@/pages/GettingStarted/Colors/Colors";
import Alert from "@/pages/Components/elements/Alert/Alert";
import Installation from "@/pages/GettingStarted/Installation/Installation";
import HTMLInstallation from "@/pages/Installation/HTMLInstallation/HTMLInstallation";
import NextInstallation from "@/pages/Installation/NextInstallation/NextInstallation";
import ViteInstallation from "@/pages/Installation/ViteInstallation/ViteInstallation";
import ManualInstallation from "@/pages/Installation/ManualInstallation/ManualInstallation";
import LaravelInstallation from "@/pages/Installation/LaravelInstallation/LaravelInstallation";
import NuxtInstallation from "@/pages/Installation/NuxtInstallation/NuxtInstallation";
import GatsbyInstallation from "@/pages/Installation/GatsbyInstallation/GatsbyInstallation";
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
          <Route
            path={PATH.INSTALLATION.CHILDREN.NUXT}
            element={
              <Suspense fallback={"...Loading"}>
                <NuxtInstallation />
              </Suspense>
            }
          />
          <Route
            path={PATH.INSTALLATION.CHILDREN.GATSBY}
            element={
              <Suspense fallback={"...Loading"}>
                <GatsbyInstallation />
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
            path=""
            element={
              <Suspense fallback={"...Loading"}>
                <Badge />
              </Suspense>
            }
          />
          <Route
            path=""
            element={
              <Suspense fallback={"...Loading"}>
                <Button />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
