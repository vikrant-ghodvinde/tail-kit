/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FrameworkCard = ({ link, icon, name }) => {
  return (
    <Link
      to={link}
      className="relative w-full h-full p-8 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow dark:shadow-white/30 rounded-lg border border-black/10 dark:border-white/20 transition duration-200"
    >
      {icon}
      <span className="text-sm font-semibold">{name}</span>
    </Link>
  );
};

export default FrameworkCard;
