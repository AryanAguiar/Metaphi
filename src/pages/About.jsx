import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Button, Typography, Card, CardContent, IconButton, Modal, CardMedia, TextField, MenuItem, Divider } from "@mui/material";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
import { Lightbulb, Build, ViewInAr, SportsEsports, TrendingUp, CloudSync, Verified } from "@mui/icons-material";

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

const features = [
  {
    icon: <Lightbulb sx={{ fontSize: 40, color: "#FFEA00" }} />,
    title: "Innovation-Driven Approach",
    description:
      "We integrate AI, IoT, and advanced stacks to future-proof your business.",
  },
  {
    icon: <Build sx={{ fontSize: 40, color: "#00B0FF" }} />,
    title: "Custom Solutions, Tailored for You",
    description:
      "Unique solutions for software, apps, web platforms, and integrations.",
  },
  {
    icon: <SportsEsports sx={{ fontSize: 40, color: "#F50057" }} />,
    title: "Game-Changing Development",
    description:
      "From games to 3D and animation—we create powerful, interactive content.",
  },
  {
    icon: <TrendingUp sx={{ fontSize: 40, color: "#FF6F00" }} />,
    title: "Startup-Friendly, Scalable Growth",
    description:
      "MVPs, staff augmentation, and growth strategies for all sizes.",
  },
  {
    icon: <CloudSync sx={{ fontSize: 40, color: "#2979FF" }} />,
    title: "Seamless Tech Integration",
    description:
      "Salesforce, DevOps, cloud, and embedded systems—smooth and scalable.",
  },
  {
    icon: <Verified sx={{ fontSize: 40, color: "#76FF03" }} />,
    title: "Proven Track Record",
    description:
      "Experience across healthcare, fintech, real estate, gaming, and more.",
  },
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
  const handleFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  //why choose us section animation
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Left box 
    gsap.fromTo(
      leftRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Right box
    gsap.fromTo(
      rightRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  //business types section
  const featureRefs = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".business-item").forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, featureRefs);

    return () => ctx.revert();
  }, []);

  //mission and vision animation
  const containerRef = useRef();
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (missionRef.current) {
        gsap.from(missionRef.current, {
          x: -50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (visionRef.current) {
        gsap.from(visionRef.current, {
          x: 50,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  //careers section animation
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(sectionRef.current, {
  //     y: 50,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top 80%",  
  //       toggleActions: "play none none none",
  //     },
  //   });
  // }, []);

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
              onClick={() => handleFlip(index)}
              sx={{
                perspective: "1200px",
                width: "100%",
                height: "290px",
              }}
            >
              <Box
                className={`flip-card-inner ${flippedCard === index ? "flipped" : ""}`}
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              >
                {/* Front Side */}
                <Card
                  className="card-face front"
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    cursor: "pointer",
                    borderRadius: "20px",
                    boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.1)",
                    background: "linear-gradient(135deg, rgba(9, 12, 53, 0.29), rgba(36, 36, 36, 0.9))",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    transform: "rotateY(0deg)",
                  }}
                >
                  <CardContent>
                    <img src={service.icon} alt={service.title} style={{ width: 50, height: 50, marginBottom: 5 }} />
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>{service.title}</Typography>
                    <Typography variant="body2" sx={{ color: "#ddd" }}>{service.description}</Typography>
                  </CardContent>
                  <Typography variant="caption" sx={{ color: "#ccc", mt: 1, fontSize: 12, opacity: 0.7 }}>
                    Click to flip →
                  </Typography>
                </Card>

                {/* Back Side */}
                <Card
                  className="card-face back"
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "20px",
                    background: "linear-gradient(135deg, rgba(30, 30, 30, 0.8), rgba(15, 15, 15, 0.9))",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    textAlign: "center",
                    cursor: "pointer",
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
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <img src={service.icon} alt={service.title} style={{ width: 40, height: 40, objectFit: "contain" }} />
                      <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: { xs: "14px", lg: "20px" } }}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>{service.mainDescription}</Typography>
                    <Link to="/about">
                      <Button
                        sx={{
                          mt: 1,
                          px: 3,
                          py: 1.5,
                          fontSize: "14px",
                          fontWeight: "bold",
                          borderRadius: "12px",
                          background: "linear-gradient(135deg, rgba(30, 30, 30, 0.8), rgba(15, 15, 15, 0.9))",
                          color: "#fff",
                          boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.1)",
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
            </Box>

          ))}
        </Box>
      </Container>

      {/* why choose us section */}
      <Container id="why-choose-us" maxWidth={false} disableGutters sx={{ px: 0, py: 9, position: "relative", width: "100%" }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight={700} color="#fff">
            Why Choose Metaphi Innovations
          </Typography>
          <Typography color="#bbb" mt={2} maxWidth="700px" mx="auto">
            At Metaphi Innovations, we don’t just build solutions—we craft experiences that redefine digital transformation.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            justifyContent: "space-between",
            gap: 4,
            px: { xs: 4, sm: 7, md: 6 },
            py: { xs: 6, md: 10 },
            maxWidth: "1440px",
            margin: "auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Left */}
          <Box ref={leftRef} sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              gutterBottom
              sx={{
                fontSize: {
                  xs: "17px",
                  sm: "26px",
                  md: "30px",
                  lg: "36px",
                  xl: "40px",
                },
                color: "white",
              }}
            >
              Building Smarter Businesses with Advanced Technology
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "17px", lg: "18px" },
                color: "white",
              }}
            >
              As a leading app development company in India,{" "}
              <strong>Metaphi Innovations</strong> has collaborated with many businesses,
              from startups to enterprises, delivering top-tier solutions across industries.
              We offer a comprehensive range of IT consulting services tailored to meet diverse business needs.
            </Typography>
          </Box>

          {/* Right */}
          <Box
            ref={rightRef}
            sx={{
              flex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 4,
              padding: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "24px",
                  md: "26px",
                  lg: "30px",
                },
                color: "white",
              }}
            >
              Innovate with Us!
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "17px", lg: "18px" },
                color: "white",
              }}
              gutterBottom
            >
              Connect with our expert IT transformation team and take the next step toward
              groundbreaking innovation for your business.
            </Typography>
            <Link to={"/contact"}>
              <Button
                variant="contained"
                sx={{
                  alignSelf: { xs: "center", md: "flex-start" },
                  mt: 3,
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 500,
                  color: "white",
                  background: "linear-gradient(90deg, #0D47A1, #009688, #00C853)",
                  "&:hover": {
                    background: "linear-gradient(to right, #00eaff, #0066ff)",
                  },
                }}
              >
                DROP QUERIES
              </Button>
            </Link>

          </Box>
        </Box>

        <Box
          ref={featureRefs}
          sx={{
            py: { xs: 6, md: 10 },
            px: { xs: 3, sm: 5, md: 6 },
            maxWidth: "1440px",
            mx: "auto",
          }}
        >
          <Typography
            ref={headerRef}
            variant="h4"
            className="heading"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(145deg, #d1d1d1, #ffffff, #a3a3a3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              fontSize: { xs: "20px", sm: "24px", md: "29px", lg: "36px", xl: "46px" },
              padding: "10px",
              textAlign: "center",
              mb: 5
            }}
          >
            Tailored Solutions for Every Business Type
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            {features.map((item, idx) => (
              <Box
                key={idx}
                ref={(el) => (itemRefs.current[idx] = el)}
                className="business-item"
                sx={{
                  flex: {
                    xs: "1 1 100%",
                    md: "1 1 calc(40% - 16px)",
                    lg: "1 1 calc(35% - 18px)",
                  },
                  minHeight: "120px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(15px)",
                  borderRadius: 3,
                  px: { xs: 3, sm: 5 },
                  py: { xs: 4, sm: 5 },
                  color: "white",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    color: "#ddd",
                  }}
                >
                  {item.icon}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "18px", sm: "20px" },
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    color: "#ddd",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* mission and vision */}
      <Container ref={containerRef} id="mission-vision" maxWidth={false} disableGutters sx={{ px: 6, py: 7, position: "relative", width: "100%" }}>

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
          Our Mission & Vision
        </Typography>

        <Box
          sx={{
            maxWidth: "1440px",
            mx: "auto",
            py: { xs: 6, sm: 10 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 10, md: 12 },
            color: "#fff",
          }}
        >
          {/* Mission */}
          <Box ref={missionRef} sx={{ flex: 1, minWidth: "200px", textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{
                color: "#f25c66",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: 1,
                textTransform: "uppercase",
                mb: 1,
                textAlign: "left"
              }}
            >
              Metaphi Innovations // Our Mission
            </Typography>

            <Divider sx={{ backgroundColor: "#f25c66", width: "40px", mb: 4, }} />

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
                lineHeight: 1.1,
                mb: 4,
              }}
            >
              Mission
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#bbb",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", sm: "1.125rem" },
              }}
            >
              At{" "}
              <Box component="span" sx={{ color: "#fff", fontWeight: 500 }}>
                Metaphi Innovations
              </Box>
              , our mission is to empower businesses through cutting-edge digital
              transformation. We engineer groundbreaking and scalable solutions in{" "}
              <Box component="span" sx={{ color: "#fff", fontWeight: 500 }}>
                AR, VR, AI, Spatial Computing, and Web3
              </Box>
              , enabling our clients to redefine experiences, enhance efficiency, and
              unlock new opportunities for growth.
            </Typography>
          </Box>

          {/* Vision */}
          <Box ref={visionRef} sx={{ flex: 1, minWidth: "200px", textAlign: { xs: "center", md: "left" } }}>
            <Typography
              sx={{
                color: "#f25c66",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: 1,
                textTransform: "uppercase",
                mb: 1,
                textAlign: "left"
              }}
            >
              Metaphi Innovations // Our Vision
            </Typography>

            <Divider sx={{ backgroundColor: "#f25c66", width: "40px", mb: 4 }} />

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
                lineHeight: 1.1,
                mb: 4,
              }}
            >
              Vision
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#bbb",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", sm: "1.125rem" },
              }}
            >
              Our vision is to be a global leader in immersive technology and digital
              innovation, pioneering next-gen solutions that transform industries. We
              strive to push the boundaries of technology, creativity, and intelligence,
              acting as a catalyst in the evolution of the{" "}
              <Box component="span" sx={{ color: "#fff", fontWeight: 500 }}>
                Metaverse, AI-driven ecosystems
              </Box>
              , and future-ready digital experiences.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* careers  */}
      <Container id="careers" ref={sectionRef} maxWidth={false} disableGutters sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", px: 6, py: 7, position: "relative", width: "100%" }}>

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
          Careers at Metaphi
        </Typography>


        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Join Us & Build the Future of Tech!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem" },
              color: "#bbb",
              lineHeight: 1.8,
              mb: 5,
            }}
          >
            At{" "}
            <Box component="span" sx={{ color: "#fff", fontWeight: 500 }}>
              Metaphi Innovations
            </Box>
            , we don’t just build technology—we create experiences that shape the
            digital world. If you’re passionate about{" "}
            <Box component="span" sx={{ color: "#fff", fontWeight: 500 }}>
              Web, App, and Custom Software Development
            </Box>
            , and next-gen innovations, this is where you belong.
          </Typography>

          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #0D47A1, #00C853)",
              color: "#fff",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              borderRadius: "999px",
              textTransform: "none"
            }}
          >
            Explore Careers
          </Button>
        </Box>

      </Container>

    </>
  )
}

export default About