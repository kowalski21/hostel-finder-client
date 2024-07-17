import { Grid, LayoutGrid, Landmark, Droplets, Users } from "lucide-react";

export const menuList = [
  {
    to: "/",
    title: "Home",
    icon: <LayoutGrid className="text-white mb-5 mt-5" size={30} />,
  },
  {
    to: "/dashboard/hostels",
    title: "Hostels",
    icon: <Landmark className="text-white mb-5 mt-5" size={30} />,
  },
  {
    to: "/dashboard/room_request",
    title: "Room Requests",
    icon: <Droplets className="text-white mb-5 mt-5" size={30} />,
  },
  {
    to: "/dashboard/settings/users",
    title: "Users",
    icon: <Users className="text-white mb-5 mt-5" size={30} />,
  },
];
