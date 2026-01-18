import React from "react";
import type { Preview } from "@storybook/react-webpack5";
import GlobalStyle from "../src/styles/reset"; // reset.ts의 GlobalStyle

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
};

export default preview;
