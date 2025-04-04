import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

import { FundData, IData } from "app/utils/types";

import { Card } from "../card";
import { FundInfo } from "../fundInfo";

interface IInvestments {
  investmentData: IData[];
}

export const Investments = ({ investmentData }: IInvestments) => {
  const [selectedFund, setSelectedFund] = useState<IData | null>(null);
  const [selectedSubFund, setSelectedSubFund] = useState<FundData | null>(null);

  const fundToView = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    fundToView.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (selectedSubFund) {
      fundToView.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedSubFund]);

  return (
    <Wrapper>
      <Row>
        {investmentData.map((fund) => (
          <Card
            name={fund.name}
            key={fund.name}
            setSelectedFund={() => {
              setSelectedSubFund(null);
              setSelectedFund(fund);
            }}
          />
        ))}
      </Row>

      {selectedFund ? (
        <Row>
          {selectedFund.data.map((fund) => (
            <Card
              name={fund.name}
              key={fund.name}
              setSelectedFund={() => {
                setSelectedSubFund(fund);
                scrollToBottom();
              }}
            />
          ))}
        </Row>
      ) : null}

      {selectedSubFund ? (
        <div ref={fundToView}>
          <FundInfo fundInfo={selectedSubFund} />
        </div>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px 80px 80px 80px;
`;

const Row = styled.span`
  display: grid;
  grid-template-columns: repeat(auto-fit);
  grid-column-gap: 40px;
  grid-row-gap: 20px;

  padding-top: 20px;

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
