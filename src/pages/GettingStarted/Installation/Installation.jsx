import AppBreadcrumb from "@/components/AppBreadcrumb/AppBreadcrumb";
import AppLayout from "@/components/AppLayout/AppLayout";
import {
  Html5Icon,
  LaravelIcon,
  NextJsIcon,
  ReactJsIcon,
  ViteIcon,
} from "@/icons";
import FrameworkCard from "./components/FrameworkCard";
import { PATH } from "@/lib/routes/path";

const Installation = () => {
  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <AppBreadcrumb baseRoute="Docs" currentRoute="Installation" />
          <div className="grid grid-cols-1 gap-y-10">
            <div className="relative">
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                Installation
              </h1>
              <p>How to install Tailwind CSS in your project.</p>
            </div>
            <div className="relative">
              <div className="relative w-full pb-2 mb-5 border-b border-black/10 dark:border-white/20">
                <h2 className="text-2xl font-semibold">Frameworks</h2>
              </div>
              <div className="grid grid-cols-12 gap-y-5 sm:gap-5">
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <FrameworkCard
                    link={`${PATH.INSTALLATION.PARENT}/${PATH.INSTALLATION.CHILDREN.HTML}`}
                    name="HTML"
                    icon={<Html5Icon size={45} />}
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <FrameworkCard
                    link={`${PATH.INSTALLATION.PARENT}/${PATH.INSTALLATION.CHILDREN.NEXT}`}
                    name="Next.js"
                    icon={<NextJsIcon size={45} />}
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <FrameworkCard
                    link={`${PATH.INSTALLATION.PARENT}/${PATH.INSTALLATION.CHILDREN.VITE}`}
                    name="Vite"
                    icon={<ViteIcon size={45} />}
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <FrameworkCard
                    link={`${PATH.INSTALLATION.PARENT}/${PATH.INSTALLATION.CHILDREN.MANUAL}`}
                    name="Manual"
                    icon={<ReactJsIcon size={45} />}
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <FrameworkCard
                    link={`${PATH.INSTALLATION.PARENT}/${PATH.INSTALLATION.CHILDREN.LARAVEL}`}
                    name="Laravel"
                    icon={<LaravelIcon size={45} />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Installation;
