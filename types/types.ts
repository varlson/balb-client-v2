export type MonthStatusType = {
  resident_name: string;
  months: (string | boolean)[];
};

export type PurchaseType = {
  desc: string;
  link: string;
  author: string;
  value: number;
  date: string;
};

export type FineType = {
  resident_name: string;
  status: boolean;
  date: string;
  desc: string;
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

// export type MonthStatusType = DataType;

export type AllDataType = {
  data: {
    fines: FineType[];
    purchase: PurchaseType[];
    month: MonthStatusType[];
  };
};

export type AllDataResponseType = {
  status: boolean;
  content: AllDataType | string;
};

export type ResumeType = {
  initialBalance: number;
  totalUsed: number;
  currentBalance: number;
  currentMonth: string;
};
