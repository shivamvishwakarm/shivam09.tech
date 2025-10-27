import React from "react";
import { USER } from "@/data/user";
import Image from "next/image";
import {Dot} from "lucide-react"


const Experience = () => {
  return (
    <div className="mt-8 mb-4 py-1 md:mt-2">
      <h2 className="mb-3 text-xl font-semibold text-neutral-500 md:text-2xl">
        Experience{" "}
      </h2>
      <div className="flex flex-col gap-4 ">
        {USER.job.map((job, index) => (
          <div key={index} className="flex items-center gap-2   ">
           
           {job.logo ?     <Image
              src={job.logo || ""}
              alt={job.company}
              width={30}
              height={30}
              className="border-muted-foreground rounded-full border border-dashed"
            /> : <Dot className="dark:text-white border border border-dashed rounded-full border-muted-foreground"/>}
        
            <div className="flex justify-between w-full">
            <div>
                <p className="text-2xl font-semibold dark:text-white">{job.company}</p>
                <p className="text-muted-foreground font-medium ">{job.position}</p>
            </div>

            {/* time */}
            <div className="flex flex-col items-end ">
            <div className="flex flex-row items-center gap-2 text-muted-foreground text-sm">
                <p>{job.start}</p>
                -
                <p>{job.end}</p>
            </div>
            <div className="dark:text-neutral-200">
                {job.location}

            </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
