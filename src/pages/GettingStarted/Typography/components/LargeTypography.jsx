import {
  CodeBox,
  CodePreview,
  PreviewBox,
} from "@/components/CodePreview/CodePreview";

const LargeTypography = () => {
  return (
    <div className="relative">
      <div className="relative w-full pb-2 border-b border-b-black/5 dark:border-b-white/15">
        <h3 className="text-lg font-semibold">Large</h3>
      </div>
      <CodePreview
        preview={
          <PreviewBox>
            <div className="text-lg font-semibold text-black dark:text-white">
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </PreviewBox>
        }
        code={
          <CodeBox
            code={`export default function App() {
                        return (
                          <div className="text-lg font-semibold">
                            Lorem ipsum dolor sit amet consectetur.
                          </div>
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
                    {'<div className="text-lg font-semibold">'}
                  </span>
                  <div className="block ps-4">
                    <span className="block">{"Lorem ipsum dolor sit amet consectetur."}</span>
                  </div>
                  <span className="block">{"</div>"}</span>
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

export default LargeTypography;
