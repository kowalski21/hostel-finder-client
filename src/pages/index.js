import LinkButton from "@/components/reusable/LinkButton";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Input, Loader } from "rsuite";
import Link from "next/link";
import { useAuthUser } from "@/store/auth";
import { useAuthHook } from "@/hooks/auth";
import { useHostels } from "@/hooks/hostels";
import HostelCard from "@/components/dashboard/card/HostelCard";
import { usePerms } from "@/hooks/perm";

const Home = () => {
  const { isLoading: loading, data: userInfo } = useAuthHook();
  const { isManager, IsOwner } = usePerms();
  const router = useRouter();
  const user = useAuthUser();
  const [search, setSearch] = useState("");

  const [query, setQuery] = useState({ fields: "*,manager.id,manager.avatar" });

  const { isLoading, data } = useHostels(["HostelsSearch", query], query);

  useEffect(() => {
    let payload = { fields: "*,manager.id,manager.avatar" };

    if (search) {
      payload.search = search;
    }

    setQuery(payload);
  }, [search]);

  if (userInfo) {
    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col text-center">
            <h3 className="" style={{ fontSize: "70px" }}>
              Hostel Finder
            </h3>
            <p className="text-muted">Find, Book a Hostel with ease</p>
            <div className="separator text-dark mb-5"></div>
            {/* <button className="btn btn-dark btn-sm me-2">Login</button> */}
            {isManager() ? (
              <Link href={`/dashboard`}>
                <button className="btn btn-dark btn-sm">Dashboard</button>
              </Link>
            ) : (
              <Link href={`/dashboard/profile/${user.id}`}>
                <button className="btn btn-dark btn-sm">My Dashboard</button>
              </Link>
            )}
          </div>
        </div>
        <div className="row mt-5">
          {/* {JSON.stringify({ query })} */}
          <Input value={search} onChange={(val) => setSearch(val)} placeholder="Search Hostel By Name" size="lg" />
        </div>
        <div className="row mt-5">
          {isLoading && <Loader center vertical />}
          {data?.data.map((hostel) => {
            return (
              <div className="col-md-3 mb-5" key={hostel.id}>
                <HostelCard hostel={hostel} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <Loader center vertical />
    </div>
  );
};

export default Home;
