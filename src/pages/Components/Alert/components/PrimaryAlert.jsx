import {
  CodeBox,
  CodePreview,
  PreviewBox,
} from "@/components/CodePreview/CodePreview";

const PrimaryAlert = () => {
  return (
    <div className="relative">
      <div className="relative w-full pb-2 border-b border-b-black/5 dark:border-b-white/15">
        <h3 className="text-lg font-semibold">Primary Alert</h3>
      </div>
      <CodePreview
        preview={
          <PreviewBox>
            <div
              role="alert"
              className="w-full max-w-xl bg-blue-500 py-2 px-4 rounded-md shadow"
            >
              <div className="flex items-center gap-3">
                <div className="space-y-1">
                  <h6 className="text-sm font-semibold text-white">
                    Primary Alert
                  </h6>
                  <p className="text-xs text-white font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsa?</p>
                </div>
              </div>
            </div>
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
                    <span className="block">{"Lorem, ipsum dolor."}</span>
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

export default PrimaryAlert;
