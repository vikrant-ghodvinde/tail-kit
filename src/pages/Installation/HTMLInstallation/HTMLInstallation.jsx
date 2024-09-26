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
                    text={`npm install -D tailwindcss
                      npx tailwindcss init`}
                  >
                    <div className="relative w-full">
                      <div className="flex items-center">
                        <span className="mt-0.5 mr-2">
                          <ChevronRightIcon size={14} />
                        </span>
                        <span>{"npm install -D tailwindcss"}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mt-0.5 mr-2">
                          <ChevronRightIcon size={14} />
                        </span>
                        <span>{"npx tailwindcss init"}</span>
                      </div>
                    </div>
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
                  <InstallationItemDemo
                    title="tailwind.config.js"
                    text={`/** @type {import('tailwindcss').Config} */
                          module.exports = {
                            content: ["./**/*.{html,js}"],
                            theme: {
                              extend: {},
                            },
                            plugins: [],
                          }`}
                  >
                    <div className="relative w-full">
                      <div className="block">
                        <span className="block text-neutral-400">
                          {"/** @type {import('tailwindcss').Config} */"}
                        </span>
                        <span className="block">{"module.exports = {"}</span>
                        <span className="block">
                          {'content: ["./**/*.{html,js}"],'}
                        </span>
                        <span className="block">{"theme: {"}</span>
                      </div>
                      <div className="relative w-full ps-4">
                        <span className="block">{"extend: {},"}</span>
                        <span className="block">{"},"}</span>
                        <span className="block">{"plugins: [],"}</span>
                      </div>
                      <div className="relative w-full">
                        <span className="block">{"}"}</span>
                      </div>
                    </div>
                  </InstallationItemDemo>
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
                  <InstallationItemDemo
                    title="css/input.css"
                    text={`@tailwind base;
                          @tailwind components;
                          @tailwind utilities;`}
                  >
                    <div className="relative w-full">
                      <div className="block">
                        <span className="block">{"@tailwind base;"}</span>
                        <span className="block">{"@tailwind components;"}</span>
                        <span className="block">{"@tailwind utilities;"}</span>
                      </div>
                    </div>
                  </InstallationItemDemo>
                </InstallationItem>
                <InstallationItem>
                  <InstallationItemTitle>
                    Start the Tailwind CLI build process
                  </InstallationItemTitle>
                  <InstallationItemDescription>
                    Run the CLI tool to scan your template files for classes and
                    build your CSS.
                  </InstallationItemDescription>
                  <InstallationItemDemo
                    title="Terminal"
                    text={`npx tailwindcss -i ./css/input.css -o ./css/output.css --watch`}
                  >
                    <div className="relative w-full">
                      <div className="flex items-center">
                        <span className="mt-0.5 mr-2">
                          <ChevronRightIcon size={14} />
                        </span>
                        <span>
                          {
                            "npx tailwindcss -i ./css/input.css -o ./css/output.css --watch"
                          }
                        </span>
                      </div>
                    </div>
                  </InstallationItemDemo>
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
                  <InstallationItemDemo
                    title="index.html"
                    text={`<!doctype html>
                          <html>
                          <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link href="./output.css" rel="stylesheet">
                          </head>
                          <body>
                            <h1 class="text-3xl font-bold underline">
                              Hello world!
                            </h1>
                          </body>
                          </html>`}
                  >
                    <div className="relative w-full">
                      <div className="block">
                        <span className="block">{"<!doctype html>"}</span>
                        <span className="block">{"<html>"}</span>
                        <span className="block">{"<head>"}</span>
                      </div>
                      <div className="block ps-4">
                        <span className="block">
                          {'<meta charset="UTF-8" />'}
                        </span>
                        <span className="block">
                          {
                            '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
                          }
                        </span>
                        <span className="block">
                          {'<link href="./css/output.css" rel="stylesheet" />'}
                        </span>
                      </div>
                      <div className="block">
                        <span className="block">{"</head>"}</span>
                        <span className="block">{"<body>"}</span>
                      </div>
                      <div className="block ps-4">
                        <span className="block">
                          {'<h1 class="text-3xl font-bold underline">'}
                        </span>
                        <div className="block ps-4">
                          <span className="block">{"Hello world!"}</span>
                        </div>
                        <span className="block">{"</h1>"}</span>
                      </div>
                      <div className="block">
                        <span className="block">{"</body>"}</span>
                        <span className="block">{"</html>"}</span>
                      </div>
                    </div>
                  </InstallationItemDemo>
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
