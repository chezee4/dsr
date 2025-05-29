import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

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
  { month: "Jan", revenue: 4000, target: 3800 },
  { month: "Feb", revenue: 3000, target: 3200 },
  { month: "Mar", revenue: 5000, target: 4500 },
  { month: "Apr", revenue: 4500, target: 4200 },
  { month: "May", revenue: 6000, target: 5500 },
  { month: "Jun", revenue: 5500, target: 5200 },
  { month: "Jul", revenue: 7000, target: 6500 },
  { month: "Aug", revenue: 6800, target: 6200 },
  { month: "Sep", revenue: 8000, target: 7500 },
  { month: "Oct", revenue: 7500, target: 7000 },
  { month: "Nov", revenue: 9000, target: 8500 },
  { month: "Dec", revenue: 8500, target: 8000 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--primary))",
  },
  target: {
    label: "Target",
    color: "hsl(var(--muted-foreground))",
  },
};

export function RevenueChart() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base sm:text-lg">Revenue Overview</CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Monthly revenue compared to targets for the current year
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 sm:p-6">
        <div className="h-[200px] sm:h-[250px] md:h-[300px] w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 5,
                  right: 5,
                  left: 5,
                  bottom: 5,
                }}
              >
                <defs>
                  <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-revenue)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-revenue)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillTarget" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-target)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-target)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  fontSize={12}
                  className="text-xs"
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  fontSize={12}
                  className="text-xs"
                  width={40}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Area
                  dataKey="target"
                  type="natural"
                  fill="url(#fillTarget)"
                  fillOpacity={0.4}
                  stroke="var(--color-target)"
                  strokeWidth={1.5}
                />
                <Area
                  dataKey="revenue"
                  type="natural"
                  fill="url(#fillRevenue)"
                  fillOpacity={0.4}
                  stroke="var(--color-revenue)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
