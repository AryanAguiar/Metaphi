import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Button, Typography, Divider, IconButton, Stack, Card, CardContent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { gsap } from "gsap";
import { Link, useLocation, useParams } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
import { jobs } from "./JobsData"

const Careers = () => {

    const techStacks = ["All", "React", "Vue", "PHP", "MERN"];
    const [selectedStack, setSelectedStack] = useState("All");

    const filteredJobs = selectedStack === "All" ? jobs : jobs.filter((job) => job.tags.includes(selectedStack));


    return (
        <>
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    px: { xs: 3, md: 8 },
                    py: { xs: 8, md: 14 },
                    width: "100%",
                    minHeight: "60vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    backgroundColor: "rgba(18, 18, 18, 0.6)"
                }}
            >
                <Box>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "2.25rem", sm: "3.25rem", md: "4rem" },
                            color: "#fff",
                            mb: 2,
                            lineHeight: 1.2,
                        }}
                    >
                        Careers at Metaphi
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: "800px",
                            mx: "auto",
                            color: "#bdbdbd",
                            fontSize: { xs: "1rem", md: "1.125rem" },
                            lineHeight: 1.9,
                        }}
                    >
                        We foster a collaborative and inclusive work culture where both budding talent and seasoned professionals thrive. Explore opportunities to be part of our journey toward building impactful technologies.
                    </Typography>
                </Box>
            </Container>

            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    px: { xs: 3, md: 8 },
                    pt: { xs: 4, md: 10 },
                    pb: { xs: 6, md: 10 },
                    width: "100%",
                    textAlign: "left",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "1440px",
                        margin: "0 auto",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
                            color: "#fff",
                            mb: 2,
                        }}
                    >
                        Open Positions
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: "1000px",
                            color: "#bbbbbb",
                            fontSize: { xs: "1rem", md: "1.125rem" },
                            lineHeight: 1.85,
                        }}
                    >
                        At Metaphi Innovations, our passionate and forward-thinking team is dedicated to delivering scalable solutions that solve real-world challenges. Join us in shaping the future of technology through collaboration and innovation.
                    </Typography>
                </Box>
            </Container>

            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    px: { xs: 2, sm: 4, md: 6 },
                    py: { xs: 4, sm: 6 },
                    width: "100%",
                    minHeight: "60vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                {/* Filter Buttons */}
                <Stack
                    sx={{
                        flexDirection: { xs: 'row', md: 'row' },
                        gap: { xs:0, md: 2 },
                        mb: 6,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >

                    {techStacks.map((tech) => (
                        <Button
                            key={tech}
                            variant={selectedStack === tech ? "contained" : "outlined"}
                            onClick={() => setSelectedStack(tech)}
                            sx={{
                                textTransform: "none",
                                fontWeight: 600,
                                px: 3,
                                m:1,
                                width:"100px",
                                borderRadius: "20px",
                                backgroundColor:
                                    selectedStack === tech ? "#00C853" : "transparent",
                                color: selectedStack === tech ? "#fff" : "#00C853",
                                borderColor: "#00C853",
                                "&:hover": {
                                    backgroundColor:
                                        selectedStack === tech ? "#00b94c" : "rgba(0,200,83,0.1)",
                                },
                            }}
                        >
                            {tech}
                        </Button>
                    ))}
                </Stack>

                {/* Cards */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 4,
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    {filteredJobs.map((job, idx) => (
                        <Card
                            key={idx}
                            component={Link}
                            to={`/careers/${job.slug}`}
                            sx={{
                                textDecoration: "none",
                                width: "340px",
                                backgroundColor: "#1e1e1e",
                                borderRadius: 3,
                                border: "1px solid rgba(255,255,255,0.05)",
                                color: "white",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                                "&:hover": {
                                    borderColor: "#00C853",
                                    boxShadow: "0 6px 30px rgba(0,255,150,0.15)",
                                    backgroundColor: "rgba(0, 0, 0, 0.44)",
                                },
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    p: 3,
                                    gap: 2,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    fontWeight="600"
                                    sx={{ color: "white" }}
                                >
                                    {job.title}
                                </Typography>

                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography
                                        variant="body2"
                                        fontWeight={500}
                                        sx={{ color: "white" }}
                                    >
                                        {job.location}
                                    </Typography>

                                    <IconButton
                                        sx={{
                                            border: "1px solid #fff",
                                            borderRadius: "50%",
                                            p: 1.2,
                                            color: "white",
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                backgroundColor: "rgba(0, 200, 83, 0.1)",
                                                borderColor: "#00C853",
                                            },
                                        }}
                                    >
                                        <ArrowForwardIcon />
                                    </IconButton>
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>

        </>
    )
}

export default Careers