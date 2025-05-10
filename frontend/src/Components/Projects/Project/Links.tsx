import { DemoLinkLogo } from "@/Components/Logos/DemoLinkLogo";
import { GithubLogo } from "@/Components/Logos/GithubLogo";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/Components/ui/tooltip";

const Links = ({
  githubLink,
  demoLink,
}: {
  githubLink: string;
  demoLink: string;
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Links</h2>
      <div className="flex gap-4 mb-12">
        {githubLink && (
          <Tooltip>
            <TooltipTrigger>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Button className="hover:bg-white hover:text-black cursor-pointer">
                  <span>Github Repo</span>
                  <GithubLogo />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Visit Github Repository</p>
            </TooltipContent>
          </Tooltip>
        )}
        {demoLink && (
          <Tooltip>
            <TooltipTrigger>
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <Button className="hover:bg-white hover:text-black cursor-pointer">
                  <span>Live Demo</span>
                  <DemoLinkLogo />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Visit Live Site</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default Links;
