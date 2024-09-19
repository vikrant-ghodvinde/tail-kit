import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-16 flex items-center border-b border-b-black/5 dark:border-b-white/15">
        <div className="container">
          <Link to="/" className="inline-flex items-center gap-2">
            <img
              src={`/assets/images/${darkMode ? "logo-white.png" : "logo.png"}`}
              alt="logo"
              className="w-7 h-7"
            />
            <h3 className="text-base font-semibold">tail-kit</h3>
          </Link>
        </div>
      </div>
      <div className="relative w-full h-[calc(100%-64px)] overflow-y-auto scrollbar-y">
        <div className="grid grid-cols-1 gap-y-5 p-10">
          <div className="relative menu-wrapper">
            <h6 className="menu-title">Getting Started</h6>
            <ul className="relative">
              <li className="menu-item">
                <Link to="" className="menu-link active">
                  Introduction
                </Link>
              </li>
              <li className="menu-item">
                <Link to="" className="menu-link">
                  Installation
                </Link>
              </li>
              <li className="menu-item">
                <Link to="" className="menu-link">
                  Typography
                </Link>
              </li>
              <li className="menu-item">
                <Link to="" className="menu-link">
                  Colors
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative menu-wrapper">
            <h6 className="text-sm font-semibold mb-2">Installation</h6>
            <ul>
              <li className="menu-item">
                <Link to="" className="menu-link">
                  Next.js
                </Link>
              </li>
              <li className="menu-item">
                <Link to="" className="menu-link">
                  Vite
                </Link>
              </li>
              <li className="menu-item">
                <Link to="" className="menu-link">
                  HTML
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative menu-wrapper">
            <h6 className="text-sm font-semibold mb-2">Components</h6>
            <ul>
              <li className="menu-item">
                <Link to="" className="menu-link">
                  Alert
                </Link>
              </li>
              <li className="menu-item">
                <Link to="" className="menu-link">
                  Avatar
                </Link>
              </li>
              <li className="menu-item">
                <Link to="" className="menu-link">
                  Badge
                </Link>
              </li>
              <li className="menu-item">
                <Link to="" className="menu-link">
                  Breadcrumb
                </Link>
              </li>
              <li className="menu-item">
                <Link to="" className="menu-link">
                  Button
                </Link>
              </li>
              <li className="menu-item">
                <Link to="" className="menu-link">
                  Card
                </Link>
              </li>
              <li className="menu-item">
                <Link to="" className="menu-link">
                  Checkbox
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
