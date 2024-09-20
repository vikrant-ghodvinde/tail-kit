/* eslint-disable react/prop-types */

import { useState } from "react";
import { CheckIcon, ClipboardIcon } from "@/icons";
import { toast } from "sonner";

const ColorCard = ({ color, background, name, icon }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = (color) => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied ${color} to clipboard.`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <button
      type="button"
      className="group relative w-full flex-1 flex flex-col items-center justify-center gap-y-1.5"
      onClick={() => handleCopy(color)}
    >
      <span
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200"
        style={{ color: icon }}
      >
        {copied ? <CheckIcon size={12} /> : <ClipboardIcon size={12} />}
      </span>
      <div
        className="w-full aspect-[4/1] sm:aspect-[3/4] rounded-lg"
        style={{ background: background }}
      ></div>
      <div className="hidden md:inline-block text-[10px] xl:text-xs text-black/60 group-hover:text-black dark:text-white/60 dark:group-hover:text-white transition-colors duration-200">
        {name}
      </div>
    </button>
  );
};

export default ColorCard;
