<Box ref={wrapperRef} sx={{ width: "100vw", overflow: "hidden", willChange: "transform" }}>
  {bubbles.map((bubble, i) => (
    <Box
      key={i}
      sx={{
        position: "absolute",
        top: bubble.top,
        left: bubble.left,
        width: `${bubble.size}px`,
        height: `${bubble.size}px`,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,255,127,0.2), transparent 70%)",
        animation: `floatBubble ${bubble.duration}s ease-in-out infinite`,
        animationDelay: `${bubble.delay}s`,
        zIndex: -1,
        filter: "blur(4px)",
      }}
    />
  ))}

  <Box
    ref={scrollRef}
    sx={{
      display: "flex",
      width: `${designT.length * 100}vw`,
      height: "100vh",
      scrollSnapType: "x mandatory", // Maintain snap behavior
      willChange: "scroll-position",
      overflowX: "scroll", // Enable scroll on X axis
      scrollBehavior: "smooth", // Ensure smooth scroll
    }}
  >
    {designT.map((step) => (
      <Box
        key={step.id}
        className="slide"
        sx={{
          width: "100vw",
          height: "100vh",
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backdropFilter: {
            xs: "none",
            md: "blur(4px)",
          },
          textAlign: "center",
          paddingRight: 6,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#007FFF",
            fontWeight: 600,
            mb: 2,
            animation: "pulseGlow 3s infinite",
          }}
        >
          {step.title}
        </Typography>
        <Box sx={{ mb: 2 }}>{step.svg}</Box>
        <Typography
          sx={{
            maxWidth: "600px",
            color: "#00FF7F",
            fontSize: "1.1rem",
            lineHeight: 1.7,
          }}
        >
          {step.description}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>