import {
  CodeBox,
  CodePreview,
  PreviewBox,
} from "@/components/CodePreview/CodePreview";

const H6Typography = () => {
  return (
    <div className="relative">
      <div className="relative w-full pb-2 border-b border-b-black/5 dark:border-b-white/15">
        <h3 className="text-lg font-semibold">h6</h3>
      </div>
      <CodePreview
        preview={
          <PreviewBox>
            <h6 className="scroll-m-20 text-base font-normal tracking-tight lg:text-lg">
              Lorem ipsum dolor sit amet consectetur.
            </h6>
          </PreviewBox>
        }
        code={
          <CodeBox
            code={`export default function App() {
                      return (
                        <h6 className="scroll-m-20 text-base font-normal tracking-tight lg:text-lg">
                          Lorem ipsum dolor sit amet consectetur.
                        </h6>
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
                    {
                      '<h6 className="scroll-m-20 text-base font-normal tracking-tight lg:text-lg">'
                    }
                  </span>
                  <div className="block ps-4">
                    <span className="block">
                      {"Lorem ipsum dolor sit amet consectetur."}
                    </span>
                  </div>
                  <span className="block">{"</h6>"}</span>
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

export default H6Typography;
