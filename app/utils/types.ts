export interface IData {
  id: number;
  name: string;
  data: FundData[];
}

export interface FundData {
  name: string;
  rating: {
    analystRating: number;
    SRRI: number | null;
  };
  portfolio: IPortfolio[];
}

export interface IPortfolio {
  label: string;
  value: number;
}
