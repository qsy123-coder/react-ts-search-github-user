import type { Repository } from "@/types";
import { calculateMostUseLanguage } from "@/utils";
import React from "react";

const MostUseRepos = ({ repositories }: { repositories: Repository[] }) => {
  const mostUseRepos = calculateMostUseLanguage(repositories);
  console.log("111");
  console.log(mostUseRepos);
  return <div>111</div>;
};

export default MostUseRepos;
