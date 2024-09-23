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
            path={PATH.DOCS.CHILDREN.COLORS}
            element={
              <Suspense fallback={"...Loading"}>
                <Colors />
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
