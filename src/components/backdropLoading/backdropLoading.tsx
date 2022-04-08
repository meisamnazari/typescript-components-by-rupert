import React, { FC } from "react";
import { BackdropLoadingProps } from "./types";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const CustomBackdropLoading: FC<BackdropLoadingProps> = ({
  onClose,
  open = true,
}) => {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: 10 }}
        open={open}
        onClick={onClose && onClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default CustomBackdropLoading;
