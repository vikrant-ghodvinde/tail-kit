import {
  DarkThemeIcon,
  GithubIcon,
  LightThemeIcon,
  LinkedinIcon,
} from "@/icons";
import { setTheme } from "@/lib/redux/reducers/appReducer";
import { PATH, SOCIALPATH } from "@/lib/routes/path";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <header className="sticky top-0 left-0 w-full h-16 backdrop-blur bg-white/60 dark:bg-black/60 border-b border-b-black/5 dark:border-b-white/15 z-40">
      <div className="container">
        <nav className="flex items-center justify-between gap-5 py-3">
          <Link to={PATH.HOME} className="inline-flex items-center">
            <span className="inline-flex items-center gap-2">
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
              to={SOCIALPATH.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8"
            >
              <GithubIcon size={18} />
            </Link>
            <Link
              to={SOCIALPATH.LINKEDIN}
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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
