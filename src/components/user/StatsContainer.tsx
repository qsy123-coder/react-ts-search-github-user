import React from "react";
import StatsCard from "./StatsCard";
type StatsContainerProps = {
  gists: { totalCount: number };
  following: { totalCount: number };
  followers: { totalCount: number };
  repositories: { totalCount: number };
};
const StatsContainer = (props: StatsContainerProps) => {
  const { gists, following, followers, repositories } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatsCard
        text="gists"
        count={gists.totalCount}
      />
      <StatsCard
        text="following"
        count={following.totalCount}
      />
      <StatsCard
        text="followers"
        count={followers.totalCount}
      />
      <StatsCard
        text="repositories"
        count={repositories.totalCount}
      />
    </div>
  );
};

export default StatsContainer;
