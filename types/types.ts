export type ResidentType = {
  name: string;
  status: [boolean];
};

export type PurchaseType = {
  desc: string;
  note: string;
  author: string;
  value: number;
};

export type FineType = {
  resident_name: string;
  status: boolean;
  date: string;
  about: string;
};

export type DataType = {
  currentMonth: string;
  totalOfMonth: number;
  totalExpenses: number;
  balance: number;
};

export type ErrorType = {
  status: boolean;
  error: string;
};

export type MonthStatusType = DataType | ErrorType;
