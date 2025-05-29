import { MetricCard } from "@/components/metric-card";
import { ActivityChart } from "@/features/analytics/activity-chart";
import { RevenueChart } from "@/features/analytics/revenue-chart";
import { RecentActivity } from "@/features/recent-activity";
import { METRICS } from "@/lib/constants/metrics";

export function OverviewPage() {
  const renderMetricCards = () => {
    return METRICS.map((metric, index) => (
      <MetricCard key={index} {...metric} />
    ));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {renderMetricCards()}
      </div>
      <div className="flex flex-col md:grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <RevenueChart />
        </div>
        <div className="col-span-3">
          <ActivityChart />
        </div>
      </div>
      <div className="flex flex-col md:grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <RecentActivity />
        </div>
        <div className="col-span-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-md hover:bg-accent transition-colors">
                <div className="font-medium">Create new user</div>
                <div className="text-sm text-muted-foreground">
                  Add a new user to the system
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-md hover:bg-accent transition-colors">
                <div className="font-medium">Generate report</div>
                <div className="text-sm text-muted-foreground">
                  Create a detailed analytics report
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-md hover:bg-accent transition-colors">
                <div className="font-medium">Export data</div>
                <div className="text-sm text-muted-foreground">
                  Download your data in CSV format
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
