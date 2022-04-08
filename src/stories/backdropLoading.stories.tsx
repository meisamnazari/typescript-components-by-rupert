import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BackdropLoading } from "../index";

export default {
  title: "Components/BackdropLoading",
  component: BackdropLoading,
  argTypes: {},
} as ComponentMeta<typeof BackdropLoading>;

const BackdropLoadingTemplate: ComponentStory<typeof BackdropLoading> = (
  args
) => <BackdropLoading {...args} />;

export const SimpleBackdrop = BackdropLoadingTemplate.bind({});
SimpleBackdrop.args = {
  open: true,
};
