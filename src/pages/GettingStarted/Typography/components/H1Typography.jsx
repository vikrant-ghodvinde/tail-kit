import {
  CodeBox,
  CodePreview,
  PreviewBox,
} from "@/components/CodePreview/CodePreview";

const H1Typography = () => {
  return (
    <div className="relative">
      <div className="relative w-full pb-2 border-b border-b-black/5 dark:border-b-white/15">
        <h3 className="text-lg font-semibold">h1</h3>
      </div>
      <CodePreview
        preview={
          <PreviewBox>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
          </PreviewBox>
        }
        code={
          <CodeBox
            code={`export default function App() {
                      return (
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                          Lorem ipsum dolor sit amet consectetur.
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
                    {
                      '<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">'
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

export default H1Typography;
