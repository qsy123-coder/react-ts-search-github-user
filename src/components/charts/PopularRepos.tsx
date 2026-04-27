import type { Repository } from "@/types";
import { calculateMostStarRepos } from "@/utils";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  const mostPopularRepos = calculateMostStarRepos(repositories);
  console.log(mostPopularRepos);
  const chartConfig = {
    stars: {
      label: "star",
      color: "#2563eb",
    },
  } satisfies ChartConfig;
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Stared Most</h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart data={mostPopularRepos} accessibilityLayer>
          <CartesianGrid vertical></CartesianGrid>
          <XAxis
            dataKey="repo"
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 10)}
          />
          <YAxis dataKey="stars" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="stars" fill="var(--color-stars)" radius={6} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default PopularRepos;
