import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Button, Typography, Card, CardContent, IconButton, Modal, CardMedia, TextField, Divider, useTheme, useMediaQuery } from "@mui/material";
import { gsap } from "gsap";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

import food from "../images/publichealth.png";
import elearning from "../images/college project-bro (1) 1.png";
import elearning2 from "../images/Manage money-pana 1.png";

//why join us accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import joinusIcon1 from "../images/team_icon.png";

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

//design process
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
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 78.188 78.188" fill="none"><g><path d="M75.006,12.39c-1.104-0.208-2.229,0.218-2.918,1.101c-0.084,0.106-0.17,0.21-0.266,0.306L66,19.619c-1.256,1.255-3.442,1.255-4.698,0l-2.731-2.731c-1.295-1.296-1.297-3.404,0-4.699l5.826-5.828c0.096-0.095,0.197-0.179,0.301-0.26c0.885-0.691,1.309-1.816,1.102-2.918s-1.012-1.997-2.086-2.319c-1.899-0.57-3.871-0.859-5.858-0.859c-5.429,0-10.534,2.114-14.375,5.953c-4.843,4.842-6.892,11.75-5.557,18.391L24.346,37.925c-1.319-0.265-2.663-0.398-4.014-0.398c-5.429,0-10.534,2.114-14.375,5.954c-5.296,5.297-7.249,13.05-5.096,20.232c0.322,1.073,1.216,1.879,2.318,2.087c1.101,0.209,2.228-0.217,2.919-1.102c0.086-0.109,0.176-0.217,0.265-0.306l5.825-5.822c1.255-1.254,3.442-1.255,4.698,0.001l2.731,2.731c1.295,1.296,1.295,3.403,0,4.698l-5.833,5.832c-0.093,0.095-0.194,0.176-0.296,0.256c-0.884,0.689-1.309,1.814-1.101,2.918c0.208,1.103,1.012,1.997,2.086,2.318c1.9,0.569,3.873,0.858,5.861,0.858l0,0c5.43,0,10.534-2.114,14.372-5.953c4.844-4.843,6.894-11.75,5.557-18.392l13.578-13.576c1.317,0.265,2.663,0.398,4.015,0.398c5.43,0,10.534-2.115,14.374-5.955c5.298-5.297,7.249-13.05,5.097-20.233C77.002,13.402,76.11,12.598,75.006,12.39z" stroke="#007FFF" strokeWidth="2" fill="none" /><path d="M67.989,30.467c-2.707,2.706-6.306,4.196-10.133,4.196c-1.388,0-2.763-0.199-4.088-0.592c-1.057-0.311-2.195-0.022-2.975,0.755L34.824,50.794c-0.778,0.777-1.068,1.92-0.755,2.975c1.497,5.052,0.116,10.501-3.605,14.221c-2.305,2.307-5.258,3.729-8.448,4.101l1.843-1.845c3.635-3.635,3.635-9.549,0-13.184l-2.731-2.73c-1.761-1.763-4.103-2.732-6.593-2.731c-2.49,0-4.832,0.97-6.591,2.729l-1.845,1.845c0.372-3.145,1.781-6.132,4.1-8.449c2.707-2.709,6.305-4.199,10.132-4.199c1.387,0,2.762,0.199,4.087,0.592c1.055,0.314,2.195,0.022,2.974-0.754l15.97-15.97c0.777-0.777,1.066-1.918,0.756-2.973c-1.496-5.053-0.115-10.502,3.604-14.222c2.307-2.305,5.26-3.729,8.449-4.099l-1.844,1.844c-3.635,3.633-3.635,9.548,0,13.186l2.732,2.73c1.762,1.761,4.102,2.731,6.592,2.731c2.49,0,4.832-0.97,6.592-2.73l1.844-1.843C71.715,25.162,70.306,28.148,67.989,30.467z" stroke="#00FF7F" strokeWidth="2" fill="none" /></g></svg>
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

