import React from "react";
import { BackdropLoading } from "../index";
export default {
    title: "Components/BackdropLoading",
    component: BackdropLoading,
    argTypes: {},
};
const BackdropLoadingTemplate = (args) => React.createElement(BackdropLoading, Object.assign({}, args));
export const SimpleBackdrop = BackdropLoadingTemplate.bind({});
SimpleBackdrop.args = {
    open: true,
};
