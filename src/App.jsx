import { useSelector } from "react-redux";
import { useEffect } from "react";
import Router from "./lib/routes/router";

function App() {
  // THEME MODE
  const darkMode = useSelector((state) => state.darkMode);
  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);
  return <Router />;
}

export default App;
