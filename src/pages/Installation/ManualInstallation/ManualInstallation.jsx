/* eslint-disable react/no-unescaped-entities */
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
import { Link } from "react-router-dom";

const ManualInstallation = () => {
  return (
    <AppLayout>
      <section className="section">
        <div className="container">
          <AppBreadcrumb
            baseRoute="Docs"
            midRoute="Installation"
            currentRoute="Next.js"
          />
          <div className="grid grid-cols-1 gap-y-10">
            <div className="relative">
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                Manual Installation
              </h1>
              <p>
                Installing and Configuring Tailwind CSS in an{" "}
                <code>create-react-app</code> Project
              </p>
            </div>
            <div className="relative">
              <InstallationList>
                <InstallationItem>
                  <InstallationItemTitle>
                    Create your project
                  </InstallationItemTitle>
                  <InstallationItemDescription>
                    Start by creating a new React project with{" "}
                    <Link
                      to="https://create-react-app.dev/docs/getting-started/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Create React App v5.0+
                    </Link>
                    if you don't have one already set up.
                  </InstallationItemDescription>
                  <InstallationItemDemo
                    title="Terminal"
                    text={`npx create-react-app my-project
                          cd my-project`}
                  >
                    <div className="relative w-full">
                      <div className="flex items-center">
                        <span className="mt-0.5 mr-2">
                          <ChevronRightIcon size={14} />
                        </span>
                        <span>{"npx create-react-app my-project"}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mt-0.5 mr-2">
                          <ChevronRightIcon size={14} />
                        </span>
                        <span>{"cd my-project"}</span>
                      </div>
                    </div>
                  </InstallationItemDemo>
                </InstallationItem>
                <InstallationItem>
                  <InstallationItemTitle>
                    Install Tailwind CSS
                  </InstallationItemTitle>
                  <InstallationItemDescription>
                    Install <code className="underline">tailwindcss</code> via
                    npm, and then run the init command to generate your{" "}
                    <code className="underline">tailwind.config.js</code>.
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
                            content: [
                              "./src/**/*.{js,jsx,ts,tsx}",
                            ],
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
                        <span className="block">{"content: ["}</span>
                        <div className="relative w-full ps-4">
                          <span className="block">
                            {'"./src/**/*.{js,jsx,ts,tsx},'}
                          </span>
                        </div>
                        <span className="block">{"]"}</span>
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
                    directives for each of Tailwind’s layers to your{" "}
                    <code className="underline">./src/index.css</code> file.
                  </InstallationItemDescription>
                  <InstallationItemDemo
                    title="index.css"
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
                    Start your build process
                  </InstallationItemTitle>
                  <InstallationItemDescription>
                    Run your build process with{" "}
                    <code className="underline">npm run dev</code>
                  </InstallationItemDescription>
                  <InstallationItemDemo title="Terminal" text={`npm run start`}>
                    <div className="relative w-full">
                      <div className="flex items-center">
                        <span className="mt-0.5 mr-2">
                          <ChevronRightIcon size={14} />
                        </span>
                        <span>{"npm run start"}</span>
                      </div>
                    </div>
                  </InstallationItemDemo>
                </InstallationItem>
                <InstallationItem>
                  <InstallationItemTitle>
                    Start using Tailwind in your project
                  </InstallationItemTitle>
                  <InstallationItemDescription>
                    Start using Tailwind’s utility classes to style your
                    content.
                  </InstallationItemDescription>
                  <InstallationItemDemo
                    title="App.js"
                    text={`export default function App() {
                          return (
                            <h1 className="text-3xl font-bold underline">
                              Hello world!
                            </h1>
                          )
                        }`}
                  >
                    <div className="relative w-full">
                      <div className="block">
                        <span className="block">
                          {"export default function App() {"}
                        </span>
                      </div>
                      <div className="block ps-4">
                        <span className="block">{"return ("}</span>
                        <div className="block ps-4">
                          <span className="block">
                            {'<h1 className="text-3xl font-bold underline">'}
                          </span>
                          <div className="block ps-4">
                            <span className="block">{"Hello world!"}</span>
                          </div>
                          <span className="block">{"</h1>"}</span>
                        </div>
                        <span className="block">{")"}</span>
                      </div>
                      <div className="block">
                        <span className="block">{"}"}</span>
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

export default ManualInstallation;
