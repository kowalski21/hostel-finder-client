import React from "react";
import Link from "next/link";
import { Layers3, UserRoundCog } from "lucide-react";
import { useRouter } from "next/router";
const UserLinkItem = ({ icon, title, url }) => {
  const router = useRouter();

  return (
    <li className="nav-item mt-5">
      <Link href={url} legacyBehavior>
        <a className="nav-link text-muted text-active-dark ms-0 py-0 me-10 ps-9 border-0 cursor-pointer active">
          {icon ? icon : <UserRoundCog className="text-dark me-2" size={20} />}
          {title}
          {router.asPath === url && (
            <span className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-dark rounded-end"></span>
          )}
        </a>
      </Link>
    </li>
  );
};

export default UserLinkItem;
