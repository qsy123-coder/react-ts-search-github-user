import { useQuery } from "@apollo/client/react";
import { GET_USER } from "@/queries";
import type { UserData } from "@/types";
import UserCard from "./UserCard";
import StatsContainer from "./StatsContainer";
import StatsCard from "./StatsCard";

type UserProfileProps = {
  userName: string;
};

const UserProfile = ({ userName }: UserProfileProps) => {
  const { loading, error, data } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <h2 className="text-xl">{error.message}</h2>;
  if (!data) return <h2 className="text-xl">User Not Found.</h2>;

  const { bio, name, avatarUrl, url, gists, following, followers, repositories } = data.user;

  return (
    <div>
      <UserCard
        bio={bio}
        name={name}
        avatarUrl={avatarUrl}
        url={url}
      />

      <StatsContainer
        gists={gists}
        followers={followers}
        following={following}
        repositories={repositories}
      />
    </div>
  );
};

export default UserProfile;
