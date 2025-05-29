import { useState, useMemo } from "react";

import { Plus, Search, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UsersTable } from "@/features/users/users-table";

const mockUsers = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-01-15T10:30:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob.smith@example.com",
    role: "User",
    status: "Active",
    lastLogin: "2024-01-14T15:45:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "Carol Davis",
    email: "carol.davis@example.com",
    role: "Moderator",
    status: "Inactive",
    lastLogin: "2024-01-10T09:15:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "User",
    status: "Active",
    lastLogin: "2024-01-15T14:20:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    name: "Eva Brown",
    email: "eva.brown@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-01-15T11:00:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "6",
    name: "Frank Miller",
    email: "frank.miller@example.com",
    role: "User",
    status: "Pending",
    lastLogin: null,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "7",
    name: "Grace Lee",
    email: "grace.lee@example.com",
    role: "Moderator",
    status: "Active",
    lastLogin: "2024-01-13T16:30:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "8",
    name: "Henry Taylor",
    email: "henry.taylor@example.com",
    role: "User",
    status: "Inactive",
    lastLogin: "2024-01-08T12:45:00Z",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");

  const filteredUsers = useMemo(() => {
    return mockUsers.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || user.status.toLowerCase() === statusFilter;
      const matchesRole =
        roleFilter === "all" || user.role.toLowerCase() === roleFilter;

      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [searchTerm, statusFilter, roleFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">
            Manage your team members and their account permissions here.
          </p>
        </div>
        <Button className="md:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="moderator">Moderator</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <UsersTable users={filteredUsers} />
    </div>
  );
}
