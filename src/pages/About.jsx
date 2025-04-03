import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

// Emoji Data
const emojis = [
  { icon: "🐳", name: "Spouting Whale", unicode: "U+1F433" },
  { icon: "🐋", name: "Whale", unicode: "U+1F40B" },
  { icon: "🐬", name: "Dolphin", unicode: "U+1F42C" },
  { icon: "🐟", name: "Fish", unicode: "U+1F41F" },
  { icon: "🐠", name: "Tropical Fish", unicode: "U+1F420" },
  { icon: "🐡", name: "Blowfish", unicode: "U+1F421" },
  { icon: "🦈", name: "Shark", unicode: "U+1F988" },
  { icon: "🐙", name: "Octopus", unicode: "U+1F419" },
  { icon: "🐚", name: "Spiral Shell", unicode: "U+1F41A" },
];

const EmojiCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Handle selection with infinite looping
  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % emojis.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? emojis.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 400,
        margin: "auto",
        padding: 3,
      }}
    >
      {/* Up Button */}
      <IconButton onClick={handlePrev} sx={{ mb: 1 }}>
        <ArrowUpward />
      </IconButton>

      {/* Carousel Container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 200,
          overflow: "hidden",
        }}
      >
        {emojis.map((emoji, index) => {
          // Calculate position relative to selectedIndex
          const offset = (index - selectedIndex + emojis.length) % emojis.length;

          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                width: "100%",
                padding: "10px 16px",
                borderRadius: "12px",
                backgroundColor: selectedIndex === index ? "#d7f7fc" : "#fff",
                boxShadow: selectedIndex === index ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
                transform: `translateY(${(offset - 1) * 80}px) scale(${selectedIndex === index ? 1 : 0.8})`,
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onClick={() => setSelectedIndex(index)}
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "#d7f7fc",
                  width: 60,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 30,
                  marginRight: 2,
                }}
              >
                {emoji.icon}
              </Box>
              <Box>
                <Typography variant="h6">{emoji.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Unicode: {emoji.unicode}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Down Button */}
      <IconButton onClick={handleNext} sx={{ mt: 1 }}>
        <ArrowDownward />
      </IconButton>
    </Box>
  );
};

export default EmojiCarousel;
