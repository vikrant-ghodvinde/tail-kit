/* eslint-disable react/prop-types */
const InstallationList = ({ children }) => {
  return (
    <div className="relative w-full h-full">
      <ul className="relative w-full h-full flex flex-col before:absolute before:left-[11px] md:before:left-[13px] before:top-1/2 before:-translate-y-1/2 before:w-[0.5px] before:h-full before:bg-neutral-200 dark:before:bg-neutral-800 before:-z-10">
        {children}
      </ul>
    </div>
  );
};

const InstallationItem = ({ children }) => {
  return (
    <li
      data-count="1"
      className="relative [counter-increment:step] w-full h-full pl-10 md:pl-12 mb-12 last:mb-0 before:content-[counter(step)] before:absolute before:left-0 before:top-0 before:w-6 md:before:w-7 before:h-6 md:before:h-7 before:rounded-full before:bg-neutral-100 dark:before:bg-neutral-900 before:inline-flex before:items-center before:justify-center before:text-sm before:font-medium before:z-10"
    >
      {children}
    </li>
  );
};

const InstallationItemTitle = ({ children }) => {
  return <h3 className="font-medium mb-5">{children}</h3>;
};

const InstallationItemDescription = ({ children }) => {
  return <p className="text-sm">{children}</p>;
};

export {
  InstallationList,
  InstallationItem,
  InstallationItemTitle,
  InstallationItemDescription,
};
