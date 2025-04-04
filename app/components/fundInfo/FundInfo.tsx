import Image from "next/image";
import styled from "@emotion/styled";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { FundData } from "app/utils/types";
import { getPortfolioChartData } from "app/utils/getPortfolioData";

import star from "../../assets/star.png";
import { Title } from "../card";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IFundInfo {
  fundInfo: FundData;
}

export const FundInfo = ({ fundInfo }: IFundInfo) => {
  const chartData = getPortfolioChartData(fundInfo.portfolio);
  const SSRIRating = [...Array(fundInfo.rating["SRRI"])];

  return (
    <Wrapper tabIndex={1}>
      <div>
        <Title>{fundInfo.name}</Title>

        <StarWrapper>
          <p>SRRI:</p>
          {SSRIRating.map((_, index) => (
            <span key={index}>
              <Image src={star} height={40} width={40} alt="star" />
            </span>
          ))}
        </StarWrapper>

        <p>Analyst Rating: {fundInfo.rating.analystRating}</p>
      </div>

      <ChartWrapper>
        <Doughnut data={chartData} />
      </ChartWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  
    max-width: 550px;
    row-gap: 20px;
    align-items: center;
    text-align: start;
    background-color: #fffef9;
    cursor: pointer;
  
    border-radius: 0.5rem;
    width: auto;
    padding: 50px;
    margin-top: 40px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &:focus {
      outline: 4px solid #a0a0a4;
    }
    
    @media (min-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
      text-align: start;
      justify-content: space-around;
    }
  }
`;

const StarWrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    padding-right: 10px;
  }
`;

const ChartWrapper = styled.div`
  max-width: 250px;
`;
