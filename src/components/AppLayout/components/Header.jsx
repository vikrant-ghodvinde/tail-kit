/* eslint-disable react/prop-types */
import {
  DarkThemeIcon,
  GithubIcon,
  LightThemeIcon,
  LinkedinIcon,
  MenuIcon,
} from "@/icons";
import { setTheme } from "@/lib/redux/reducers/appReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ setSidebar }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <header className="sticky top-0 left-0 w-full h-16 bg-white dark:bg-black border-b border-b-black/5 dark:border-b-white/15 z-[999]">
      <div className="container">
        <nav className="flex items-center justify-between gap-5 py-3">
          <Link to="/" className="inline-flex items-center">
            <span className="hidden max-lg:inline-flex items-center gap-2">
              <img
                src={`/assets/images/${
                  darkMode ? "logo-white.png" : "logo.png"
                }`}
                alt="logo"
                className="w-7 h-7"
              />
              <h3 className="text-base font-semibold">tail-kit</h3>
            </span>
          </Link>
          <div className="relative flex items-center gap-1">
            <Link
              to="https://github.com/vikrant-ghodvinde/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8"
            >
              <GithubIcon size={18} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/vikrant-ghodvinde-2224a1287/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8"
            >
              <LinkedinIcon size={18} />
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center w-8 h-8"
              onClick={() => dispatch(setTheme())}
            >
              {darkMode ? (
                <LightThemeIcon size={18} />
              ) : (
                <DarkThemeIcon size={18} />
              )}
            </button>
            <button
              type="button"
              className="hidden max-lg:inline-flex items-center justify-center w-8 h-8"
              onClick={() => setSidebar(true)}
            >
              <MenuIcon size={20} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
