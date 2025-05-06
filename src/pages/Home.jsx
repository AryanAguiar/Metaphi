import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Button, Typography, Card, CardContent, IconButton, Modal, CardMedia, TextField, Divider, useTheme, useMediaQuery, Tab, Tabs } from "@mui/material";
import { gsap } from "gsap";


//hero section
import heroImg1 from "../images/mobile application development.webp";
import heroImg2 from "../images/heroimg2.png";
import heroImg3 from "../images/Blockchain.webp";
import partner1 from "../images/partner-2.png";

import "./Home.css";

//swiper and countup 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import svg1 from "../images/folder.png";
import svg2 from "../images/handshake.svg";
import svg3 from "../images/award.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faStar, faTimes, faEnvelope, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

//service cards
import serviceicon1 from "../images/customsoftwaredev.png";
import serviceicon2 from "../images/appdev.png";
import serviceicon3 from "../images/web.png";
import serviceicon4 from "../images/ecommerce.svg";
import serviceicon5 from "../images/aiml.svg";
import serviceicon6 from "../images/iot.svg";
import serviceicon7 from "../images/devops.svg";
import serviceicon8 from "../images/salesforce.png";
import serviceicon9 from "../images/block chain development.svg";
import { ArrowUpward, ArrowDownward, ArrowBack, ArrowForward, } from "@mui/icons-material";
gsap.registerPlugin(ScrollTrigger);

import clutchlogo from "../images/clutchlogo.png";

//industries we serve

import food from "../images/industryimg.png";
import elearning from  "../images/industryimg.png";
import elearning2 from  "../images/industryimg.png";

//our development process
const steps = [
  { id: 1, title: 'Discovery', description: 'Understand the problem and define clear requirements.' },
  { id: 2, title: 'Discovery', description: 'Understand the problem and define clear requirements.' },
  { id: 3, title: 'Discovery', description: 'Understand the problem and define clear requirements.' },
  { id: 4, title: 'Discovery', description: 'Understand the problem and define clear requirements.' },
  { id: 5, title: 'Discovery', description: 'Understand the problem and define clear requirements.' },
  { id: 6, title: 'Discovery', description: 'Understand the problem and define clear requirements.' },
];

//contact us section
import contactimg from "../images/Website Creator-bro 1.png";

//form components unused
import { FastField, Formik, Form, } from "formik";
import * as Yup from "yup";

const slides = [
  {
    title: "Custom Software Development",
    subtitle: "Tailored software solutions built to fit your business needs and workflow.",
    image: heroImg2,
  },
  {
    title: "Web Development Company",
    subtitle: " Rated #1 Web Development Company in India.",
    image: heroImg1,
  },
  {
    title: "Blockchain Development Company",
    subtitle: " Rated #1 Blockchain Development Company in India.",
    image: heroImg3,
  },
];

const counters = [
  {
    value: 30,
    suffix: '+',
    label: 'Frontend Developers',
    description: 'Experienced in React, Vue, and modern UI/UX practices.',
    icon: svg1
  },
  {
    value: 30,
    suffix: '+',
    label: 'Backend Developers',
    description: 'Skilled in Node.js, Python, PHP, and scalable backend systems.',
    icon: svg1
  },
  {
    value: 30,
    suffix: '+',
    label: 'Full Stack Developers',
    description: 'Experts in end-to-end product engineering and deployment.',
    icon: svg1
  },
  {
    value: 20,
    suffix: '+',
    label: 'Industries Worked For',
    description: 'From healthcare to fintech, retail, education, and beyond.',
    icon: svg1
  },
  {
    value: 100,
    suffix: '+',
    label: 'Successful Projects',
    description: 'Completed projects delivered with measurable client success.',
    icon: svg1
  },
  {
    value: 50,
    suffix: '+',
    label: 'Global Clients',
    description: 'Trusted by businesses across North America, Europe, and Asia.',
    icon: svg1
  }
];

