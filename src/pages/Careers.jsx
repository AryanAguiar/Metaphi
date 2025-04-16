import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Button, Typography, Card, CardContent, IconButton, Modal, CardMedia, TextField, MenuItem, Divider } from "@mui/material";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";

const Careers = () => {
    return (
        <>
            <Container
                id="overview"
                maxWidth={false}
                disableGutters
                sx={{
                    px: 6,
                    py: 12,
                    position: "relative",
                    width: "100%",
                    minHeight: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                {/* Content */}
                <Box>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "2rem", sm: "3rem", md: "3.75rem" },
                            color: "#fff",
                            mb: 3,
                        }}
                    >
                        Careers
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: "800px",
                            mx: "auto",
                            color: "#bbb",
                            fontSize: { xs: "1rem", md: "1.25rem" },
                            lineHeight: 1.8,
                        }}
                    >
                        We nurture a professional working culture where young talents and experienced professionals are treated alike. Join our team for a growthful career journey.
                    </Typography>
                </Box>
            </Container>

        </>
    )
}

export default Careers