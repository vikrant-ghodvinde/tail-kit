import {
    CodeBox,
    CodePreview,
    PreviewBox,
  } from "@/components/CodePreview/CodePreview";

const H5Typography = () => {
  return (
    <div className="relative">
      <div className="relative w-full pb-2 border-b border-b-black/5 dark:border-b-white/15">
        <h3 className="text-xl font-semibold">h5</h3>
      </div>
      <CodePreview
        preview={
          <PreviewBox>
            <h5 className="scroll-m-20 text-lg font-medium tracking-tight lg:text-xl">
              Lorem ipsum dolor sit amet consectetur.
            </h5>
          </PreviewBox>
        }
        code={
          <CodeBox
            code={`export default function App() {
                      return (
                        <h5 className="scroll-m-20 text-lg font-medium tracking-tight lg:text-xl">
                          Lorem ipsum dolor sit amet consectetur.
                        </h5>
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
                      '<h5 className="scroll-m-20 text-lg font-medium tracking-tight lg:text-xl">'
                    }
                  </span>
                  <div className="block ps-4">
                    <span className="block">
                      {"Lorem ipsum dolor sit amet consectetur."}
                    </span>
                  </div>
                  <span className="block">{"</h5>"}</span>
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

export default H5Typography