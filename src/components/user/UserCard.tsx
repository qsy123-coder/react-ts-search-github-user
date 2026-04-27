import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

type UserCardProps = {
  avatarUrl: string;
  name: string;
  bio: string;
  url: string;
};
const UserCard = ({ avatarUrl, name, bio, url }: UserCardProps) => {
  return (
    <Card className="w-full lg:w-1/2 mb-8">
      <CardContent className="flex flex-row gap-10">
        <img
          src={avatarUrl}
          alt={name}
          className="w-36 h-36  rounded object-cover"
        />
        <div className="flex flex-col gap-3 justify-center">
          <CardTitle className="font-bold">{name}</CardTitle>
          <CardDescription>{bio || "hello"}</CardDescription>

          <Button size={"lg"} variant={"default"} className="w-full">
            <a href={url}>Follow</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
