/* eslint-disable react/prop-types */

import { ChevronRightIcon } from "@/icons";
import React from "react";

const AppBreadcrumb = ({ baseRoute, midRoute, currentRoute }) => {
  return (
    <ul className="flex items-center gap-1 mb-5">
      <li className="text-sm text-black/70 dark:text-white/50">{baseRoute}</li>
      <li className="text-black/70 dark:text-white/50">
        <ChevronRightIcon size={12} />
      </li>
      {midRoute && (
        <React.Fragment>
          <li className="text-sm text-black/70 dark:text-white/50">
            {midRoute}
          </li>
          <li className="text-black/70 dark:text-white/50">
            <ChevronRightIcon size={12} />
          </li>
        </React.Fragment>
      )}
      <li className="text-sm text-black/90 dark:text-white/80">
        {currentRoute}
      </li>
    </ul>
  );
};

export default AppBreadcrumb;
