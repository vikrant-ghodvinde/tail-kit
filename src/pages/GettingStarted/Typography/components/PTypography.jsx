import {
  CodeBox,
  CodePreview,
  PreviewBox,
} from "@/components/CodePreview/CodePreview";

const PTypography = () => {
  return (
    <div className="relative">
      <div className="relative w-full pb-2 border-b border-b-black/5 dark:border-b-white/15">
        <h3 className="text-xl font-semibold">p</h3>
      </div>
      <CodePreview
        preview={
          <PreviewBox>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-black dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              deleniti eligendi harum quidem ut praesentium.
            </p>
          </PreviewBox>
        }
        code={
          <CodeBox
            code={`export default function App() {
                        return (
                          <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, deleniti eligendi harum quidem ut praesentium.
                          </p>
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
                    {'<p className="leading-7 [&:not(:first-child)]:mt-6">'}
                  </span>
                  <div className="block ps-4">
                    <span className="block">
                      {
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, deleniti eligendi harum quidem ut praesentium."
                      }
                    </span>
                  </div>
                  <span className="block">{"</p>"}</span>
                </div>
                <span className="block">{")"}</span>
              </div>
              <div className="block">
                <span className="block">{"}"}</span>
              </div>
            </div>
          </CodeBox>
        }
      />
    </div>
  );
};

export default PTypography;
