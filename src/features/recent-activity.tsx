import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const activities = [
  {
    id: "1",
    user: {
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Created new project",
    target: "Mobile App Redesign",
    time: "2 minutes ago",
    type: "create",
  },
  {
    id: "2",
    user: {
      name: "Bob Smith",
      email: "bob@example.com",
      avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
    },
    action: "Updated user permissions",
    target: "Carol Davis",
    time: "5 minutes ago",
    type: "update",
  },
  {
    id: "3",
    user: {
      name: "Carol Davis",
      email: "carol@example.com",
      avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
    },
    action: "Completed task",
    target: "Database Migration",
    time: "10 minutes ago",
    type: "complete",
  },
  {
    id: "4",
    user: {
      name: "David Wilson",
      email: "david@example.com",
      avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
    },
    action: "Joined team",
    target: "Development Team",
    time: "1 hour ago",
    type: "join",
  },
  {
    id: "5",
    user: {
      name: "Eva Brown",
      email: "eva@example.com",
      avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
    },
    action: "Published report",
    target: "Q4 Analytics Report",
    time: "2 hours ago",
    type: "publish",
  },
];

const ActivityItem = ({
  activity,
}: {
  activity: (typeof activities)[number];
}) => {
  return (
    <div
      key={activity.id}
      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
    >
      <Avatar className="h-8 w-8">
        <AvatarImage
          src={activity.user.avatar || "/placeholder.svg"}
          alt={activity.user.name}
        />
        <AvatarFallback>
          {activity.user.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{activity.user.name}</span>
          {getActivityBadge(activity.type)}
        </div>
        <p className="text-sm text-muted-foreground">
          {activity.action}{" "}
          <span className="font-medium">{activity.target}</span>
        </p>
        <p className="text-xs text-muted-foreground">{activity.time}</p>
      </div>
    </div>
  );
};

const getActivityBadge = (type: string) => {
  const variants = {
    create: { variant: "default" as const, label: "Created" },
    update: { variant: "secondary" as const, label: "Updated" },
    complete: { variant: "outline" as const, label: "Completed" },
    join: { variant: "secondary" as const, label: "Joined" },
    publish: { variant: "default" as const, label: "Published" },
  };

  const config = variants[type as keyof typeof variants] || variants.create;

  return (
    <Badge variant={config.variant} className="text-xs">
      {config.label}
    </Badge>
  );
};

export function RecentActivity() {
  const renderActivityItems = () => {
    return activities.map((activity) => (
      <ActivityItem key={activity.id} activity={activity} />
    ));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest actions performed by your team members
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">{renderActivityItems()}</div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
