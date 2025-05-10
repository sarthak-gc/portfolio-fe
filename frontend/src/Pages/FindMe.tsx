import Profiles from "@/Components/Contact/Profiles";
import { useScrollStore } from "../Store/Refs/useRefToScroll";
import type { ReactElement } from "react";
import { GithubLogo } from "@/Components/Logos/GithubLogo";
import TwitterLogo from "@/Components/Logos/TwitterLogo";
import EmailLogo from "@/Components/Logos/EmailLogo";
import LeetCodeLogo from "@/Components/Logos/LeetCodeLogo";
import LinkedInLogo from "@/Components/Logos/LinkedInLogo";

export interface ProfileI {
  logo: ReactElement;
  link: string;
  username: string;
}
const FindMe = () => {
  const contactRef = useScrollStore().sectionRefs.contact;
  const MyProfiles: ProfileI[] = [
    {
      logo: <GithubLogo />,
      link: "https://github.com/sarthak-gc",
      username: "sarthak-gc",
    },
    {
      logo: <LeetCodeLogo />,
      link: "https://leetcode.com/u/sarthakgc",
      username: "sarthakgc",
    },
    {
      logo: <TwitterLogo />,
      link: "https://x.com/sarthakgc",
      username: "sarthakgc",
    },
    {
      logo: <EmailLogo />,
      link: "mailto:sarthakgc.np@gmail.com",
      username: "sarthakgc.np@gmail.com",
    },
    {
      logo: <LinkedInLogo />,
      link: "https://www.linkedin.com/in/sarthak-gc/",
      username: "sarthak-gc",
    },
  ];
  return (
    <div
      className="bg-black text-white  grid grid-cols-7 selection:text-black selection:bg-white 
     gap-0 space-y-12 py-20"
    >
      <h1
        className="row-start-1  col-start-2 col-end-7 text-3xl "
        ref={contactRef}
      >
        Find me here:
      </h1>
      <div className="col-start-2 col-end-7 grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {MyProfiles.map((profile, index) => (
          <Profiles key={index} profile={profile} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FindMe;
