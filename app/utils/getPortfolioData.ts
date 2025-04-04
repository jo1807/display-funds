import { IPortfolio } from "./types";

export const getPortfolioChartData = (portfolio: IPortfolio[]) => {
  const labels = portfolio.map((value) => value.label);
  const data = portfolio.map((value) => value.value);

  return {
    labels,
    datasets: [
      {
        label: "Portfolio",
        data,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(74, 226, 63)",
          "rgb(59, 109, 209)",
        ],
        hoverOffset: 4,
      },
    ],
  };
};
