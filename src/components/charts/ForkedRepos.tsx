import type { Repository } from "@/types";
import { calculateMostForkedRepos } from "@/utils";
import React from "react";

const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
  const mostForkedRepos = calculateMostForkedRepos(repositories);
  console.log(mostForkedRepos);
  return <div>666</div>;
};

export default ForkedRepos;
