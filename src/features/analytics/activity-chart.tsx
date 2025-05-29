import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { day: "Mon", active: 120, inactive: 80 },
  { day: "Tue", active: 150, inactive: 60 },
  { day: "Wed", active: 180, inactive: 40 },
  { day: "Thu", active: 200, inactive: 30 },
  { day: "Fri", active: 240, inactive: 20 },
  { day: "Sat", active: 160, inactive: 50 },
  { day: "Sun", active: 140, inactive: 70 },
];

const chartConfig = {
  active: {
    label: "Active Users",
    color: "hsl(var(--primary))",
  },
  inactive: {
    label: "Inactive Users",
    color: "hsl(var(--muted-foreground))",
  },
};

export function ActivityChart() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base sm:text-lg">User Activity</CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Daily active vs inactive users this week
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 sm:p-6">
        <div className="h-[200px] sm:h-[250px] md:h-[300px] w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 5,
                  left: 5,
                  bottom: 5,
                }}
              >
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  fontSize={12}
                  className="text-xs"
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  fontSize={12}
                  className="text-xs"
                  width={30}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <Bar
                  dataKey="active"
                  fill="var(--color-active)"
                  radius={[2, 2, 0, 0]}
                  maxBarSize={40}
                />
                <Bar
                  dataKey="inactive"
                  fill="var(--color-inactive)"
                  radius={[2, 2, 0, 0]}
                  maxBarSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
