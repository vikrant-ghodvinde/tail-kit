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
                    <span className="flex items-center gap-1">
                      <ChevronRightIcon size={14} />{" "}
                      <code>{"npm install -D tailwindcss"}</code>
                    </span>
                    <span className="flex items-center gap-1">
                      <ChevronRightIcon size={14} />{" "}
                      <code>{"npx tailwindcss init"}</code>
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
                  <InstallationItemDemo
                    title="tailwind.config.js"
                    text={`/** @type {import('tailwindcss').Config} */
                          module.exports = {
                            content: ["./src/**/*.{html,js}"],
                            theme: {
                              extend: {},
                            },
                            plugins: [],
                          }`}
                  >
                    <span className="block text-neutral-400">
                      <code>
                        {"/** @type {import('tailwindcss').Config} */"}
                      </code>
                    </span>
                    <span className="block">
                      <code>{"module.exports = {"}</code>
                    </span>
                    <span className="block">
                      <code>{'content: ["./src/**/*.{html,js}"],'}</code>
                    </span>
                    <span className="block">
                      <code>{"theme: {"}</code>
                    </span>
                    <div className="ms-4">
                      <span className="block">
                        <code>{"extend: {},"}</code>
                      </span>
                      <span className="block">
                        <code>{"},"}</code>
                      </span>
                      <span className="block">
                        <code>{"plugins: [],"}</code>
                      </span>
                    </div>
                    <span className="block">
                      <code>{"}"}</code>
                    </span>
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
                    <span className="block">
                      <code>{"@tailwind base;"}</code>
                    </span>
                    <span className="block">
                      <code>{"@tailwind components;"}</code>
                    </span>
                    <span className="block">
                      <code>{"@tailwind utilities;"}</code>
                    </span>
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
                    <span className="flex items-center gap-1">
                      <ChevronRightIcon size={14} />{" "}
                      <code>
                        {
                          "npx tailwindcss -i ./css/input.css -o ./css/output.css --watch"
                        }
                      </code>
                    </span>
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
                    <span className="block">
                      <code>{"<!doctype html>"}</code>
                    </span>
                    <span className="block">
                      <code>{"<html>"}</code>
                    </span>
                    <span className="block">
                      <code>{"<head>"}</code>
                    </span>
                    <div className="ms-4">
                      <span className="block">
                        <code>{'<meta charset="UTF-8" />'}</code>
                      </span>
                      <span className="block">
                        <code>
                          {
                            '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
                          }
                        </code>
                      </span>
                      <span className="block">
                        <code>
                          {'<link href="./css/output.css" rel="stylesheet" />'}
                        </code>
                      </span>
                    </div>
                    <span className="block">
                      <code>{"</head>"}</code>
                    </span>
                    <span className="block">
                      <code>{"<body>"}</code>
                    </span>
                    <div className="ms-4">
                      <span className="block">
                        <code>
                          {'<h1 class="text-3xl font-bold underline">s'}
                        </code>
                      </span>
                      <span className="block ms-4">
                        <code>{"Hello world!"}</code>
                      </span>
                      <span className="block">
                        <code>{"</h1>"}</code>
                      </span>
                    </div>
                    <span className="block">
                      <code>{"</body>"}</code>
                    </span>
                    <span className="block">
                      <code>{"</html>"}</code>
                    </span>
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
