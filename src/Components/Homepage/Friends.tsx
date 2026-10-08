import { Friend } from "@/types/friend.type";
import FriendCard from "./FriendCard";

const getFriends = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/friends.json`);

    if (!res.ok) {
      throw new Error("Unable to fetch");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Friends = async () => {
  const friends = await getFriends();

  return (
    <div className="px-6 lg:px-0 mb-20">
      <h1 className="text-[#1F2937] font-bold text-2xl">Your Friends</h1>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend: Friend) => (
          <FriendCard key={friend.id} friend={friend}></FriendCard>
        ))}
      </div>
    </div>
  );
};

export default Friends;
