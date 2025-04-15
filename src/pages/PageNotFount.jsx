import React from 'react'
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Container, Box, IconButton, Button, Drawer, List, ListItem, ListItemText, Collapse, Divider, useScrollTrigger, Typography } from "@mui/material";
const PageNotFount = () => {
    return (
        <>
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 6,
                    py: 12,
                    minHeight: "100vh",
                    position: "relative",
                    overflow: "hidden",
                    color: "#fff",
                }}
            >
                {/* Blurred background glow */}
               

                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "6rem", md: "8rem" },
                        fontWeight: 800,
                        lineHeight: 1,
                        background: "linear-gradient(to right, #00C853, #00B8D4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        mb: 2,
                    }}
                >
                    404
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        mb: 2,
                        textAlign: "center",
                    }}
                >
                    Oops! Page not found
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: "#bbb",
                        maxWidth: "600px",
                        textAlign: "center",
                        mb: 4,
                        fontSize: { xs: "1rem", md: "1.125rem" },
                        lineHeight: 1.8,
                    }}
                >
                    The page you’re looking for doesn’t exist or has been moved. Let’s get you back
                    on track and explore the future with{" "}
                    <Box component="span" sx={{ fontWeight: 500, color: "#fff" }}>
                        Metaphi Innovations
                    </Box>
                    .
                </Typography>

                <Button
                    variant="contained"
                    href="/"
                    sx={{
                        background: "linear-gradient(90deg, #0D47A1, #00C853)",
                        color: "#fff",
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        fontSize: "1rem",
                        borderRadius: "999px",
                        textTransform: "none",
                    }}
                >
                    Go to Homepage
                </Button>
            </Container>
        </>
    )
}

export default PageNotFount