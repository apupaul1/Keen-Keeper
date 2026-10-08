import CTAButtons from "@/Components/Buttons/CTAButtons";
import { Friend, TStatus } from "@/types/friend.type";
import Image from "next/image";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { notFound } from "next/navigation";

export interface FriendDetailsPageProps {
  params: Promise<{ id: string }>;
}

const getFriends = async () => {
  try {
    const res = await fetch("http://localhost:3000/friends.json");

    if (!res.ok) {
      throw new Error("Unable to fetch");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return []
  }
};

const FriendDetailsPage = async ({ params }: FriendDetailsPageProps) => {
  const { id } = await params;

  const friends = await getFriends();

  const friend: Friend = friends.find(
    (friend: Friend) => friend.id === Number(id),
  );

  if(!friend){
    notFound()
  }

  const statusColorMap: Record<TStatus, string> = {
    "overdue": "text-red-600 bg-red-100",
    "almost due": "text-yellow-600 bg-yellow-100",
    "on-track": "text-green-600 bg-green-100",
  };

  return (
    <div className="max-w-7xl mx-auto my-12 flex flex-col lg:flex-row gap-6 px-7 lg:px-0">
      <div className=" flex-2 flex flex-col gap-4">
        <div className="bg-base-100 py-6 text-center px-8 rounded-xl shadow space-y-2">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={400}
                height={400}
              ></Image>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[#1F2937]">{friend.name}</h1>
          <p className={`${statusColorMap[friend.status]} badge uppercase`}>
            {friend.status}
          </p>
          <div className="flex gap-3 justify-center mt-2">
            {friend.tags.map((tag, index) => (
              <p
                key={index}
                className="badge badge-success text-white uppercase"
              >
                {tag}
              </p>
            ))}
          </div>
          <p className="text-[#64748B] font-semibold italic">"{friend.bio}"</p>
          <p className="text-[#64748B] font-medium">
            Preferred: {friend.email}
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <button className="btn bg-base-100">
            <RiNotificationSnoozeLine size={18} />
            Snooze 2 Weeks
          </button>
          <button className="btn bg-base-100">
            <BsArchive size={18} />
            Archive
          </button>
          <button className="btn bg-base-100 text-red-500">
            <RiDeleteBin5Line size={18} />
            Delete
          </button>
        </div>
      </div>
      <div className="flex-4">
        <div className="flex gap-3 ">
          <div className="bg-base-100 py-6 px-8 flex-1 rounded-xl shadow text-center">
            <h1 className="text-[#244D3F] font-bold text-2xl">
              {friend.days_since_contact}
            </h1>
            <p className="text-[#64748B]">Days Since Contact</p>
          </div>
          <div className="bg-base-100 py-6 px-8 flex-1 rounded-xl shadow text-center">
            <h1 className="text-[#244D3F] font-bold text-2xl">{friend.goal}</h1>
            <p className="text-[#64748B]">Goal (Days)</p>
          </div>
          <div className="bg-base-100 py-6 px-8 flex-1 rounded-xl shadow text-center">
            <h1 className="text-[#244D3F] font-bold text-2xl">
              {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </h1>
            <p className="text-[#64748B]">Next Due</p>
          </div>
        </div>
        <div className="bg-base-100 shadow py-5 px-4 rounded-xl my-6">
          <div className="flex justify-between items-center">
            <h1 className="text-[#244D3F] font-semibold text-xl">
              Relationship Goal
            </h1>
            <button className="btn bg-[#F8FAFC] text-[15px] btn-sm">Edit</button>
          </div>
          <p className="text-[#64748B] mt-4">
            Connect every{" "}
            <span className="text-[#1F2937] font-bold">{friend.goal} days</span>
          </p>
        </div>
        <div className="bg-base-100 shadow py-5 px-4 rounded-xl">
          <h1 className="text-[#244D3F] font-bold text-xl">Quick Check-In</h1>
          <div className="flex gap-4 mt-4">
            <CTAButtons friend={friend}></CTAButtons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
