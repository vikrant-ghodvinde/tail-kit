import {
    CodeBox,
    CodePreview,
    PreviewBox,
  } from "@/components/CodePreview/CodePreview";

const H4Typography = () => {
  return (
    <div className="relative">
      <div className="relative w-full pb-2 border-b border-b-black/5 dark:border-b-white/15">
        <h3 className="text-xl font-semibold">h4</h3>
      </div>
      <CodePreview
        preview={
          <PreviewBox>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur.
            </h4>
          </PreviewBox>
        }
        code={
          <CodeBox
            code={`export default function App() {
                      return (
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl">
                          Lorem ipsum dolor sit amet consectetur.
                        </h4>
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
                      '<h4 className="scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl">'
                    }
                  </span>
                  <div className="block ps-4">
                    <span className="block">
                      {"Lorem ipsum dolor sit amet consectetur."}
                    </span>
                  </div>
                  <span className="block">{"</h4>"}</span>
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
  )
}

export default H4Typography