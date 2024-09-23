import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import menus from "@/lib/routes/menus/menus.json";
import { PATH } from "@/lib/routes/path";

const Sidebar = () => {
  const location = useLocation();
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-16 flex items-center border-b border-b-black/5 dark:border-b-white/15">
        <div className="container">
          <Link to={PATH.HOME} className="inline-flex items-center gap-2">
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
          {menus?.map((menuItem, index) => (
            <div className="relative menu-wrapper" key={index}>
              <h6 className="menu-title">{menuItem.menuTitle}</h6>
              <ul className="relative">
                {menuItem?.menu.map((item, index) => (
                  <li className="menu-item" key={index}>
                    <Link
                      to={item?.path}
                      className={`menu-link ${
                        location.pathname === item?.path ? "active" : ""
                      }`}
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
