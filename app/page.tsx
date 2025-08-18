import Experience from "@/components/experience";
import Profile from "@/components/Profile";
import Projects from "@/components/projects";
import Separator from "@/components/seperator";
import Link from "next/link";

import Socials from "@/components/socials";
import { USER } from "@/data/user";

export default function Home() {
  return (
    <div className="relative">
      <div className="max-w-3xl mx-auto absolute inset-0 h-screen w-full z-[-1] pointer-events-none">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-secondary via-primary to-primary opacity-50" />
        <div className="absolute inset-y-0 right-0 h-full w-[0.5px] bg-gradient-to-b from-secondary via-primary to-primary opacity-50" />
      </div>

      <div className="absolute inset-0 h-screen w-full z-0 pointer-events-none">
        <div className="relative flex h-1 w-full border-edge top-10
            before:absolute before:-left-[100vw] before:-z-[1] 
            before:h-[0.5px] md:before:w-[176.1vw] before:w-[200vw]
            before:bg-gradient-to-b before:from-secondary before:to-primary">
        </div>
      </div>



      <div className="mx-auto md:max-w-2xl z-100 px-2">
        <div className="flex gap-3 flex-row pt-16">


          <Profile />
          <div className="space-y-4 ">
            <div>
              <h1 className="md:text-4xl text-2xl font-bold   gradient-text">
                Shivam Vishwakarma
              </h1>

              <p className="mt-1 md:text-xl  text-sm font-medium gradient-text-bio">{USER.shortBio}</p>
            </div>
            <Socials />

          </div>
        </div>

        <div className="h-px md:mt-0 rounded-full transform md:-translate-x-[57px] md:w-[52.2vw] w-full bg-[#565656]" />
        <Experience />
        <Separator />
        <Projects />





      </div>

      <div className="flex items-center justify-center w-full ">
        <p className=" my-5 gradient-text ">Give your best - <Link href="https://github.com/shivamvishwakarm/portfolio-nextjs" className=" italic text-sm font-normal text-neutral-500 underline" target='_blank'> @shivamvishwakarm</Link></p>
      </div>
    </div >
  );
}
