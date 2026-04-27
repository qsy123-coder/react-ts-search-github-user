import React from "react";
import { Skeleton } from "../ui/skeleton";

const Loading = () => {
  return (
    <div>
      <Skeleton className="w-full h-[194px] lg:w-1/2  mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Skeleton className="w-full h-[74px] " />
        <Skeleton className="w-full h-[74px] " />
        <Skeleton className="w-full h-[74px] " />
        <Skeleton className="w-full h-[74px] " />
      </div>
    </div>
  );
};

export default Loading;
