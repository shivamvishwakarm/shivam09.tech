"use client";
import Experience from "@/components/experience";
import Profile from "@/components/Profile";
import Projects from "@/components/projects";
import Link from "next/link";
import Socials from "@/components/socials";
import { USER } from "@/data/user";
import GitHubCalendar from 'react-github-calendar';

export default function Home() {

  return (

    <div id="animated" className="  relative bg-[radial-gradient(var(--color-gray-800)_0.1px,_transparent_1px)] [background-size:10px_10px] ">
      <div
        className="max-w-3xl mx-auto absolute inset-0 w-full z-[-1] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-secondary via-primary to-primary opacity-20" />
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-secondary via-primary to-primary opacity-20" />
      </div>

      {/* Decorative horizontal line */}

      <div
        className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full -z-[1] h-px 
             bg-gradient-to-b from-teal-900 to-primary opacity-30"
      />


      <div className="mx-auto md:max-w-3xl z-100  px-4">
        {/* <StaggerWrapper > */}
        <div className="flex gap-4 flex-row pt-16 ">


          <Profile />
          <div className="space-y-4">
            <div>
              <h1 className="md:text-4xl text-2xl font-bold   gradient-text">
                Shivam Vishwakarma
              </h1>

              <p className="mt-1 md:text-xl  text-sm font-medium gradient-text-bio ">{USER.shortBio}</p>
            </div>
            <Socials />

          </div>
        </div>

        <div
          className="absolute md:top-48 top-48 left-1/2 transform -translate-x-1/2 md:w-3xl w-full -z-[1] h-px 
             bg-secondary opacity-30"
        />
        <Experience />
        <div
          className="absolute  left-1/2 transform -translate-x-1/2 w-full -z-[1] h-px 
             bg-secondary opacity-30"
        />
        <Projects />
        <div className="mt-10">
          <GitHubCalendar username="shivamvishwakarm" />
        </div>

      </div>

      <div className="flex flex-col items-center my-8">
        <h2 className="text-xl font-semibold mb-4">GitHub Contributions</h2>

        <img
          src="https://github-readme-stats.vercel.app/api?username=shivamvishwakarm&show_icons=true&theme=dark&hide_border=true"
          alt="GitHub Stats"
          className="rounded-xl shadow-md mt-4"
        />


      </div>



      <div className="flex items-center justify-center w-full opacity-20 pb-10">
        <p className=" my-5 gradient-text ">Give your best - <Link href="https://github.com/shivamvishwakarm/" className=" italic text-sm font-normal text-primary/60 underline" target='_blank'> @shivamvishwakarm</Link></p>
      </div>
    </div >
  );
}
