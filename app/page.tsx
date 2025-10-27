import ProfileImage from "@/components/Profile";
import Socials from "@/components/socials";
import { USER } from "@/data/user";
import PRCard from "@/components/cards/pr-card";
import { GitHubContributions } from "@/components/ui/contribution-graph/contribute";
import Link from "next/link";
import DarkLightMode from "@/components/dark-light-mode";
import { FileText } from "lucide-react";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <div className="h-[120vh] w-full bg-white dark:bg-black">
      <div className="max-w-auto mx-auto px-4 md:max-w-3xl">
        <div className="flex flex-row items-center justify-between gap-4 pt-16 ">
          <ProfileImage />
          <div className="relative  ">
            <DarkLightMode />
            <h1 className="text-[1.8rem] font-bold md:text-6xl  dark:text-white">
              {USER.firstName} {USER.lastName}
            </h1>
            <p
              style={{ fontFamily: "var(--font-caveat)" }}
              className="absolute right-0 text-end md:text-5xl text-2xl text-neutral-500 "
            >
              - {USER.jobTitle}
            </p>
          </div>
        </div>

        <div className="mt-6 flex w-full items-end justify-end">
          <Socials />
          <button className="flex items-center gap-1 rounded-full bg-neutral-500 px-6 py-2 text-lg font-medium text-white dark:text-black">
            <FileText />
            Resume
          </button>
        </div>

        <div className="mt-8 flex flex-col">
        <div className="flex flex-col gap-2">
          {USER.PR.map((pr, index) =>
            <PRCard key={index} {...pr} />
          )}
     
        </div>
          <div className="mx-auto -mt-2">
            <Link
              target="_blank"
              className="rounded-lg bg-neutral-100 dark:bg-primary px-3 py-1 text-neutral-500 dark:text-neutral-100"
              href="https://github.com/pulls?q=is%3Apr+author%3Ashivamvishwakarm+archived%3Afalse+is%3Aclosed"
            >
              see more
            </Link>
          </div>
        </div>

        <Experience/>
        <div className="mt-8">
          <GitHubContributions />
        </div>
      </div>




    </div>
  );
}
