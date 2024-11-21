import {
  CodeBox,
  CodePreview,
  PreviewBox,
} from "@/components/CodePreview/CodePreview";

const SmallTypography = () => {
  return (
    <div className="relative">
      <div className="relative w-full pb-2 border-b border-b-black/5 dark:border-b-white/15">
        <h3 className="text-lg font-semibold">Small</h3>
      </div>
      <CodePreview
        preview={
          <PreviewBox>
            <small className="text-sm font-medium leading-none text-black dark:text-white">
              Lorem, ipsum dolor.
            </small>
          </PreviewBox>
        }
        code={
          <CodeBox
            code={`export default function App() {
                        return (
                          <small className="text-sm font-medium leading-none">
                            Lorem, ipsum dolor.
                          </small>
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
                    {'<small className="text-sm font-medium leading-none">'}
                  </span>
                  <div className="block ps-4">
                    <span className="block">
                      {
                        "Lorem, ipsum dolor."
                      }
                    </span>
                  </div>
                  <span className="block">{"</small>"}</span>
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

export default SmallTypography;
