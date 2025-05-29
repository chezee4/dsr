import type React from "react";
import { useState } from "react";

import { ArrowUpDown, MoreHorizontal, Mail, Edit, Trash2 } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string | null;
  avatar: string;
}

interface UsersTableProps {
  users: User[];
}

type SortField = "name" | "email" | "role" | "status" | "lastLogin";
type SortDirection = "asc" | "desc";

const columnsToDisplay = [
  {
    id: "name",
    label: "User",
  },
  {
    id: "role",
    label: "Role",
  },
  {
    id: "status",
    label: "Status",
  },
  {
    id: "lastLogin",
    label: "Last Login",
  },
  {
    id: "actions",
    label: "Actions",
  },
];

export function UsersTable({ users }: UsersTableProps) {
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];
    if (sortField === "lastLogin") {
      const aTime = a.lastLogin ? new Date(a.lastLogin).getTime() : 0;
      const bTime = b.lastLogin ? new Date(b.lastLogin).getTime() : 0;
      return sortDirection === "asc" ? aTime - bTime : bTime - aTime;
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (aValue && bValue && aValue < bValue)
      return sortDirection === "asc" ? -1 : 1;
    if (aValue && bValue && aValue > bValue)
      return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      Active: "default",
      Inactive: "secondary",
      Pending: "outline",
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants] || "secondary"}>
        {status}
      </Badge>
    );
  };

  const getRoleBadge = (role: string) => {
    const colors = {
      Admin: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      Moderator:
        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      User: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    };

    return (
      <Badge className={colors[role as keyof typeof colors] || colors.User}>
        {role}
      </Badge>
    );
  };

  const formatLastLogin = (lastLogin: string | null) => {
    if (!lastLogin) return "Never";
    return new Date(lastLogin).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const SortButton = ({
    field,
    children,
  }: {
    field: SortField;
    children: React.ReactNode;
  }) => (
    <Button
      variant="ghost"
      onClick={() => handleSort(field)}
      className="h-auto p-0 font-semibold hover:bg-transparent"
    >
      {children}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );

  const renderTableHead = () => {
    return columnsToDisplay.map((column) => (
      <TableHead key={column.id}>
        <SortButton field={column.id as SortField}>{column.label}</SortButton>
      </TableHead>
    ));
  };

  const renderTableBody = () => {
    return sortedUsers.map((user) => (
      <TableRow key={user.id} className="hover:bg-muted/50">
        <TableCell>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
              />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-muted-foreground">{user.email}</div>
            </div>
          </div>
        </TableCell>
        <TableCell>{getRoleBadge(user.role)}</TableCell>
        <TableCell>{getStatusBadge(user.status)}</TableCell>
        <TableCell className="text-sm text-muted-foreground">
          {formatLastLogin(user.lastLogin)}
        </TableCell>
        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                Send email
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Edit user
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete user
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <Card>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>{renderTableHead()}</TableRow>
          </TableHeader>
          <TableBody>{renderTableBody()}</TableBody>
        </Table>
      </div>
    </Card>
  );
}
