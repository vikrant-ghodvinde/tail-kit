import { Check, ChevronRight, ChevronsRight, Clipboard, Menu, Moon, Sun } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const LightThemeIcon = (props) => {
  return <Sun {...props} />;
};

export const DarkThemeIcon = (props) => {
  return <Moon {...props} />;
};

export const MenuIcon = (props) => {
  return <Menu {...props} />;
};

export const GithubIcon = (props) => {
  return <FaGithub {...props} />;
};

export const LinkedinIcon = (props) => {
  return <FaLinkedin {...props} />;
};

export const ChevronRightIcon = (props) => {
  return <ChevronRight {...props} />;
};

export const ChevronsRightIcon = (props) => {
  return <ChevronsRight {...props} />;
};

export const ClipboardIcon = (props) => {
  return <Clipboard {...props} />;
};

export const CheckIcon = (props) => {
  return <Check {...props} />;
};
