/* eslint-disable react/prop-types */
import { CheckIcon, ClipboardIcon } from "@/icons";
import { useState } from "react";
import { toast } from "sonner";

export const CodePreview = ({ preview, code }) => {
  const [tab, setTab] = useState("preview");
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 gap-y-5">
        <div className="relative">
          <ul className="flex items-center border-b border-b-black/5 dark:border-b-white/15">
            <li className="block">
              <button
                type="button"
                onClick={() => setTab("preview")}
                className={`inline-block p-3 text-sm font-medium border-b-2 ${
                  tab === "preview"
                    ? "border-b-black dark:border-b-white"
                    : "border-b-transparent dark:border-b-transparent"
                }`}
              >
                Preview
              </button>
            </li>
            <li className="block">
              <button
                type="button"
                onClick={() => setTab("code")}
                className={`inline-block p-3 text-sm font-medium border-b-2 ${
                  tab === "code"
                    ? "border-b-black dark:border-b-white"
                    : "border-b-transparent dark:border-b-transparent"
                }`}
              >
                Code
              </button>
            </li>
          </ul>
        </div>
        <div className="relative">{tab === "preview" ? preview : code}</div>
      </div>
    </div>
  );
};

export const PreviewBox = ({ children, code }) => {
  4;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success(`Copied to clipboard.`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <div className="relative w-full rounded-lg border border-black/5 dark:border-white/15">
      <div className="relative p-4 flex items-end justify-end text-sm">
        <button type="button" className="text-white" onClick={handleCopy}>
          {copied ? <CheckIcon size={14} /> : <ClipboardIcon size={14} />}
        </button>
      </div>
      <div className="w-full h-full min-h-[350px] p-4 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export const CodeBox = ({ children, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success(`Copied to clipboard.`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <div className="relative w-full bg-neutral-900 border border-neutral-900 rounded-lg mt-5">
      <div className="relative w-full p-3 px-4 flex items-center justify-end border-b border-b-white/20">
        <button type="button" className="text-white" onClick={handleCopy}>
          {copied ? <CheckIcon size={14} /> : <ClipboardIcon size={14} />}
        </button>
      </div>
      <div className="relative w-full p-4 text-white text-sm font-light ligatures-none leading-relaxed whitespace-nowrap overflow-x-auto scrollbar-box-x">
        <code className="flex-none min-w-full">{children}</code>
      </div>
    </div>
  );
};
