import {
  CodeBox,
  CodePreview,
  PreviewBox,
} from "@/components/CodePreview/CodePreview";

const H2Typography = () => {
  return (
    <div className="relative">
      <div className="relative w-full pb-2 border-b border-b-black/5 dark:border-b-white/15">
        <h3 className="text-xl font-semibold">h2</h3>
      </div>
      <CodePreview
        preview={
          <PreviewBox>
            <h2 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
          </PreviewBox>
        }
        code={
          <CodeBox
            code={`export default function App() {
                      return (
                        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
                          Lorem ipsum dolor sit amet consectetur.
                        </h2>
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
                      '<h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">'
                    }
                  </span>
                  <div className="block ps-4">
                    <span className="block">
                      {"Lorem ipsum dolor sit amet consectetur."}
                    </span>
                  </div>
                  <span className="block">{"</h1>"}</span>
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

export default H2Typography;
