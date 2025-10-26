import ProfileImage from "@/components/Profile";
import Socials from "@/components/socials";
import { USER } from "@/data/user";
import Image from "next/image";
import PRCard from "@/components/cards/pr-card";
import { GitHubContributions } from "@/components/ui/contribution-graph/contribute";
import {  Moon } from "lucide-react"
import Link from "next/link";
import DarkLightMode from "@/components/dark-light-mode";

export default function Home() {
  return (

      <div className=" mx-auto max-w-auto md:max-w-3xl px-4 ">
        <div className="flex flex-row justify-between items-center gap-4 pt-16 text-center">
          <ProfileImage />
          <div className="relative">
         <DarkLightMode/>
            <h1 className="md:text-6xl text-xl font-bold">
              {USER.firstName} {USER.lastName}
            </h1>
            <p
              style={{ fontFamily: "var(--font-caveat)" }}
              className="absolute right-0 text-end text-5xl text-neutral-500"
            >
              - {USER.jobTitle}
            </p>
          </div>
        </div>





        <div className="mt-4 flex w-full items-end justify-end">
          <Socials />
          <button className="flex items-center gap-1 rounded-full bg-neutral-500 px-6 py-2 text-white">
            <Image src="/document.png" alt="docuement" width={20} height={20} />
            Resume
          </button>
        </div>

        <div className="flex flex-col gap-2 mt-8 bg-gradient">
          <PRCard/>
          <PRCard/>
          <PRCard/>

          <div className=" mx-auto">
            <Link className="bg-neutral-100 px-3 text-neutral-500 py-1 rounded-lg" href="https://github.com/pulls?q=is%3Apr+author%3Ashivamvishwakarm+archived%3Afalse+is%3Aclosed">
            see more
            </Link>
          </div>
    
        </div>
<div className="mt-8">
        <GitHubContributions />
        </div>
      </div>

  );
}
