import * as React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

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
