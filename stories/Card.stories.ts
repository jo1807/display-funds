import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Card } from "../app/components";

const meta = {
  title: "Component/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Fund I Acc",
    setSelectedFund: fn(),
  },
};
