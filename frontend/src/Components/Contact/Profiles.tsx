import type { ProfileI } from "@/Pages/FindMe";

interface ProfilePropI {
  profile: ProfileI;
  index: number;
}
const Profiles = ({ profile, index }: ProfilePropI) => {
  const { link, logo, username } = profile;
  return (
    <div
      className={` md:w-full  gap-3 grid-cols-${3 - index} hover:bg-gray-800 `}
    >
      <a
        href={link}
        target="_blank"
        className="flex items-center gap-2 md:cursor-none"
      >
        <div className="w-10 h-10   flex justify-center items-center text-white">
          {logo}
        </div>
        <span>{username}</span>
      </a>
    </div>
  );
};

export default Profiles;
