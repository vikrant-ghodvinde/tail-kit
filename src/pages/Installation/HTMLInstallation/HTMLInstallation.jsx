import AppBreadcrumb from "@/components/AppBreadcrumb/AppBreadcrumb";
import AppLayout from "@/components/AppLayout/AppLayout";
import {
  InstallationItem,
  InstallationItemDemo,
  InstallationItemDescription,
  InstallationItemTitle,
  InstallationList,
} from "@/components/InstallationProcess/InstallationProcess";
import { ChevronRightIcon } from "@/icons";

const HTMLInstallation = () => {
  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <AppBreadcrumb
            baseRoute="Docs"
            midRoute="Installation"
            currentRoute="HTML"
          />
          <div className="grid grid-cols-1 gap-y-10">
            <div className="relative">
              <h1 className="text-3xl font-bold tracking-tight mb-2">HTML</h1>
              <p>Installing and Configuring Tailwind CSS in an HTML Project</p>
            </div>
            <div className="relative">
              <InstallationList>
                <InstallationItem>
                  <InstallationItemTitle>
                    Install Tailwind CSS
                  </InstallationItemTitle>
                  <InstallationItemDescription>
                    Install <code className="underline">tailwindcss</code> via
                    npm, and create your{" "}
                    <code className="underline">tailwind.config.js</code> file.
                  </InstallationItemDescription>
                  <InstallationItemDemo
                    title="Terminal"
                    text={`To install Tailwind CSS, run the following commands:
                      npm install -D tailwindcss
                      npx tailwindcss init`}
                  >
                    <span className="flex items-center gap-1">
                      <ChevronRightIcon size={14} />{" "}
                      <code>npm install -D tailwindcss</code>
                    </span>
                    <span className="flex items-center gap-1">
                      <ChevronRightIcon size={14} />{" "}
                      <code>npx tailwindcss init</code>
                    </span>
                  </InstallationItemDemo>
                </InstallationItem>
                <InstallationItem>
                  <InstallationItemTitle>
                    Configure your template paths
                  </InstallationItemTitle>
                  <InstallationItemDescription>
                    Add the paths to all of your template files in your{" "}
                    <code className="underline">tailwind.config.js</code> file.
                  </InstallationItemDescription>
                </InstallationItem>
                <InstallationItem>
                  <InstallationItemTitle>
                    Add the Tailwind directives to your CSS
                  </InstallationItemTitle>
                  <InstallationItemDescription>
                    Add the <code className="underline">@tailwind</code>{" "}
                    directives for each of Tailwind’s layers to your main CSS
                    file.
                  </InstallationItemDescription>
                </InstallationItem>
                <InstallationItem>
                  <InstallationItemTitle>
                    Start the Tailwind CLI build process
                  </InstallationItemTitle>
                  <InstallationItemDescription>
                    Run the CLI tool to scan your template files for classes and
                    build your CSS.
                  </InstallationItemDescription>
                </InstallationItem>
                <InstallationItem>
                  <InstallationItemTitle>
                    Start using Tailwind in your HTML
                  </InstallationItemTitle>
                  <InstallationItemDescription>
                    Add your compiled CSS file to the{" "}
                    <code className="underline">{"<head>"}</code> and start
                    using Tailwind’s utility classes to style your content.
                  </InstallationItemDescription>
                </InstallationItem>
              </InstallationList>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default HTMLInstallation;
