import { useAuth } from "@/hooks/useAuth";
import { User } from "@/lib/auth/auth";
import { Button } from "@/components/ui/button";
import { Avatar } from "../ui/avatar";

interface DashboardClientProps {
  user: User;
}

// const navbar = ({ user }: DashboardClientProps) => {
const navbar = () => {
  const { logout } = useAuth();
  // console.log(user);

  return (
    <nav className="fixed left-0 z-10 right-0 top-0 flex h-14 items-center justify-between border-b bg-white px-6 ">
      {/* Breadcrumbs */}
      {/* <div className="flex items-center space-x-2 text-sm text-gray-500">
        <span className="hover:text-gray-700 cursor-pointer">Dashboard</span>
        <span>/</span>
        <span className="hover:text-gray-700 cursor-pointer">Users</span>
        <span>/</span>
        <span className="text-gray-900 font-medium">Profile</span>
      </div> */}
      logo
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4"></div>
      </div>
      {/* Right side (optional) */}
      <div className="flex items-center space-x-4">
        {/* <span className="text-gray-700">Welcome, nn</span> */}

        <Button
          onClick={logout}
          variant="destructive"
          className="text-sm cursor-pointer hover:text-red-950 transition-colors"
        >
          Logout
        </Button>
        {/* <img
          src="/avatar.png"
          alt="User Avatar"
          className="h-8 w-8 rounded-full"
        /> */}
        <Avatar className="bg-red-300" />
      </div>
    </nav>
  );
};

export default navbar;
