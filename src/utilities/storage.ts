import { IHistory } from "@/types/history.type";

const getHistoryFromStorage = () => {
  const stringifiedHistory = localStorage.getItem("history");

  if (stringifiedHistory) {
    const history = JSON.parse(stringifiedHistory);
    return history;
  }

  return [];
};

const saveHistoryToStorage = (history: IHistory[]) => {
  const stringifiedHistory = JSON.stringify(history);

  localStorage.setItem("history", stringifiedHistory);
};

const setHistoryToStorage = (history: IHistory) => {
  const historyData: IHistory[] = getHistoryFromStorage();

  const newHistoryData = [...historyData, history];
  // historyData.push(history);

  saveHistoryToStorage(newHistoryData);
};

export {
  getHistoryFromStorage as getHistoryData,
  setHistoryToStorage as setHistoryData,
};
