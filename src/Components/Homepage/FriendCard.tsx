import { Friend, TStatus } from "@/types/friend.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface FriendCardProps {
  friend: Friend;
}

const FriendCard = ({ friend }: FriendCardProps) => {
  const { id, name, picture, status, days_since_contact, tags } = friend;

  const statusColorMap: Record<TStatus, string> = {
    "overdue": "text-base-100  bg-[#EF4444]",
    "almost due": "text-base-100 bg-[#EFAD44]",
    "on-track": "text-base-100 bg-[#244D3F]",
  };

  return (
    <Link
      href={`/friends/${id}`}
      className="bg-base-100 rounded-xl text-center py-6 shadow-md"
    >
      <div className="avatar">
        <div className="w-24 rounded-full">
          <Image src={picture} alt={name} width={400} height={400}></Image>
        </div>
      </div>
      <h1>{name}</h1>
      <h3>{days_since_contact}d ago</h3>
      <div className="flex gap-3 px-6 my-3 justify-center">
        {tags.map((tag, index) => (
          <p key={index} className="badge bg-[#CBFADB] text-[#244D3F] font-medium uppercase">
            {tag}
          </p>
        ))}
      </div>
      <p
        className={`${statusColorMap[status]} badge capitalize font-medium`}
      >
        {status}
      </p>
    </Link>
  );
};

export default FriendCard;
