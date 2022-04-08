import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
export function Counter() {
    const [count, setCount] = React.useState(0);
    return (React.createElement(React.Fragment, null,
        React.createElement("p", null,
            "You clicked ",
            count,
            " times"),
        React.createElement("button", { onClick: () => setCount(count + 1) }, "Click me"),
        React.createElement(Backdrop, { open: true },
            React.createElement(CircularProgress, { color: "inherit" }))));
}