//accordion data
const accordionData = [
  { title: "Strong Tech Team", content: "Details about the strong tech team.", icon: joinusIcon1 },
  { title: "Fast & Reliable Delivery", content: "Details about fast & reliable delivery.", icon: joinusIcon1 },
  { title: "Innovation-First Approach", content: "Details about innovation-first approach.", icon: joinusIcon1 },
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
  useEffect(() => {
    let intervalId;

    const animateElements = () => {
      gsap.fromTo(
        [textRef.current, subTextRef.current, buttonRef.current, imageRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.2 }
      );
    };

    const changeSlide = () => {
      gsap.to(
        [textRef.current, subTextRef.current, buttonRef.current, imageRef.current],
        {
          opacity: 0,
          y: -30,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
          },
        }
      );
    };

    animateElements();

    intervalId = setInterval(() => {
      changeSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

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
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, padding: "15px", maxWidth: "614px" }}>
            <Typography
              ref={textRef}
              variant="h3"
              className="heading"
              sx={{
                fontWeight: "800",
                mb: 2,
                color: "#F3F4F7",
                fontSize: { xs: "27px", sm: "34px", md: "35px", lg: "56px", xl: "64px" },
              }}
            >
              {slides[currentIndex].title}
            </Typography>

            <Typography
              ref={subTextRef}
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
              }}
            >
              {slides[currentIndex].subtitle}
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
                    fontSize: { md: "13", lg: "16px" },
                    background: "linear-gradient(90deg, #00C853, #00E676)",
                    color: "black",
                    borderRadius: "999px",
                    fontWeight: 600,
                    textTransform: "none",
                    px: { md: 3, lg: 5 },
                    py: 1,
                    boxShadow: "0px 4px 20px rgba(0, 229, 123, 0.4)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0px 6px 24px rgba(0, 229, 123, 0.5)",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Link>

              <Link to="/contact" sx={{ marginLeft: { xs: "0", md: "20px" }, }}>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: { md: "13", lg: "16px" },
                    background: "#15171E",
                    color: "white",
                    borderRadius: "999px",
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
                  Explore More
                </Button>
              </Link>
            </Box>

          </Box>

          {/* Right Side - Changing Image */}
          <Box
            ref={imageRef}
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

      <div className="Ellipse-6"></div>
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          maxWidth: "none",
          minHeight: "100%",
          padding: "20px",
          color: "white",
          mt: 12
        }}
      >

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
      <Container maxWidth={false} disableGutters sx={{ px: 6, py: 7, position: "relative", width: "100%" }}>
        <Typography
          ref={headerRef}
          variant="h4"
          className="heading"
          sx={{
            fontWeight: "800",
            mb: 2,
            background: "linear-gradient(145deg, #d1d1d1, #ffffff, #a3a3a3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
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
                  <Typography sx={{ color: "#F3F4F7", px: "18px", fontSize: "16px", fontWeight: "700", paddingBottom: "20px " }}>
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

      {/* Design steps section */}
      {/* <Container maxWidth={false} disableGutters sx={{ px: 0, py: 9, position: "relative", width: "100%" }}>
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
          Our Design Process
        </Typography>

        <Box sx={{ maxWidth: 'xl', mx: 'auto', pr: { xs: null, lg: 1.5 } }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              padding: 3,
              gap: 8,
              justifyContent: "center",
              mt: 6,
            }}
          >
            {designT.map((step, index) => (
              <Box
                key={step.id}
                ref={(el) => (designRef.current[index] = el)}
                sx={{
                  width: { xs: "100%", sm: "30%", md: "25%" },
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "white",
                  opacity: 0
                }}
              >
                <Box mb={2}>{step.svg}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

      </Container> */}

      {/* industries we serve */}
      <Container maxWidth={false} disableGutters sx={{ px: 0, py: 9, position: "relative", width: "100%", backgroundColor: "#EDEEF3" }}>
        <Typography
          ref={headerRef}
          variant="h4"
          className="heading"
          sx={{
            fontWeight: "bold",
            mb: 2,
            WebkitBackgroundClip: "text",
            color: "#0A0C10",
            fontWeight: 800,
            fontSize: { xs: "20px", sm: "24px", md: "39px", lg: "46px", xl: "64px" },
            padding: "20px",
            textAlign: "center"
          }}
        >
          Industries We Work With
        </Typography>
        <Typography
          sx={{
            color: "#15171E",
            maxWidth: "702px",
            textAlign: "center",
            margin: "auto",
            fontSize: "20px",
            lineHeight: "100%"
          }}
        >
          Discover why Next-Gen AI Summit is the must-attend event for AI professionals, innovators, and industry leaders.
        </Typography>

        <Box sx={{ maxWidth: "1250px", px: 2, py: 4, margin: "auto", position: "relative" }}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              600: { slidesPerView: 2 },
              900: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    borderRadius: 4,
                    height: "477px",
                    maxWidth: "400px",
                    width: "100%",
                    position: "relative",
                    color: "#fff",
                    boxShadow: "0px 4px 20px #3C71F736",
                    transition: "transform 0.3s ease",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    marginBottom: "30px",
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 2, sm: 3, md: "28px" },
                    }}
                  >
                    <Box
                      component="img"
                      src={industry.image}
                      alt=""
                      sx={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                    />

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        mt: 2,
                        color: "#0A0C10",
                        textAlign: "center",
                        fontSize: "32px",
                      }}
                    >
                      {industry.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#15171E",
                        fontSize: { xs: "15px", sm: "20px" },
                        textAlign: "center"
                      }}
                    >
                      {industry.description}
                    </Typography>
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
              mt: 2,
            }}
          >
            <IconButton
              ref={prevRef}
              disabled={isBeginning}
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(9, 12, 53, 0.29), rgba(36, 36, 36, 0.9))",
                color: "#fff",
                boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                opacity: isBeginning ? 0.5 : 1,
                cursor: isBeginning ? "not-allowed" : "pointer",
                "&:hover": {
                  background: isBeginning
                    ? "linear-gradient(135deg, rgba(9, 12, 53, 0.29), rgba(36, 36, 36, 0.9))"
                    : "linear-gradient(135deg, rgba(9, 12, 53, 0.5), rgba(36, 36, 36, 1))",
                },
              }}
            >
              <ArrowBack />
            </IconButton>

            <IconButton
              ref={nextRef}
              disabled={isEnd}
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(9, 12, 53, 0.29), rgba(36, 36, 36, 0.9))",
                color: "#fff",
                boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                opacity: isEnd ? 0.5 : 1,
                cursor: isEnd ? "not-allowed" : "pointer",
                "&:hover": {
                  background: isEnd
                    ? "linear-gradient(135deg, rgba(9, 12, 53, 0.29), rgba(36, 36, 36, 0.9))"
                    : "linear-gradient(135deg, rgba(9, 12, 53, 0.5), rgba(36, 36, 36, 1))",
                },
              }}
            >
              <ArrowForward />
            </IconButton>

          </Box>
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

      {/* Why choose us section */}
      <Container maxWidth={false} disableGutters sx={{ px: 0, py: 9, position: "relative", width: "100%" }}>
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

        <Box sx={{ maxWidth: "1250px", px: 2, py: 6, margin: "auto", position: "relative" }}>
          {accordionData.map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: '#121212',
                borderRadius: '20px',
                mb: 2,
                p: "9px",
                boxShadow: expanded === index
                  ? '0 0 10px #00ff95'
                  : '0 0 5px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease',
                backgroundImage: isMobile
                  ? `
                 radial-gradient(circle at 10% 170%, #37de8d 0%, rgba(0, 0, 0, 0) 40%),
                 radial-gradient(circle at 90% 160%, #3c71f7 0%, rgba(0, 0, 0, 0) 40%),
                 linear-gradient(to bottom, #15171e, #15171e)
               `
                  : `
                 radial-gradient(circle at 10% 540%, #37de8d 0%, rgba(0, 0, 0, 0) 40%),
                 radial-gradient(circle at 90% 500%, #3c71f7 0%, rgba(0, 0, 0, 0) 40%),
                 linear-gradient(to bottom, #15171e, #15171e)
               `,
              }}
            >

              <Accordion
                expanded={expanded === index}
                onChange={handleChange(index)}
                sx={{
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#00ff95', fontSize: "32px" }} />}
                  aria-controls="panel-content"
                  id="panel-header"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    minHeight: 64,
                    flexWrap: 'wrap',
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 3,
                      backgroundColor: '#37de8d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      mr: { xs: 2, sm: 4 },
                    }}
                  >
                    <img src={joinusIcon1} alt="" style={{ width: 34, height: 34 }} />
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: '#fff',
                      fontSize: {
                        xs: '20px',
                        sm: '24px',
                        md: '28px',
                        lg: '32px',
                      },
                      flexGrow: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                </AccordionSummary>

                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mx: 3 }} />

                <AccordionDetails sx={{ color: '#bbb', px: 3, py: 2 }}>
                  {item.content}
                </AccordionDetails>
              </Accordion>
            </Box>

          ))}
        </Box>

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
