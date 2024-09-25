import {
  Check,
  ChevronRight,
  ChevronsRight,
  Clipboard,
  Menu,
  Moon,
  Sun,
} from "lucide-react";
import { FaGithub, FaHtml5, FaLinkedin } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";
import { SiVite, SiNuxtdotjs, SiGatsby } from "react-icons/si";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";

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

export const Html5Icon = (props) => {
  return <FaHtml5 {...props} />;
};

export const ViteIcon = (props) => {
  return <SiVite {...props} />;
};

export const NextJsIcon = (props) => {
  return <RiNextjsFill {...props} />;
};

export const ReactJsIcon = (props) => {
  return <RiReactjsFill {...props} />;
};

export const LaravelIcon = (props) => {
  return <FaLaravel {...props} />;
};

export const NuxtdotJsIcon = (props) => {
  return <SiNuxtdotjs {...props} />;
};

export const GatsbyIcon = (props) => {
  return <SiGatsby {...props} />;
};
