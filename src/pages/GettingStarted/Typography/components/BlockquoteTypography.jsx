import {
  CodeBox,
  CodePreview,
  PreviewBox,
} from "@/components/CodePreview/CodePreview";

const BlockquoteTypography = () => {
  return (
    <div className="relative">
      <div className="relative w-full pb-2 border-b border-b-black/5 dark:border-b-white/15">
        <h3 className="text-lg font-semibold">Small</h3>
      </div>
      <CodePreview
        preview={
          <PreviewBox>
            <blockquote className="mt-6 border-l-2 pl-6 italic text-black dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
              culpa perferendis aliquam! Perferendis qui quidem quam
              voluptatibus recusandae, quaerat, repellendus rerum quod beatae
              rem neque quasi maiores nobis dolor sapiente.
            </blockquote>
          </PreviewBox>
        }
        code={
          <CodeBox
            code={`export default function App() {
                        return (
                          <blockquote className="text-sm font-medium leading-none">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem culpa perferendis aliquam! Perferendis qui quidem quam voluptatibus recusandae, quaerat, repellendus rerum quod beatae rem neque quasi maiores nobis dolor sapiente.
                          </blockquote>
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
                      '<blockquote className="text-sm font-medium leading-none">'
                    }
                  </span>
                  <div className="block ps-4">
                    <span className="block">
                      {
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem culpa perferendis aliquam! Perferendis qui quidem quam voluptatibus recusandae, quaerat, repellendus rerum quod beatae rem neque quasi maiores nobis dolor sapiente."
                      }
                    </span>
                  </div>
                  <span className="block">{"</blockquote>"}</span>
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

export default BlockquoteTypography;
