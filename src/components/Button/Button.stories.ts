import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test"; //Storybook의 Actions 패널에서 onClick 등의 호출을 추적할 수 있게 해줌.

import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["primary", "default", "round", "round-line", "icon-text"],
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
  },
  args: { onClick: fn() }, //Storybook의 Actions 패널에서 onClick 등의 호출을 추적할 수 있게 해줌.
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: "Button",
    type: "default",
    onClick: fn(() => {
      console.log("default Button clicked");
    }),
  },
};

export const Primary: Story = {
  args: {
    children: "Button",
    type: "primary",
    onClick: fn(() => {
      console.log("Primary Button clicked");
    }),
  },
};

// export const Secondary: Story = {
//   args: {
//     label: "Button",
//   },
// };
