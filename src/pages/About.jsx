import React, { useEffect, useRef } from "react";
import { Box, Typography, Paper } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const designT = [
  {
    id: 1,
    title: "01 - Ideation",
    description:
      "Brainstorm and refine creative ideas, transforming them into a well-structured plan for a smart, successful solution.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 4C21.402 4 12.8 12.602 12.8 23.2C12.8 29.38 16.054 35.165 21.333 38.146C22.077 38.58 22.533 39.395 22.533 40.278V42.8C22.533 45.091 24.442 47 26.733 47H37.267C39.558 47 41.467 45.091 41.467 42.8V40.278C41.467 39.395 41.923 38.58 42.667 38.146C47.946 35.165 51.2 29.38 51.2 23.2C51.2 12.602 42.598 4 32 4Z" stroke="#00FF7F" strokeWidth="2" fill="rgba(0,255,127,0.05)" /><path d="M26 28C26 25.239 28.239 23 31 23C33.761 23 36 25.239 36 28" stroke="#007FFF" strokeWidth="2" strokeLinecap="round" /><rect x="26" y="47" width="12" height="4" rx="1" fill="#007FFF" /><rect x="27" y="51" width="10" height="3" rx="1" fill="#00FF7F" /><rect x="28" y="54" width="8" height="3" rx="1" fill="#007FFF" /><circle cx="32" cy="60" r="2" fill="#00FF7F" /></svg>
    ),
  },
  {
    id: 2,
    title: "02 - Plan",
    description:
      "Define project objectives, establish a timeline with key milestones, and assemble a skilled team tailored to your development needs.",
    svg: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="14" width="44" height="36" rx="4" stroke="#007FFF" strokeWidth="2" /><rect x="10" y="14" width="44" height="8" fill="#007FFF" /><line x1="18" y1="10" x2="18" y2="18" stroke="#00FF7F" strokeWidth="2" /><line x1="46" y1="10" x2="46" y2="18" stroke="#00FF7F" strokeWidth="2" /><path d="M18 26h6M28 26h6M38 26h6M18 34h6M28 34h6M38 34h6M18 42h6M28 42h6M38 42h6" stroke="#00FF7F" strokeWidth="2" /></svg>
    ),
  },
  {
    id: 3,
    title: "03 - Design",
    description:
      "Create interactive prototypes using wireframes and sketches, providing a clear visual representation of the solution's interface and user experience.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="10" stroke="#007FFF" strokeWidth="2" /><path d="M28 30c0-1 1-2 2-2s2 1 2 2c0-1 1-2 2-2s2 1 2 2c0 1-1 2-2 2h-4c-1 0-2-1-2-2z" fill="#00FF7F" /><g stroke="#00FF7F" strokeWidth="2"><path d="M32 10v6" /><path d="M32 48v6" /><path d="M10 32h6" /><path d="M48 32h6" /><path d="M19 19l4 4" /><path d="M45 45l-4-4" /><path d="M19 45l4-4" /><path d="M45 19l-4 4" /></g></svg>
    ),
  },
  {
    id: 4,
    title: "04 - Implement",
    description:
      "Select the most suitable tools and technologies to develop the product, adhering to the defined timeline, project scope, and requirements.",
    svg: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="44" cy="20" r="6" stroke="#007FFF" strokeWidth="2" /><path d="M20 44l12-12m-4 16l12-12" stroke="#00FF7F" strokeWidth="2" /><path d="M16 48a8 8 0 0 1 11.3-11.3l7.4 7.4a8 8 0 0 1-11.3 11.3l-7.4-7.4z" stroke="#007FFF" strokeWidth="2" /></svg>
    ),
  },
  {
    id: 5,
    title: "05 - Test",
    description:
      "Conduct rigorous manual and automated testing to ensure a thoroughly tested, high-quality, and bug-free solution.",
    svg: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="24" stroke="#007FFF" strokeWidth="2" />
        <path d="M24 32l6 6 10-14" stroke="#00FF7F" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "06 - Deploy",
    description:
      "Launch the product, ensuring it meets all predefined standards and is seamlessly accessible to the target audience.",
    svg: (
      <svg width="64" height="64" fill="none" viewBox="0 0 64 64"><path d="M32 4c6 4 12 18 12 26s-6 20-12 20-12-12-12-20 6-22 12-26z" stroke="#007FFF" strokeWidth="2" /><path d="M24 50l-6 10 10-6 4 6 4-6 10 6-6-10" stroke="#00FF7F" strokeWidth="2" /><circle cx="32" cy="26" r="4" stroke="#00FF7F" strokeWidth="2" /><path d="M20 28c-4 4-6 8-6 12 0 2 2 2 4 2 4 0 8-2 12-6" stroke="#007FFF" strokeWidth="2" /><path d="M44 28c4 4 6 8 6 12 0 2-2 2-4 2-4 0-8-2-12-6" stroke="#007FFF" strokeWidth="2" /></svg>
    ),
  },
];

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const totalWidth = wrapperRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    gsap.to(wrapperRef.current, {
      x: () => -(totalWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth - viewportWidth}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Top Dummy Section */}
      <Box
        sx={{
          height: "500px",
          bgcolor: "#1a1a1a",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Top Dummy Section (500px)</Typography>
      </Box>

      {/* Horizontal Scroll Section */}
      <Box
        ref={containerRef}
        sx={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          bgcolor: "#0A0A0A",
          mt: "80px",
        }}
      >
        <Box
          ref={wrapperRef}
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            gap: 4,
            px: 4,
          }}
        >
          {designT.map((item) => (
            <Paper
              key={item.id}
              elevation={6}
              sx={{
                minWidth: "40vw",
                height: "70vh",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 4,
                padding: 4,
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                flexShrink: 0,
              }}
            >
              <Box mb={3}>{item.svg}</Box>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body1" color="rgba(255,255,255,0.8)">
                {item.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>

      {/* Bottom Dummy Section */}
      <Box
        sx={{
          height: "500px",
          bgcolor: "#1a1a1a",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Bottom Dummy Section (500px)</Typography>
      </Box>
    </>

  );
};

export default HorizontalScroll;
