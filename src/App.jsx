import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import Router from "./lib/routes/router";
import { Toaster } from "./ui/components/ui/sonner";

function App() {
  // THEME MODE
  const darkMode = useSelector((state) => state.darkMode);
  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);
  return (
    <React.Fragment>
      <Toaster />
      <Router />
    </React.Fragment>
  );
}

export default App;
