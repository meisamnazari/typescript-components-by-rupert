import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const CustomBackdropLoading = ({ onClose, open = true, }) => {
    return (React.createElement("div", null,
        React.createElement(Backdrop, { sx: { color: "#fff", zIndex: 10 }, open: open, onClick: onClose && onClose },
            React.createElement(CircularProgress, { color: "inherit" }))));
};
export default CustomBackdropLoading;
