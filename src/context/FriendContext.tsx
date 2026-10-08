"use client";

import { IHistory } from "@/types/history.type";
import { getHistoryData } from "@/utilities/storage";
import { createContext, Dispatch, useEffect, useState } from "react";

export interface IHistoryInfo {
  history: IHistory[];
  setHistory: Dispatch<React.SetStateAction<IHistory[]>>;
}

export const FriendContext = createContext<IHistoryInfo>({
  history: [],
  setHistory: () => {},
});

const FriendProvider = ({ children }: { children: React.ReactNode }) => {
  const [history, setHistory] = useState<IHistory[]>([]);

  useEffect(() => {
    const historyData = getHistoryData();
    setHistory(historyData);
  }, []);

  const friendInfo: IHistoryInfo = {
    history,
    setHistory,
  };

  return (
    <FriendContext.Provider value={friendInfo}>
      {children}
    </FriendContext.Provider>
  );
};

export default FriendProvider;
