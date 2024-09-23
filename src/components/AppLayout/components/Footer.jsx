import { GithubIcon, LinkedinIcon } from "@/icons";
import { SOCIALPATH } from "@/lib/routes/path";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative w-full py-8 bg-white dark:bg-black border-t border-t-black/5 dark:border-t-white/15">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-4">
          <div className="relative text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()}. Built by Vikrant Ghodvinde</p>
          </div>
          <div className="relative">
            <div className="flex items-center justify-center gap-1">
              <Link
                to={SOCIALPATH.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8"
              >
                <GithubIcon size={18} />
              </Link>
              <Link
                to={SOCIALPATH.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8"
              >
                <LinkedinIcon size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
