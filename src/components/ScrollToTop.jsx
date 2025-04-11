import { useEffect } from "react";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200,
    });

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (

        <Zoom in={trigger}>
            <Fab
                size="medium"
                onClick={handleClick}
                sx={{
                    position: "fixed",
                    bottom: 16,
                    right: 16,
                    zIndex: 1000,
                    background: "linear-gradient(90deg, #0D47A1, #009688, #00C853)",
                    color: "white",
                    "&:hover": {
                        background: "linear-gradient(90deg, #0B3D91, #00796B, #00B248)",
                    },
                    "&:active": {
                        background: "linear-gradient(90deg, #0D47A1, #009688, #00C853)",
                    },
                    "&:focus": {
                        background: "linear-gradient(90deg, #0D47A1, #009688, #00C853)",
                    },
                }}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    );
};

export default ScrollToTop;