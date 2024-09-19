/* eslint-disable react/no-unescaped-entities */
import AppBreadcrumb from "@/components/AppBreadcrumb/AppBreadcrumb";
import AppLayout from "@/components/AppLayout/AppLayout";

const Introduction = () => {
  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <AppBreadcrumb baseRoute="Docs" currentRoute="Introduction" />

          <div className="grid grid-cols-1 gap-y-10">
            <div className="relative">
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                Introduction
              </h1>
              <p>
                Craft stunning components ready to copy and paste directly into
                your applications. Fully accessible, highly customizable, and
                completely open-source—designed to elevate your projects
                effortlessly.
              </p>
            </div>
            <div className="relative">
              <p>
                Absolutely{" "}
                <span className="text-black dark:text-white font-bold">
                  Free
                </span>{" "}
                to use for both personal and commercial projects, with no
                strings attached—no attribution or licensing worries.
                <span className="text-black dark:text-white font-bold">
                  Effortlessly
                </span>{" "}
                integrate these components into your applications and make them
                your own. Whether you're building for yourself or for clients,
                you have complete freedom to customize and deploy without
                limitations or obligations.
              </p>
            </div>
            <div className="relative">
              <p>
                This isn't just a component library—it's a curated collection of
                reusable components, ready for you to copy and paste directly
                into your apps. Simple, flexible, and designed for seamless
                integration.
              </p>
            </div>
            <div className="relative">
              <h6 className="font-bold mb-2">
                What do you mean by not a component library?
              </h6>
              <p>
                I mean{" "}
                <span className="text-black dark:text-white font-bold">No</span>{" "}
                need for installations or dependencies. Simply pick the
                components you need, copy and paste the code directly into your
                project, and customize it to fit your requirements. The code is
                yours to own and modify as you see fit
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Introduction;
