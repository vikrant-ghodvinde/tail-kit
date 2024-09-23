/* eslint-disable react/prop-types */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/components/ui/select";

const ColorsDropdown = ({ paletteType, setPaletteType }) => {
  return (
    <Select value={paletteType} onValueChange={setPaletteType}>
      <SelectTrigger className="w-auto gap-x-2">
        <SelectValue>
          Format:{" "}
          <span className="text-black/70 dark:text-white/70">
            {paletteType}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="className">className</SelectItem>
        <SelectItem value="hex">HEX</SelectItem>
        <SelectItem value="rgb">RGB</SelectItem>
        <SelectItem value="hsl">HSL</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ColorsDropdown;
