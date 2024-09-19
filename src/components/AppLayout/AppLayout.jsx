/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const AppLayout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="relative w-full h-screen">
      <div
        className={`absolute left-0 top-0 w-64 h-screen bg-white dark:bg-black ${
          sidebar ? "max-lg:left-0" : "max-lg:-left-full"
        } z-50 transition-[left] duration-1000`}
      >
        <div
          className={`fixed top-0 left-0 block lg:hidden w-full h-full -z-[999] bg-black/50 ${
            sidebar ? "visible opacity-100" : "invisible opacity-0"
          } transition-[left] duration-1000`}
          onClick={() => setSidebar(false)}
        ></div>
        <div className="w-full bg-white dark:bg-black h-screen z-[999]">
          <Sidebar />
        </div>
      </div>
      <div className="absolute left-64 top-0 w-[calc(100%-256px)] h-full max-h-screen max-lg:left-0 max-lg:w-full overflow-y-auto transition-[left] duration-1000">
        <Header setSidebar={setSidebar} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
