"use client";

import { FriendContext } from "@/context/FriendContext";
import { useContext, useState } from "react";

import { BsChatText } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { IHistory } from "@/types/history.type";

const TimelinePage = () => {
  const { history } = useContext(FriendContext);

  const [filter, setFilter] = useState("all");

  const handleFilter = (data: IHistory[]) => {
    if (!data) return [];
    if (filter === "all") return data;
    return data.filter((item) => item.action === filter);
  };

  const data = handleFilter(history);

  return (
    <div className="max-w-7xl mx-auto my-12 px-8 md:px-0">
      <h1 className="text-3xl font-bold">Timeline</h1>

      <select
        defaultValue="Filter timeline"
        onChange={(e) => setFilter(e.target.value)}
        className="select my-4"
      >
        <option disabled={true}>Filter timeline</option>
        <option value={"all"}>All</option>
        <option value={"call"}>Call</option>
        <option value={"text"}>Text</option>
        <option value={"video"}>Video</option>
      </select>

      {data.length > 0 ? (
        <div className="my-4 space-y-3 min-h-46.5">
          {data.map((his, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-lg p-3 shadow flex gap-3 items-center"
            >
              <div>
                {his.action === "call" ? (
                  <IoCall size={30} />
                ) : his.action === "text" ? (
                  <BsChatText size={30} />
                ) : (
                  <FaVideo size={30} />
                )}
              </div>
              <div>
                <h1 className="capitalize">
                  {his.action} with {his.name}
                </h1>
                <p>
                  {new Date(his.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="my-4 bg-base-100 rounded-lg p-3 shadow h-46.5 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-[#244D3F]">No Data</h1>
        </div>
      )}
    </div>
  );
};

export default TimelinePage;
