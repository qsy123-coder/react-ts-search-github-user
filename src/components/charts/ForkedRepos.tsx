import type { Repository } from "@/types";
import { calculateMostForkedRepos } from "@/utils";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
  const mostForkedRepos = calculateMostForkedRepos(repositories);
  console.log(mostForkedRepos);
  const chartConfig = {
    forks: {
      label: "fork",
      color: "#e11c47",
    },
  } satisfies ChartConfig;
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Forked Most</h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart data={mostForkedRepos} accessibilityLayer>
          <CartesianGrid vertical></CartesianGrid>
          <XAxis
            dataKey="repo"
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 10)}
          />
          <YAxis dataKey="count" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-forks)" radius={6} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default ForkedRepos;
