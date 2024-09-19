/* eslint-disable react/prop-types */

import { ChevronRightIcon } from "@/icons";

const AppBreadcrumb = ({ baseRoute, currentRoute }) => {
  return (
    <ul className="flex items-center gap-1 mb-5">
      <li className="text-sm text-black/70 dark:text-white/50">{baseRoute}</li>
      <li className="text-black/70 dark:text-white/50">
        <ChevronRightIcon size={12} />
      </li>
      <li className="text-sm text-black/90 dark:text-white/80">
        {currentRoute}
      </li>
    </ul>
  );
};

export default AppBreadcrumb;
