import type { Repository } from "@/types";
import { calculateMostStarRepos } from "@/utils";
import React from "react";

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  const mostPopularRepos = calculateMostStarRepos(repositories);
  console.log(mostPopularRepos);
  return <div className="grid md:grid-cols-2 gap-4"></div>;
};

export default PopularRepos;
