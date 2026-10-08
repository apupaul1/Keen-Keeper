"use client";

import { FriendContext } from "@/context/FriendContext";
import { Friend } from "@/types/friend.type";
import { IHistory } from "@/types/history.type";
import { useContext } from "react";
import { BiMessageSquareDetail, BiPhoneCall, BiVideo } from "react-icons/bi";

import { setHistoryData } from "@/utilities/storage";
import toast from "react-hot-toast";

const CTAButtons = ({ friend }: { friend: Friend }) => {
  const { id, name } = friend;

  const { history, setHistory } = useContext(FriendContext);

  const handleCallAction = () => {
    const historyData: IHistory = {
      id,
      name,
      action: "call",
      createdAt: new Date(),
    };

    setHistory([...history, historyData]);

    setHistoryData(historyData);

    toast.success(`Call with ${historyData.name}!`);
  };
  const handleTextAction = () => {
    const historyData: IHistory = {
      id,
      name,
      action: "text",
      createdAt: new Date(),
    };

    setHistory([...history, historyData]);

    setHistoryData(historyData);

    toast.success(`Text with ${historyData.name}!`);
  };
  const handleVideoAction = () => {
    const historyData: IHistory = {
      id,
      name,
      action: "video",
      createdAt: new Date(),
    };

    setHistory([...history, historyData]);

    setHistoryData(historyData);

    toast.success(`Video with ${historyData.name}!`);
  };

  return (
    <>
      <button
        onClick={handleCallAction}
        className="bg-[#F8FAFC] py-5 rounded-lg shadow flex-1 flex flex-col items-center justify-center gap-2 hover:cursor-pointer"
      >
        <BiPhoneCall size={35} />
        <span>Call</span>
      </button>

      <button
        onClick={handleTextAction}
        className="bg-[#F8FAFC] py-5 rounded-lg shadow flex-1 flex flex-col items-center justify-center gap-2 hover:cursor-pointer"
      >
        <BiMessageSquareDetail size={35} />{" "}
        {/* Added a matching icon for Text */}
        <span>Text</span>
      </button>

      <button
        onClick={handleVideoAction}
        className="bg-[#F8FAFC] py-5 rounded-lg shadow flex-1 flex flex-col items-center justify-center gap-2 hover:cursor-pointer"
      >
        <BiVideo size={35} /> {/* Added a matching icon for Video */}
        <span>Video</span>
      </button>
    </>
  );
};

export default CTAButtons;
