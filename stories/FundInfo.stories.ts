import type { Meta, StoryObj } from "@storybook/react";

import { FundInfo } from "../app/components";

const meta = {
  title: "Component/FundInfo",
  component: FundInfo,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof FundInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fundInfo: {
      name: "Mock Fund 1",
      rating: { analystRating: 5, SRRI: 4 },
      portfolio: [
        { label: "Stock", value: 25.53738 },
        { label: "Bond", value: 54.25369 },
        { label: "Cash", value: 19.69435 },
        { label: "Other", value: 1.00772 },
        { label: "Property", value: 0 },
      ],
    },
  },
};
