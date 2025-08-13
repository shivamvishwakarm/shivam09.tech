import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Profile from "@/components/Profile";
import Projects from "@/components/projects";
import Separator from "@/components/seperator";

import Socials from "@/components/socials";
import { USER } from "@/data/user";

export default function Home() {
  return (
    <div className="relative">
      <div className="max-w-3xl mx-auto absolute inset-0 h-screen w-full z-[-1]">
        <div className="absolute inset-y-0 left-0 h-full w-[0.5px] bg-gradient-to-b from-stone  via-primary/70 to-primary opacity-50" />
        <div className="absolute inset-y-0 right-0 h-full w-[0.5px] bg-gradient-to-b from-stone via-primary/70 to-primary opacity-50" />
      </div>
      <div className=" absolute inset-0 h-screen w-full z-0 ">
        <div className=" absolute -top-145 left-119 h-[154.5vh] w-px rounded-full bg-gradient-to-b from-primary  to-stone transform rotate-90 opacity-50" />

      </div>



      <div className="mx-auto md:max-w-3xl z-100">
        <div className="flex gap-3 flex-row pt-16">


          <Profile />
          <div className="space-y-2 mt-8">
            <div>
              <h1 className="text-5xl font-bold text-neutral-200">
                Shivam Vishwakarma
              </h1>

              <p className="mt-4">{USER.shortBio}</p>
            </div>
            <Socials />

          </div>
        </div>



        {/* <Experience /> */}
        <Separator />
        {/* <Projects />

        <Footer /> */}



      </div>

    </div>
  );
}
