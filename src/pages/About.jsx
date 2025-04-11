import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Button, Typography, Card, CardContent, IconButton, Modal, CardMedia, TextField, MenuItem } from "@mui/material";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";

//service cards
import serviceicon1 from "../images/gamedev.svg";
import serviceicon2 from "../images/appdev.svg";
import serviceicon3 from "../images/webdev.svg";
import serviceicon4 from "../images/ecommerce.svg";
import serviceicon5 from "../images/aiml.svg";
import serviceicon6 from "../images/iot.svg";
import serviceicon7 from "../images/devops.svg";
import serviceicon8 from "../images/salesforce-svgrepo-com 1.svg";
import serviceicon9 from "../images/block chain development.svg";
import { ArrowUpward, ArrowDownward, ArrowBack, ArrowForward, } from "@mui/icons-material";
gsap.registerPlugin(ScrollTrigger);


const services = [
  {
    id: "game-dev",
    title: "Game Development",
    icon: serviceicon1,
    description: "Transform your game ideas into high-quality, immersive 2D & 3D gaming experiences.",
    mainDescription: "From stunning visuals to seamless gameplay and captivating storylines, we craft interactive solutions that engage and excite players."
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    icon: serviceicon2,
    description: "Empowering businesses with cutting-edge mobile solutions tailored to diverse industries.",
    mainDescription: "We craft intuitive, high-performance apps that enhance user experience, drive engagement, and deliver lasting value."
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: serviceicon3,
    description: "Enhance your digital presence with cutting-edge web development solutions.",
    mainDescription: " We craft dynamic, high-performance websites and applications that captivate audiences and deliver seamless user experiences."
  },
  {
    id: "ecommerce",
    title: "E-commerce Development",
    icon: serviceicon4,
    description: "Build seamless, secure, and high-performance eCommerce solutions.",
    mainDescription: "Our expertise ensures a smooth shopping experience with robust integrations that drive sales and enhance user engagement."
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
    icon: serviceicon9,
    description: "Empower your business with decentralized, secure, and innovative blockchain solutions.",
    mainDescription: "From stunning visuals to seamless gameplay and captivating storylines, we craft interactive solutions that engage and excite players."
  },
  {
    id: "salesforce",
    title: "Salesforce Solutions",
    icon: serviceicon8,
    description: "Maximize the power of Salesforce to optimize operations and drive intelligent decision-making.",
    mainDescription: "From stunning visuals to seamless gameplay and captivating storylines, we craft interactive solutions that engage and excite players."
  },
  {
    id: "ai-ml",
    title: "AI & ML Solutions",
    icon: serviceicon5,
    description: "Harness the power of Artificial Intelligence and Machine Learning.",
    mainDescription: "From stunning visuals to seamless gameplay and captivating storylines, we craft interactive solutions that engage and excite players."
  },
  {
    id: "iot",
    title: "IoT & Embedded Solutions",
    icon: serviceicon6,
    description: "Transform your business with smart, connected devices and IoT infrastructure.",
    mainDescription: " Our custom IoT solutions enhance efficiency, drive automation, and enable seamless data-driven decision-making."
  },
  {
    id: "devops",
    title: "DevOps Solutions",
    icon: serviceicon7,
    description: "Streamline workflows, automate processes, and optimize infrastructure.",
    mainDescription: "We streamline workflows, automate processes, and optimize infrastructure for high-performance, scalable, and secure applications."
  }
];

const About = () => {
  const location = useLocation();
  const headerRef = useRef(null);
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  //cards
  const [flippedCard, setFlippedCard] = useState(null);
  const cardRefs = useRef([]);

  const handleFlip = (index) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
    }
  };

  useEffect(() => {
    services.forEach((_, index) => {
      const card = cardRefs.current[index];

      if (card) {
        gsap.to(card, {
          rotationY: flippedCard === index ? 180 : 0,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    });
  }, [flippedCard]);
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
        {/* Background Blur */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(144, 19, 254, 0.1))",
            zIndex: -1,
            filter: "blur(60px)",
          }}
        />

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
            #1 IT Company Driving a Smarter Future!
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
            From dynamic websites to innovative applications and cutting-edge software solutions,
            <strong style={{ color: "#fff" }}> Metaphi Innovations</strong> is shaping the future with
            technology-driven success. Let’s build smarter solutions together!
          </Typography>
        </Box>
      </Container>


      {/* our services */}
      <Container id="services" maxWidth={false} disableGutters sx={{ px: 6, py: 7, position: "relative", width: "100%" }}>
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(144, 19, 254, 0.1))",
          zIndex: -1,
          filter: "blur(60px)",
        }} />

        <Typography
          ref={headerRef}
          variant="h4"
          className="heading"
          sx={{
            fontWeight: "bold",
            mb: 2,
            background: "linear-gradient(145deg, #d1d1d1, #ffffff, #a3a3a3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            fontSize: { xs: "20px", sm: "24px", md: "29px", lg: "36px", xl: "46px" },
            padding: "20px",
            textAlign: "center"
          }}
        >
          Solutions We Offer
        </Typography>

        <Box
          sx={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: 3,
            py: 6,
          }}
        >
          {services.map((service, index) => (
            <Box
              key={service.id}
              ref={(el) => (cardRefs.current[index] = el)}
              sx={{
                perspective: "1000px",
                position: "relative",
                width: "100%",
                height: "290px",
                transformStyle: "preserve-3d",
                transform: "translateZ(0)",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => handleFlip(index)}
            >
              {/* Front Side */}
              <Card
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  willChange: "transform",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  borderRadius: "20px",
                  boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.1)",
                  background: "linear-gradient(135deg, rgba(9, 12, 53, 0.29), rgba(36, 36, 36, 0.9))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backfaceVisibility: "hidden",
                  "&:hover": {
                    boxShadow: "0px 10px 40px rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                <CardContent>
                  <img src={service.icon} alt={service.title} style={{ width: "50px", height: "50px", marginBottom: "5px" }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ddd", }}>
                    {service.description}
                  </Typography>
                </CardContent>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#ccc",
                    mt: 1,
                    fontSize: "12px",
                    opacity: 0.7,
                  }}
                >
                  Click to flip →
                </Typography>
              </Card>

              {/* Back Side */}
              <Card
                sx={{
                  right: "0.5px",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  willChange: "transform",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, rgba(30, 30, 30, 0.8), rgba(15, 15, 15, 0.9))",
                  boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    boxShadow: "0px 10px 40px rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    gap: 2,
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: { xs: 1, md: 1.5, lg: 2 } }}>
                    <img
                      src={service.icon}
                      alt={`icon for ${service.title}`}
                      style={{ width: "40px", height: "40px", maxWidth: "100%", objectFit: "contain", }}
                    />

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "20px" },
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    }}
                  >
                    {service.mainDescription}
                  </Typography>

                  <Link to="/about">
                    <Button
                      sx={{
                        mt: 1,
                        px: { xs: 2, sm: 3, md: 4 },
                        py: { xs: 1, sm: 1.5, md: 2 },
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                        fontWeight: "bold",
                        borderRadius: "12px",
                        background: "linear-gradient(135deg, rgba(30, 30, 30, 0.8), rgba(15, 15, 15, 0.9))",
                        color: "#fff",
                        boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        textTransform: "uppercase",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "linear-gradient(135deg, rgba(50, 50, 50, 0.9), rgba(20, 20, 20, 1))",
                          boxShadow: "0px 6px 20px rgba(255, 255, 255, 0.3)",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>


    </>
  )
}

export default About