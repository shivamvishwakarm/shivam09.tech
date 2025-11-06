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
    <div className="md:h-[150vh] h-[170vh] w-full bg-white dark:bg-black">
      <div className="max-w-auto mx-auto px-4 md:max-w-3xl">
        <div className="grid grid-cols-4  md:items-center gap-4 pt-16 w-full">
          <ProfileImage />
          <div className="relative col-span-3 ">
            <DarkLightMode />
            <h1 className="md:text-[3.4rem] text-[1.47rem] font-bold md:text-6xl  dark:text-white ">
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

        <div className="mt-6 flex md:w-full md:items-center md:justify-end ">
          <Socials />
          <Link target="_blank"  href={"/Shivam_1yrExp_MERN.pdf"} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-black bg-background btn-inner-shadow hover:bg-accent  dark:bg-[#737373] dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 text-black">
            <FileText className="md:size-5 size-4" />
            Resume
          </Link>
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
              className="dark:shadow-md shadow-neutral-800 rounded-lg bg-neutral-100 dark:bg-[#1d1d1d] px-3 py-1 text-neutral-500 dark:text-neutral-100"
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
