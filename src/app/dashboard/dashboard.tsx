"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { User } from "@/lib/auth/auth";
import { Button } from "@/components/ui/button";

interface DashboardClientProps {
  user: User;
}

export default function ProjectDashboard({ user }: DashboardClientProps) {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-2 px-2">
      <div className=" space-y-2">
        {/* Header */}
        {/* <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">ProjectX</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, {user.name}</span>
            <Button
              onClick={logout}
              variant="destructive"
              className="text-sm hover:text-red-950 transition-colors"
            >
              Logout
            </Button>
          </div>
        </div> */}

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* About Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>About this project</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                This project has no description yet. Describing the project
                makes it easier for other people to understand it.
              </p>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LayoutDashboard className="h-5 w-5 text-gray-500" />
                Project stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Boards</span>
                  <span className="font-medium">25</span>
                </div>
                <div className="flex justify-between">
                  <span>Work items completed</span>
                  <span className="font-medium">16</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Members */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gray-500" />
              Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src="/avatars/mq.png" alt="MQ" />
                <AvatarFallback>MQ</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/avatars/ay.png" alt="AY" />
                <AvatarFallback>AY</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/avatars/fn.png" alt="FN" />
                <AvatarFallback>FN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/avatars/mu.png" alt="MU" />
                <AvatarFallback>MU</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/avatars/ms.png" alt="MS" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/avatars/ig.png" alt="IG" />
                <AvatarFallback>IG</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
