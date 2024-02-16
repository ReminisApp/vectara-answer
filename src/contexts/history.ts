import { SummaryLanguage } from "../views/search/types";

export type HistoryItem = {
  query: string;
  filter: string;
  language: SummaryLanguage;
  date: string;
  memid: string;
  doiQ: string;
};

// eslint-disable-next-line
const HISTORY_KEY = `${location.hostname}:searchHistory`;

export const addHistoryItem = (
  {
    query,
    filter,
    language,
      memid,
      doiQ
  }: { query: string; filter: string; language: SummaryLanguage; memid:string, doiQ:string },
  history: HistoryItem[]
) => {
  const date = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date());
  const newHistoryItem = { query, filter, language, date, memid, doiQ };
  const newHistory = [
    newHistoryItem,
    ...history.filter((item) => item.query !== query),
  ];
  persistHistory(newHistory);
  return newHistory;
};

export const deleteHistory = () => {
  localStorage.removeItem(HISTORY_KEY);
};

export const retrieveHistory = () => {
  const serializedHistory = localStorage.getItem(HISTORY_KEY);
  if (!serializedHistory) return [];
  return JSON.parse(serializedHistory);
};

export const persistHistory = (history: HistoryItem[]) => {
  const serializedHistory = JSON.stringify(history);
  localStorage.setItem(HISTORY_KEY, serializedHistory);
};
