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

const LaravelInstallation = () => {
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
                Laravel
              </h1>
              <p>
                Installing and Configuring Tailwind CSS in an Laravel Project
              </p>
            </div>
            <div className="relative">
              <InstallationList>
                <InstallationItem>
                  <InstallationItemTitle>
                    Install Tailwind CSS
                  </InstallationItemTitle>
                  <InstallationItemDescription>
                    Install <code className="underline">tailwindcss</code> and
                    its peer dependencies via npm, and create your{" "}
                    <code className="underline">tailwind.config.js</code>.
                  </InstallationItemDescription>
                  <InstallationItemDemo
                    title="Terminal"
                    text={`npm install -D tailwindcss postcss autoprefixer
                          npx tailwindcss init`}
                  >
                    <div className="relative w-full">
                      <div className="flex items-center">
                        <span className="mt-0.5 mr-2">
                          <ChevronRightIcon size={14} />
                        </span>
                        <span>
                          {"npm install -D tailwindcss postcss autoprefixer"}
                        </span>
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
                    Add Tailwind to your Laravel Mix configuration
                  </InstallationItemTitle>
                  <InstallationItemDescription>
                    In your <code className="underline">webpack.mix.js</code>{" "}
                    file, add <code className="underline">tailwindcss</code> as
                    a PostCSS plugin.
                  </InstallationItemDescription>
                  <InstallationItemDemo
                    title="webpack.mix.js"
                    text={`mix.js("resources/js/app.js", "public/js")
                          .postCss("resources/css/app.css", "public/css", [
                            require("tailwindcss"),
                          ]);`}
                  >
                    <div className="relative w-full">
                      <div className="block">
                        <span className="block">
                          {'mix.js("resources/js/app.js", "public/js")'}
                        </span>
                        <div className="relative w-full ps-4">
                          <span className="block">
                            {
                              '.postCss("resources/css/app.css", "public/css", ['
                            }
                          </span>
                          <span className="block">
                            {'require("tailwindcss"),'}
                          </span>
                        </div>
                        <span className="block">{"]);"}</span>
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
                          export default {
                            content: [
                              "./resources/**/*.blade.php",
                              "./resources/**/*.js",
                              "./resources/**/*.vue",
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
                            {'"./resources/**/*.blade.php",'}
                          </span>
                          <span className="block">
                            {'"./resources/**/*.js",'}
                          </span>
                          <span className="block">
                            {'"./resources/**/*.vue",'}
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
                    <code className="underline">./resources/css/app.css</code>{" "}
                    file.
                  </InstallationItemDescription>
                  <InstallationItemDemo
                    title="app.css"
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
                    <code className="underline">npm run watch</code>
                  </InstallationItemDescription>
                  <InstallationItemDemo title="Terminal" text={`npm run watch`}>
                    <div className="relative w-full">
                      <div className="flex items-center">
                        <span className="mt-0.5 mr-2">
                          <ChevronRightIcon size={14} />
                        </span>
                        <span>{"npm run watch"}</span>
                      </div>
                    </div>
                  </InstallationItemDemo>
                </InstallationItem>
                <InstallationItem>
                  <InstallationItemTitle>
                    Start using Tailwind in your project
                  </InstallationItemTitle>
                  <InstallationItemDescription>
                    Make sure your compiled CSS is included in the{" "}
                    <code>{"<head>"}</code> then start using Tailwind’s utility
                    classes to style your content.
                  </InstallationItemDescription>
                  <InstallationItemDemo
                    title="app.blade.php"
                    text={`<!doctype html>
                          <html>
                          <head>
                            <meta charset="utf-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link href="{{ asset('css/app.css') }}" rel="stylesheet">
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
                          {`<link href="{{ asset('css/app.css') }}" rel="stylesheet">`}
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

export default LaravelInstallation;
