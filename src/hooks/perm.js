import { useAuthUser } from "@/store/auth";
import { useEffect, useState } from "react";

export const usePerms = () => {
  const user = useAuthUser();

  const [owner, setOwner] = useState(false);
  const [customer, setCustomer] = useState(false);

  const IsOwner = (managerId) => {
    if (["Administrator"].includes(user?.role.name)) {
      return true;
    }
    if (managerId === user.id) {
      return true;
    }
    return false;
  };

  const isManager = () => {
    // console.log(user);
    if (["Administrator", "Manager"].includes(user?.role?.name)) {
      return true;
    } else {
      return false;
    }
  };

  const isAdmin = () => {
    // console.log(user);
    if (["Administrator"].includes(user?.role?.name)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {}, [user]);

  return { IsOwner, isManager, isAdmin, authUser: user };
};
