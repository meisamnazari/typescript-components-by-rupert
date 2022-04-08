import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Backdrop open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
