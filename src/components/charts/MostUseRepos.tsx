import type { Repository } from "@/types";
import { calculateMostUseLanguage } from "@/utils";
import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const MostUseRepos = ({ repositories }: { repositories: Repository[] }) => {
  const mostUseRepos = calculateMostUseLanguage(repositories);

  console.log(mostUseRepos);
  const chartConfig = {
    languages: {
      label: "language",
      color: "#facd12",
    },
  } satisfies ChartConfig;
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Used Language</h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart data={mostUseRepos} accessibilityLayer>
          <CartesianGrid vertical></CartesianGrid>
          <XAxis dataKey="language" tickLine={false} tickMargin={10} />
          <YAxis dataKey="count" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-languages)" radius={6} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default MostUseRepos;
