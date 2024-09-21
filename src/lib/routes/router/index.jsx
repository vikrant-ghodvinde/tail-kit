import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from "../path";
import Home from "@/pages/Home/Home";
import Components from "@/pages/Components/Components";
import Button from "@/pages/Components/elements/Button/Button";
import Badge from "@/pages/Components/elements/Badge/Badge";
import Avatar from "@/pages/Components/elements/Avatar/Avatar";
import Introduction from "@/pages/Docs/Introduction/Introduction";
import Colors from "@/pages/Docs/Colors/Colors";
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
        
        <Route path={PATH.DOCS}>
          <Route
            path={PATH.INTRODUCTION}
            element={
              <Suspense fallback={"...Loading"}>
                <Introduction />
              </Suspense>
            }
          />
          <Route
            path={PATH.COLORS}
            element={
              <Suspense fallback={"...Loading"}>
                <Colors />
              </Suspense>
            }
          />
        </Route>

        <Route path="">
          <Route
            path=""
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
