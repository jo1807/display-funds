"use client";

import styled from "@emotion/styled";
import { Roboto } from "next/font/google";

import { Investments } from "./components";

import { investmentData } from "./utils/data";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <>
      <div className={roboto.className}>
        <Header>
          <Heading>Element Investments</Heading>
        </Header>
        <Investments investmentData={investmentData} />
      </div>
    </>
  );
}

const Header = styled.div`
  background-color: #fcf4ea;
  height: 50px;
  margin: 0;
  padding-top: 20px;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Heading = styled.h1`
  text-align: center;
  color: #5a5c5e;
  font-weight: 400;
`;