//cards
const services = [
  {
    id: "custom-software-dev",
    title: "Custom Software Development",
    icon: serviceicon1,
    description: "Transform your game ideas into high-quality, immersive 2D & 3D gaming experiences.",
    mainDescription: "From stunning visuals to seamless gameplay and captivating storylines, we craft interactive solutions that engage and excite players."
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: serviceicon3,
    description: "Enhance your digital presence with cutting-edge web development solutions.",
    mainDescription: " We craft dynamic, high-performance websites and applications that captivate audiences and deliver seamless user experiences."
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    icon: serviceicon2,
    description: "Empowering businesses with cutting-edge mobile solutions tailored to diverse industries.",
    mainDescription: "We craft intuitive, high-performance apps that enhance user experience, drive engagement, and deliver lasting value."
  },
  {
    id: "ai-ml",
    title: "AI/ML Solutions",
    icon: serviceicon5,
    description: "Harness the power of Artificial Intelligence and Machine Learning.",
    mainDescription: "From stunning visuals to seamless gameplay and captivating storylines, we craft interactive solutions that engage and excite players."
  },
  {
    id: "iot",
    title: "IoT & Embedded Solutions",
    icon: serviceicon8,
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

//industries we serve
const industries = [
  {
    title: 'Fintech',
    description: 'Developing secure, scalable platforms for digital payments, personal finance, and banking innovation.',
    image: elearning2,
  },
  {
    title: 'Ed-tech',
    description: 'Enhancing the learning experience for global learners through tech-driven solutions.',
    image: elearning,
  },
  {
    title: 'Healthtech',
    description: 'Leveraging smart technologies like AI, ML, IoT, and more to empower global health organizations.',
    image: food,
  },
  {
    title: 'Fintech',
    description: 'Developing secure, scalable platforms for digital payments, personal finance, and banking innovation.',
    image: elearning2,
  },
  {
    title: 'Ed-tech',
    description: 'Enhancing the learning experience for global learners through tech-driven solutions.',
    image: elearning,
  },
  {
    title: 'Healthtech',
    description: 'Leveraging smart technologies like AI, ML, IoT, and more to empower global health organizations.',
    image: food,
  },
];




const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const headerRef = useRef(null);
  const sectionRef = useRef([]);
  const addToRefs = (el) => {
    if (el && !sectionRef.current.includes(el)) {
      sectionRef.current.push(el);
    }
  };
  const lineRef = useRef(null);

  //hero section animation
  // useEffect(() => {
  //   let intervalId;

  //   const animateElements = () => {
  //     gsap.fromTo(
  //       [textRef.current, subTextRef.current, buttonRef.current, imageRef.current],
  //       { opacity: 0, y: 30 },
  //       { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.2 }
  //     );
  //   };

  //   const changeSlide = () => {
  //     gsap.to(
  //       [textRef.current, subTextRef.current, buttonRef.current, imageRef.current],
  //       {
  //         opacity: 0,
  //         y: -30,
  //         duration: 0.8,
  //         ease: "power3.inOut",
  //         onComplete: () => {
  //           setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  //         },
  //       }
  //     );
  //   };

  //   animateElements();

  //   intervalId = setInterval(() => {
  //     changeSlide();
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, []);

  useEffect(() => {
    if (!textRef.current || !imageRef.current) return;

    gsap.fromTo(
      [textRef.current, subTextRef.current, buttonRef.current, imageRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.2 }
    );
  }, [currentIndex]);


  useEffect(() => {

    //line animation
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "center" },
      {
        scaleX: 1,
        duration: 4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    );

    //about sec animation
    sectionRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);


  //our partner slider
  const logos = [
    partner1,
    partner1,
    partner1,
    partner1,
    partner1,
    partner1,
  ];

  //cards
  const [flippedCard, setFlippedCard] = useState(null);
  const handleFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  //design process animation
  const designRef = useRef([]);
  useEffect(() => {
    if (typeof window === "undefined" || !designRef.current) return;

    gsap.to(designRef.current, {
      opacity: 1,
      duration: 2,
      y: -20,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: designRef.current[0]?.parentNode,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);


  //industries animation
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabChange = (event, newValue) => {
    setActiveIndex(newValue);
  };


  //accordion function
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));



  //contact form
  const containerRef = useRef();
  const leftContactRef = useRef();
  const righContactRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftContactRef.current) {
        gsap.from(leftContactRef.current, {
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

      if (righContactRef.current) {
        gsap.from(righContactRef.current, {
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


  return (
    <>
      <div className="Ellipse-5"></div>
      {/* Hero section */}

      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          maxWidth: "none",
          minHeight: "100%",
          padding: "20px",
          color: "white",
          mt: 12,

        }}
      >
        <Box
          sx={{
            zIndex: 2,
            isolation: "isolate",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "black",
            maxWidth: "255px",
            maxHeight: "52px",
            margin: "auto",
            borderRadius: "15px",
            padding: "8px 10px",
            gap: "12px",
          }}
        >
          <Typography sx={{ color: "#fff", fontWeight: 400, fontSize: "14px" }}>
            We're hiring!
          </Typography>

          <Box
            sx={{
              display: "inline-block",
              padding: "2px",
              borderRadius: "16px",
              background: "linear-gradient(90deg, #07B9CE, #3969E7, #7D2AE7)",
              cursor: "pointer"
            }}
          >
            <Box
              sx={{
                backgroundColor: "#0B0D12",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 20px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                  background: "linear-gradient(90deg, #07B9CE, #3969E7, #7D2AE7)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Join Our Team
              </Typography>
            </Box>
          </Box>


        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          margin: "auto",
          maxWidth: "1255px",
          paddingTop: 7,
        }}>
          {/* Left Side - Text Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, padding: { md: "10px", lg: "0px" }, maxWidth: "614px" }}>
            <Typography

              variant="h3"
              className="heading"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: "linear-gradient(90deg, #00c6ff, #0072ff, #7f00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "27px", sm: "34px", md: "35px", lg: "56px", xl: "64px" },
              }}
            >
              {slides[currentIndex].title}
            </Typography>

            <Typography

              variant="h6"
              className="desc"
              sx={{
                maxWidth: "352px",
                fontWeight: "400",
                p: 0.5,
                mb: 4,
                background: "linear-gradient(145deg, #d1d1d1, #ffffff, #a3a3a3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
                fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px", xl: "20px" },
                margin: { xs: "auto", md: 0 }
              }}
            >
              {slides[currentIndex].subtitle}
            </Typography>
            <Box sx={{
              mt: { xs: 4, md: 4, lg: 5 },
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 2, sm: 3 },
              justifyContent: {xs: "center", md: "flex-start"}
            }}>

              <Link to="/contact" sx={{ marginLeft: { xs: "0", md: "20px" }, }}>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: { md: "13", lg: "16px" },
                    background: 'linear-gradient(90deg, #07B9CE, #3969E7, #7D2AE7)',
                    color: "white",
                    borderRadius: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    mb: { xs: 3, md: 0 },
                    px: { md: 3, lg: 5 },
                    py: 1,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0px 6px 24px rgba(143, 145, 144, 0.5)",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Request a quote
                </Button>
              </Link>
            </Box>

          </Box>

          {/* Right Side - Changing Image */}
          <Box

            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",

            }}
          >
            <Box
              sx={{
                width: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
                height: { xs: "300px", sm: "350px", md: "400px", lg: "450px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src={slides[currentIndex].image}
                alt="Slide Image"
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Why choose us stats */}
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          maxWidth: "none",
          minHeight: "100%",
          padding: "20px",
          color: "white",
          mt: 12,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ellipse */}
        <Box
          sx={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(600px, 80vw)",
            height: "min(300px, 30vh)",
            background: "rgba(80, 124, 236, 0.7)",
            filter: "blur(180px)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* stats section */}
        <Box
          sx={{
            maxWidth: "1440px",
            margin: "0 auto",
            px: 3,
            py: { xs: 6, md: 10 },
            textAlign: "center",
          }}
        >
          <Typography
            ref={headerRef}
            variant="h4"
            className="heading"
            sx={{
              fontWeight: "bold",
              mb: 2,
              WebkitBackgroundClip: "text",
              color: "#F3F4F7",
              fontWeight: 800,
              fontSize: { xs: "20px", sm: "24px", md: "39px", lg: "46px", xl: "64px" },
              padding: "20px",
              textAlign: "center"
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            sx={{
              color: "#F3F4F7",
              maxWidth: "689px",
              textAlign: "center",
              margin: "auto",
              fontSize: "20px",
              lineHeight: "100%"
            }}
          >
            We don’t just build software - we build smart, scalable, and sustainable digital experiences. Here’s what sets us apart:
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: 3,
              py: 6,
              px: 2,
            }}
          >
            {counters.map((counter, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "120px", sm: "150px", md: "180px" },
                  textAlign: "center",
                  color: "white",
                }}
              >
                <Box
                  component="img"
                  src={counter.icon}
                  alt={counter.label}
                  sx={{ width: 60, height: 60, mb: 1 }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "24px", md: "32px" },
                    background: "linear-gradient(90deg, #00C87F, #007FFF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <CountUp start={0} end={counter.value} duration={3} />
                  {counter.suffix || ""}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 500, fontSize: "16px", mt: 0.5 }}
                >
                  {counter.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Partners section */}
      <Container maxWidth={false} disableGutters sx={{ px: 6, py: 7, position: "relative", width: "100%" }}>
        <Box sx={{
          maxWidth: "1454px",
          width: "100%",
          margin: "0 auto",
          display: "block",
        }}>
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
              padding: "20px",
              textAlign: "center"
            }}
          >
            Our Official Partners
          </Typography>
          {/* <Divider sx={{
            width: "60px",
            height: "2px",
            backgroundColor: "#1976d2",
            margin: "0 auto 24px auto",
            borderRadius: "2px"
          }}
          /> */}
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={2000}
            allowTouchMove={true}
            breakpoints={{
              200: { slidesPerView: 2, spaceBetween: 50 },
              450: { slidesPerView: 3, spaceBetween: 50 },
              620: { slidesPerView: 3, },
              768: { slidesPerView: 4, },
              1024: { slidesPerView: 5, },
            }}
            className="marquee-swiper"
          >
            {/* Duplicate logos to ensure smooth looping */}
            {logos.concat(logos).map((logo, index) => (
              <SwiperSlide key={index} className="marquee-slide">
                <img src={logo} alt={`Logo ${index + 1}`} className="marquee-logo" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>

      {/* services section */}
      <Container maxWidth={false} disableGutters sx={{ px: 6, py: 7, position: "relative", width: "100%", overflow: "hidden" }}>
        {/* ellipse */}
        <Box
          sx={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(600px, 80vw)",
            height: "min(300px, 30vh)",
            background: "rgba(80, 124, 236, 0.7)",
            filter: "blur(180px)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <Typography
          ref={headerRef}
          variant="h4"
          className="heading"
          sx={{
            fontWeight: "800",
            mb: 2,
            background: "#F3F4F7",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "20px", sm: "24px", md: "39px", lg: "46px", xl: "64px" },
            padding: "20px",
            textAlign: "center"
          }}
        >
          Our Services
        </Typography>
        <Typography sx={{
          fontSize: "20px",
          maxWidth: "702px",
          width: "100%",
          textAlign: "center",
          margin: "auto",
          fontWeight: "400",
          lineHeight: "100%"
        }}>
          We deliver full-cycle development services tailored to your business goals. From strategy to deployment, our team ensures every solution is scalable, secure, and built for impact.
        </Typography>

        <Box
          sx={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            rowGap: 4,
            columnGap: 2,
            py: 6,
            pr: 0,
          }}
        >
          {services.map((service, index) => (
            <Box
              key={service.id}
              //onClick={() => handleFlip(index)} temp disabled flip
              sx={{
                perspective: "1200px",
                width: "100%",
                maxWidth: "400px",
                height: { xs: "300px", md: "320px", lg: "369px" },
                margin: "auto",
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
                    justifyContent: "space-between",
                    textAlign: "left",
                    cursor: "pointer",
                    borderRadius: "10px",
                    background: "#15171E",
                    color: "#fff",
                    transform: "rotateY(0deg)",
                    paddingBottom: 2,
                  }}
                >
                  <CardContent
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      p: "24px"
                    }}
                  >
                    <Box>
                      <img src={service.icon} alt={service.title} style={{ width: 40, height: 40, marginBottom: 5, marginTop: 20 }} />
                      <Typography sx={{ maxWidth: "272px", py: 2, fontWeight: "600", color: "#fff", fontSize: { xs: "20px", md: "25px", lg: "32px" }, lineHeight: "100%" }}>
                        {service.title}
                      </Typography>
                      <Typography sx={{ py: { xs: 1, md: 2 }, color: "#A3AAC1", fontSize: { xs: "15px", sm: "16px", md: "16px", lg: "20px" }, lineHeight: "100%" }}>
                        {service.description}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Typography sx={{ color: "#F3F4F7", px: "27px", fontSize: "16px", fontWeight: "700", paddingBottom: "20px " }}>
                    Learn More
                  </Typography>
                </Card>


                {/* Back Side */}
                {/* <Card
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
                    borderRadius: "10px",
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
                    <Link to="/about" onClick={(e) => e.preventDefault()}>    

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
                </Card> */}
              </Box>
            </Box>

          ))}
        </Box>
      </Container>

      {/* industries we serve */}
      <Container maxWidth={false} disableGutters sx={{ px: 6, py: 7, position: "relative", width: "100%", overflow: "hidden" }}>
        {/* ellipse */}
        <Box
          sx={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(600px, 80vw)",
            height: "min(300px, 30vh)",
            background: "rgba(80, 124, 236, 0.7)",
            filter: "blur(180px)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <Typography
          ref={headerRef}
          variant="h4"
          className="heading"
          sx={{
            fontWeight: "800",
            mb: 2,
            background: "#F3F4F7",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "20px", sm: "24px", md: "29px", lg: "36px", xl: "40px" },
            padding: "20px",
            textAlign: "left"
          }}
        >
          Our Services
        </Typography>

        <Tabs
          value={activeIndex}
          onChange={handleTabChange}
          textColor="white"
          indicatorColor="primary"
          sx={{
            mb: 3,
            maxWidth: '1100px',
            width: '100%',
            ml: 3,
            '& .MuiTab-root': {
              minWidth: 'auto', 
              marginRight: "24px",   
            },
          }}
        >
          {industries.map((industry, index) => (
            <Tab key={index} label={industry.title} sx={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#A3AAC1"
            }} />
          ))}
        </Tabs>

        <Box
          sx={{
            maxWidth: "1210px",
            margin: "0 auto",
            display: "flex",
            gap: 15
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
            <Box sx={{ flex: 1, maxWidth: "492px", maxHeight: "479px" }}>
              <Typography variant="h6" gutterBottom sx={{color: '#A3AAC1', fontSize: "28px", fontWeight: "700"}}>
                {industries[activeIndex].title}
              </Typography>
              <Typography variant="body1" sx={{color: "#A3AAC1", fontSize: "16px", fontWeight: "400"}}>{industries[activeIndex].description}</Typography>
            </Box>
          </Box>

          <Box
            component="img"
            src={industries[activeIndex].image}
            alt={industries[activeIndex].title}
            sx={{ maxWidth: '580px', maxHeight: '479px'}}
          />
        </Box>
      </Container>

      {/* Projects section */}
      {/* <Container maxWidth={false} disableGutters sx={{ px: 0, py: 9, position: "relative", width: "100%" }}>
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
            textAlign: "center"
          }}
        >
          Our Work
        </Typography>

        <Typography
          sx={{
            background: "linear-gradient(145deg, #d1d1d1, #ffffff, #a3a3a3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            fontSize: { xs: "15px", sm: "20px", md: "20px", lg: "24px", xl: "25px" },
            padding: "10px 40px",
            textAlign: "center",
            maxWidth: "1420px",
            margin: "auto"
          }}
        >
          A Glimpse of the Solutions We’ve Delivered to Global Clients
          As a leading IT company, we specialize in crafting innovative and customized solutions tailored to diverse business needs.
        </Typography>

        <Box sx={{ px: { xs: 2, sm: 5, md: 6, lg: 6, xl: 7 }, py: 8, color: "white", maxWidth: "1448px", margin: "auto" }}>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: prevRefProj.current,
              nextEl: nextRefProj.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRefProj.current;
              swiper.params.navigation.nextEl = nextRefProj.current;
            }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: "40px" }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    background: "linear-gradient(135deg, rgba(219, 220, 226, 0.29), rgba(36, 36, 36, 0.9))",
                    backdropFilter: "blur(10px)",
                    borderRadius: 4,
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.1)",
                    transition: "0.3s",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    "&:hover": {
                      borderColor: "#00ffff",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{ height: 180, objectFit: "cover" }}
                  />
                  <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight={600} sx={{ color: "white", marginBottom: 2 }}>
                      {project.title}
                    </Typography>
                    <Button
                      sx={{
                        alignSelf: "flex-start",
                        marginTop: "auto",
                        background: "linear-gradient(135deg, rgba(9, 12, 53, 0.29), rgba(36, 36, 36, 0.9))",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#00b2e6",
                        },
                      }}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-end", lg: "center" },
              gap: 2,
              mb: 2,
            }}
          >
            <IconButton
              ref={prevRefProj}
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(9, 12, 53, 0.29), rgba(36, 36, 36, 0.9))",
                color: "#fff",
                boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                opacity: 1,
                cursor: "pointer",
                "&:hover": {
                  background: "linear-gradient(135deg, rgba(9, 12, 53, 0.5), rgba(36, 36, 36, 1))",
                },
              }}
            >
              <ArrowBack />
            </IconButton>

            <IconButton
              ref={nextRefProj}

              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(9, 12, 53, 0.29), rgba(36, 36, 36, 0.9))",
                color: "#fff",
                boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                opacity: 1,
                mb: 3,
                cursor: "pointer",
                "&:hover": {
                  background: "linear-gradient(135deg, rgba(9, 12, 53, 0.5), rgba(36, 36, 36, 1))",
                },
              }}
            >
              <ArrowForward />
            </IconButton>

          </Box>
 
          <Box sx={{ textAlign: "center", marginTop: 3 }}>
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
              VIEW MORE
            </Button>
          </Box>
        </Box>
      </Container> */}

      {/* Our Developemnt process */}
      <Container maxWidth={false} disableGutters sx={{ px: 0, py: 9, position: "relative", width: "100%", position: "relative", overflow: "hidden", }}>
        {/* ellipse */}
        <Box
          sx={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(600px, 80vw)",
            height: "min(300px, 30vh)",
            background: "rgba(80, 124, 236, 0.7)",
            filter: "blur(180px)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <Typography
          ref={headerRef}
          variant="h4"
          className="heading"
          sx={{
            fontWeight: "bold",
            mb: 2,
            WebkitBackgroundClip: "text",
            color: "#F3F4F7",
            fontWeight: 800,
            fontSize: { xs: "20px", sm: "24px", md: "39px", lg: "46px", xl: "64px" },
            padding: "20px",
            textAlign: "center"
          }}
        >
          Our Development Process
        </Typography>



      </Container>

      {/* Testimonials section */}
      <Container maxWidth={false} disableGutters sx={{ px: 0, py: 20, position: "relative", width: "100%" }}>
        <Typography
          ref={headerRef}
          variant="h4"
          className="heading"
          sx={{
            fontWeight: "bold",
            mb: 2,
            WebkitBackgroundClip: "text",
            color: "#F3F4F7",
            fontWeight: 800,
            fontSize: { xs: "20px", sm: "24px", md: "39px", lg: "46px", xl: "64px" },
            padding: "20px",
            textAlign: "center"
          }}
        >
          Client Highlights / Testimonials
        </Typography>
        <Typography
          sx={{
            color: "#F3F4F7",
            maxWidth: "689px",
            textAlign: "center",
            margin: "auto",
            fontSize: "20px",
            lineHeight: "100%"
          }}
        >
          (Coming Soon)
        </Typography>
      </Container>

      {/* Contact us section */}
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          maxWidth: "none",
          minHeight: "100%",
          padding: "20px",
          background: "#F3F4F7",
          mt: 12
        }}
      >
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          margin: "auto",
          maxWidth: "1255px",
          paddingTop: 7,
        }}>
          {/* Left Side - Text Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, padding: "15px", maxWidth: "602px" }}>
            <Typography
              className="heading"
              sx={{
                fontWeight: "800",
                mb: 2,
                color: "#0A0C10",
                fontSize: { xs: "27px", sm: "34px", md: "35px", lg: "56px", xl: "64px" },
              }}
            >
              Let’s Build Something Great Together
            </Typography>

            <Box sx={{
              mt: { xs: 4, md: 4, lg: 5 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 2, sm: 3 },
            }}>
              <Link to="/contact">
                <Button
                  variant="contained"
                  sx={{
                    fontSize: { xs: '12px', sm: '13px', lg: '16px' },
                    background: "#15171E",
                    color: "white",
                    borderRadius: "999px",
                    fontWeight: 600,
                    textTransform: "none",
                    px: { xs: 2, sm: 3, lg: 5 },
                    py: 1,
                    transition: "all 0.3s ease",
                    width: { xs: '100%', sm: 'auto' },
                    "&:hover": {
                      boxShadow: "0px 6px 24px rgba(143, 145, 144, 0.5)",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Link>

              <Link to="/contact" sx={{ marginLeft: { xs: "0", md: "20px" } }}>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: { xs: '12px', sm: '13px', lg: '16px' },
                    background: "#15171E",
                    color: "white",
                    borderRadius: "999px",
                    fontWeight: 600,
                    textTransform: "none",
                    px: { xs: 2, sm: 3, lg: 5 },
                    py: 1,
                    transition: "all 0.3s ease",
                    width: { xs: '100%', sm: 'auto' },
                    "&:hover": {
                      boxShadow: "0px 6px 24px rgba(143, 145, 144, 0.5)",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Explore More
                </Button>
              </Link>
            </Box>


          </Box>

          {/* Right Side */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",

            }}
          >
            <Box
              sx={{
                width: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
                height: { xs: "300px", sm: "350px", md: "400px", lg: "450px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src={contactimg}
                alt="Slide Image"
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        </Box>

      </Container>

      {/* <Container ref={containerRef} maxWidth={false} disableGutters sx={{ px: 0, py: 0, position: "relative", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            maxWidth: "1480px",
            flexDirection: { xs: "column", md: "row" },
            py: { xs: 6, md: 10 },
            px: { xs: 0, md: 6, lg: 6, xl: 3 },
            gap: { xs: 5, md: 8 },
            justifyContent: "center",
            alignItems: "center",
            overflowX: "hidden",
            boxSizing: "border-box",
            margin: "auto"
          }}
        >
       
          <Box
            ref={leftContactRef}
            sx={{
              flex: 1,
              minWidth: { xs: "100%", md: "300px" },
              color: "white",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h3" fontWeight="bold" fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}>
              Let’s Build Something{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #0D47A1, #009688, #00C853)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Extraordinary
              </span>{" "}
              Together!
            </Typography>
            <Typography sx={{ mt: 2, color: "#BBBBBB", fontSize: { xs: "0.95rem", md: "1rem" } }}>
              Share your project details and take the first step toward success.
            </Typography>

            {[{
              icon: faEnvelope,
              label: "Email",
              value: "contact@test.com",
            }, {
              icon: faCalendar,
              label: "Schedule a Call",
              value: "Free Consultation",
            }].map(({ icon, label, value }, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", mt: 4, justifyContent: { xs: "center", md: "flex-start" } }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#0E2A3A",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                  }}
                >
                  <FontAwesomeIcon icon={icon} color="#00C8FF" size="lg" />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="body2" sx={{ color: "#AAAAAA" }}>{label}</Typography>
                  <Typography variant="body1" fontWeight="bold">{value}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

    
          <Box
            ref={righContactRef}
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: { xs: "250px", sm: "500px" },
              minWidth: 0,
              background: "rgba(17, 17, 17, 0.85)",
              backdropFilter: "blur(12px)",
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: 3,
              boxShadow: "0 0 30px rgba(0,200,255,0.1)",
              margin: "auto",
            }}
          >
            <Formik
              initialValues={{ email: "", jobTitle: "", message: "" }}
              validationSchema={Yup.object({
                email: Yup.string().email("Invalid email").required("Email is required"),
                jobTitle: Yup.string().required("Job title is required"),
                message: Yup.string().required("Message is required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                console.log("Form Data:", values);
                alert("Message Sent Successfully!");
                setSubmitting(false);
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  {[
                    { name: "email", label: "Email*", type: "text" },
                    { name: "jobTitle", label: "Job Title*", type: "text" },
                    { name: "message", label: "Message*", type: "textarea" },
                  ].map(({ name, label, type }) => (
                    <FastField key={name} name={name}>
                      {({ field, meta }) => (
                        <TextField
                          {...field}
                          fullWidth
                          multiline={type === "textarea"}
                          rows={type === "textarea" ? 4 : undefined}
                          label={label}
                          variant="outlined"
                          error={meta.touched && Boolean(meta.error)}
                          helperText={meta.touched && meta.error}
                          sx={{
                            '& input:-webkit-autofill': {
                              WebkitBoxShadow: '0 0 0 1000px #121212 inset',
                              WebkitTextFillColor: '#fff',
                              caretColor: '#fff',
                              transition: 'background-color 5000s ease-in-out 0s',
                            },

                            mb: 3,
                            backgroundColor: "#222",
                            borderRadius: 1,
                            "& .MuiInputBase-input": { color: "white" },
                            "& .MuiInputLabel-root": { color: "#ccc" },
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": { borderColor: "#444" },
                              "&:hover fieldset": { borderColor: "#00C8FF" },
                              "&.Mui-focused fieldset": { borderColor: "#00C8FF" },
                            },
                          }}
                        />
                      )}
                    </FastField>
                  ))}

                  <Button
                    type="submit"
                    fullWidth
                    sx={{
                      background: "linear-gradient(90deg, #0D47A1, #009688, #00C853)",
                      color: "white",
                      fontWeight: "bold",
                      py: 1.5,
                      mt: 2,
                      borderRadius: 2,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                  >
                    Send Message
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>

        </Box>
      </Container> */}

    </>
  );
};

export default Home;
