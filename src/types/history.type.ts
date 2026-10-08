
export type HistoryAction = "call" | "text" | "video";

export interface IHistory {
  id: number;
  name: string;
  action: HistoryAction;
  createdAt: Date;
}
