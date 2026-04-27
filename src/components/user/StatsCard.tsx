import { Card, CardDescription, CardTitle } from "../ui/card";
type StatsCardProps = {
  count: number;
  text: string;
};
const StatsCard = ({ count, text }: StatsCardProps) => {
  return (
    <Card className="flex flex-row items-center justify-between p-6">
      <CardTitle>{text}</CardTitle>

      <CardDescription>{count}</CardDescription>
    </Card>
  );
};

export default StatsCard;
