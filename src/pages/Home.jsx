import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Button, Typography, Card, CardContent, IconButton } from "@mui/material";
import { gsap } from "gsap";
import heroImg1 from "../images/webdev.png";
import partner1 from "../images/partner-2.png";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import svg1 from "../images/folder.png";
import svg2 from "../images/handshake.svg";
import svg3 from "../images/award.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import serviceicon1 from "../images/gamedev.svg";
import serviceicon2 from "../images/appdev.svg";
import serviceicon3 from "../images/webdev.svg";
import serviceicon4 from "../images/ecommerce.svg";
import serviceicon5 from "../images/aiml.svg";
import serviceicon6 from "../images/iot.svg";
import serviceicon7 from "../images/devops.svg";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
gsap.registerPlugin(ScrollTrigger);
import dedicatedIcon from "../images/Dedicated.svg";
import supportIcon from "../images/customersupport.svg";
import clientCentricIcon from "../images/clientcetric.svg";
import agileIcon from "../images/agiledev.svg";
import enhancementIcon from "../images/enhancement.svg";
import qualityIcon from "../images/quality.svg";
import dataProtectionIcon from "../images/dataprotec.svg";
import dataBackupIcon from "../images/databackup.svg";
import { useMemo } from "react";

const slides = [
  {
    title: "App Development Company",
    subtitle: " Rated # 1  Mobile App Development Company in India.",
    image: heroImg1,
  },
  {
    title: "Web Development Company",
    subtitle: " Rated #1 Web Development Company in India.",
    image: heroImg1,
  },
  {
    title: "Blockchain Development Company",
    subtitle: " Rated #1 Blockchain Development Company in India.",
    image: heroImg1,
  },
];

const counters = [
  { value: 50, label: "Projects Completed", icon: svg1 },
  { value: 40, label: "Trusted Partners", icon: svg2 },
  { value: 10, label: "Innovation Awards Won", icon: svg3 },
];

//cards
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
    icon: "https://cdn-icons-png.flaticon.com/128/4881/4881901.png",
    description: "Empower your business with decentralized, secure, and innovative blockchain solutions.",
    mainDescription: "From stunning visuals to seamless gameplay and captivating storylines, we craft interactive solutions that engage and excite players."
  },
  {
    id: "salesforce",
    title: "Salesforce Solutions",
    icon: "https://cdn-icons-png.flaticon.com/128/889/889648.png",
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

//strategic execution features
const features = [
  {
    title: "Dedicated Development Team",
    description: "Our dedicated development team brings years of expertise to every project, ensuring optimal results by maximizing their skills to meet your development needs.",
    img: dedicatedIcon,
  },
  {
    title: "Excellent Support",
    description: "We are always available to assist our clients, ensuring their expectations and requirements are met with exceptional service.",
    img: supportIcon,
  },
  {
    title: "Client-Centric Development",
    description: "We tailor solutions for web, mobile, and blockchain, meticulously aligning them with client needs to enhance performance and innovation.",
    img: clientCentricIcon,
  },
  {
    title: "Agile Development",
    description: "We adhere to the Agile development process, ensuring reliable, scalable, and efficient project delivery.",
    img: agileIcon,
  },
  {
    title: "Enhancement",
    description: "Our technical team is always ready to incorporate your suggestions and refinements, ensuring solutions that exceed expectations.",
    img: enhancementIcon,
  },
  {
    title: "Quality Deliverance",
    description: "We are committed to delivering high-quality products, leveraging our expertise to create exceptional solutions for our clients.",
    img: qualityIcon,
  },
  {
    title: "Data Protection",
    description: "We implement industry-leading security measures to safeguard your data, ensuring confidentiality and the uniqueness of your project.",
    img: dataProtectionIcon,
  },
  {
    title: "Data Backups",
    description: "We securely maintain project backups, minimizing the risk of data loss and ensuring seamless recovery when needed.",
    img: dataBackupIcon,
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




const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const animationFrame = useRef(null);
  const lastTimestamp = useRef(performance.now());
  const headerRef = useRef(null);
  const sectionRef = useRef([]);
  const addToRefs = (el) => {
    if (el && !sectionRef.current.includes(el)) {
      sectionRef.current.push(el);
    }
  };
  const lineRef = useRef(null);


  const bubbles = useMemo(() => {
    return [...Array(25)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 10 + Math.random() * 20,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 10,
    }));
  }, []);

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

    //hero animation
    const animateElements = () => {
      gsap.fromTo(
        [textRef.current, subTextRef.current, buttonRef.current, imageRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.2 }
      );
    };

    animateElements();

    //hero sec slide animation
    const updateSlide = (timestamp) => {
      const elapsed = timestamp - lastTimestamp.current;

      if (elapsed >= 5000) {
        gsap.to([textRef.current, subTextRef.current, buttonRef.current, imageRef.current], {
          opacity: 0,
          y: -30,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
            animateElements();
          },
        });
        lastTimestamp.current = timestamp;
      }

      animationFrame.current = requestAnimationFrame(updateSlide);
    };

    animationFrame.current = requestAnimationFrame(updateSlide);

    return () => cancelAnimationFrame(animationFrame.current);
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


  //strategic execution section
  const [selectedIndex, setSelectedIndex] = useState(0);
  const swiperRef = useRef(null);
  const visibleItems = 3;

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  //design process animation
  const wrapperRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".slide");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${scrollRef.current.scrollWidth - window.innerWidth}`,
        onUpdate: (self) => {
          gsap.to(scrollRef.current, {
            scrollLeft: self.progress * (scrollRef.current.scrollWidth - window.innerWidth),
            ease: "none",
          });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);



  return (
    <>
      {/* Hero section */}
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          maxWidth: "none",
          backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.9) 100%),
          linear-gradient(90deg, rgba(8,10,19,1) 5%, rgba(0,51,102,0.9) 50%, rgba(0,102,51,0.7) 90%, rgba(0,0,0,0) 100%)
        `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          minHeight: "100%",
          padding: "20px",
          color: "white",
        }}
      >
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          margin: "auto",
          maxWidth: "1485px",
          paddingTop: 7,
        }}>
          {/* Left Side - Text Content */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, padding: "20px", maxWidth: "900px" }}>
            <Typography
              ref={textRef}
              variant="h3"
              className="heading"
              sx={{
                fontWeight: "bold",
                mb: 2,
                background: "linear-gradient(145deg, #d1d1d1, #ffffff, #a3a3a3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                fontSize: { xs: "20px", sm: "24px", md: "29px", lg: "36px", xl: "40px" },
              }}
            >
              {slides[currentIndex].title}
            </Typography>

            <Typography
              ref={subTextRef}
              variant="h6"
              className="desc"
              sx={{
                mb: 4,
                background: "linear-gradient(145deg, #d1d1d1, #ffffff, #a3a3a3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
                fontSize: { xs: "20px", sm: "24px", md: "19px", lg: "24px", xl: "28px" },
              }}
            >
              {slides[currentIndex].subtitle}
            </Typography>

            <Button
              ref={buttonRef}
              variant="contained"
              sx={{
                fontSize: "1rem",
                borderRadius: "30px",
                padding: "10px 20px",
                background: "linear-gradient(145deg, #b8b8b8, #ffffff, #7e7e7e)",
                border: "1px solid #999",
                boxShadow: "inset 2px 2px 3px rgba(255,255,255,0.5), inset -2px -2px 3px rgba(0,0,0,0.3), 3px 3px 5px rgba(0,0,0,0.3)",
                color: "#000",
                textTransform: "uppercase",
                "&:hover": {
                  background: "linear-gradient(145deg, #ffffff, #d1d1d1, #a3a3a3)",
                  boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.6)",
                },
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Right Side - Changing Image */}
          <Box ref={imageRef} sx={{ flex: 1, display: "flex", justifyContent: "right", padding: "20px" }}>
            <img
              src={slides[currentIndex].image}
              alt="Slide Image"
              style={{
                width: "100%",
                maxWidth: "800px",
                height: "auto",
              }}
            />
          </Box>
        </Box>

        {/* stats section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            textAlign: "center",
            py: 7,
            flexWrap: "wrap",
          }}
        >
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: "rgba(37, 4, 255, 0.29)",
                  padding: "15px 25px",
                  borderRadius: "50px",
                  width: "250px"
                }}
              >

                <Typography variant="h4" sx={{ fontSize: 40 }}>
                  <img style={{ width: "40px" }} src={counter.icon} alt="" />
                </Typography>

                <Box sx={{ textAlign: "left" }}>
                  <Typography variant="h4" sx={{ fontWeight: "bold", }}>
                    <CountUp start={0} end={counter.value} duration={4} />+
                  </Typography>
                  <Typography variant="body1">{counter.label}</Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

      </Container>

      {/* Partners section */}
      <Container maxWidth={"xl"} disableGutters sx={{ px: 6, py: 9 }}>
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
          Official Partners Of
        </Typography>

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

      </Container>

      {/* description section */}
      <Container maxWidth={false} disableGutters sx={{ px: 6, py: 9, position: "relative", width: "100%" }}>
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

        <Box sx={{
          maxWidth: "1454px",
          width: "100%",
          margin: "0 auto",
          display: "block",
        }}>
          {/* first section */}
          <Box
            ref={addToRefs}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 6 },
              py: { xs: 4, md: 6 },
              textAlign: { xs: "center", md: "left" }
            }}
          >
            <Typography
              variant="h3"
              sx={{
                flex: 1,
                minWidth: "300px",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #007FFF, #0047AB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "24px", sm: "30px", md: "36px", lg: "42px", xl: "50px" }
              }}
            >
              Leading Mobile App Development, Software Development & IT Consulting Company

            </Typography>
            <Box sx={{ flex: 1, maxWidth: "600px" }}>
              <Typography
                variant="body1"
                sx={{
                  flex: 1,
                  color: "#ddd",
                  lineHeight: 1.8,
                  fontSize: { xs: "20px", sm: "22px", md: "16px", lg: "21px", xl: "24px" },
                  mt: 2,
                }}
              >
                Founded in 2025, Metaphi Innovations is a leading Mobile App, Software Development, and Web Development company, driving digital transformation for businesses worldwide. As a trusted technology partner, we empower startups and enterprises alike to innovate, scale, and lead in their industries.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  mt: 3,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "30px",
                    color: "#fff",
                    borderColor: "rgba(0, 26, 255, 0.87)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": {
                      backgroundColor: "rgba(0, 26, 255, 0.87)",
                      color: "#fff",
                    },
                  }}
                >
                  Learn More <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Line */}
          <Box
            ref={lineRef}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: 2
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "1454px",
                height: "1px",
                backgroundImage: "linear-gradient(to right, #007FFF, #00C87F)",
                borderRadius: "200px"
              }}
            />
          </Box>

          {/* second section */}
          <Box
            ref={addToRefs}
            sx={{
              display: 'flex',
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 6 },
              py: { xs: 4, md: 6 },
              textAlign: { xs: "center", md: "left" },
              mt: 2
            }}
          >
            <Typography
              variant="h3"
              sx={{
                flex: 1,
                minWidth: "300px",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #00FF7F,rgb(5, 107, 47))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "24px", sm: "30px", md: "36px", lg: "42px", xl: "50px" }
              }}
            >
              Accelerating Business Growth with Intelligent Solutions
            </Typography>

            <Box sx={{ flex: 1, maxWidth: "600px" }} >
              <Typography variant="body1" sx={{ flex: 1, color: "#ddd", lineHeight: 1.8, fontSize: { xs: "20px", sm: "22px", md: "16px", lg: "21px", xl: "24px" } }}>
                Unlock growth opportunities with robust software solutions, system modernization, and next-gen technologies—powered by a leading development company.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  mt: 3,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "30px",
                    color: "#fff",
                    borderColor: "rgba(0, 255, 0, 0.69)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mt: 3,
                    "&:hover": {
                      backgroundColor: "rgba(0, 255, 0, 0.69)",
                      color: "#fff",
                    },
                  }}
                >
                  Services <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Box>

            </Box>

          </Box>

          <Box
            ref={addToRefs}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "left" },
              mt: 2,
              width: "100%",
            }}
          >

          </Box>
        </Box>



      </Container>

      {/* services section */}
      <Container maxWidth={false} disableGutters sx={{ px: 6, py: 9, position: "relative", width: "100%" }}>
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
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  borderRadius: "20px",
                  boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.1)",
                  background: "linear-gradient(135deg, rgba(9, 12, 53, 0.29), rgba(36, 36, 36, 0.9))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    boxShadow: "0px 10px 40px rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                <CardContent>
                  <img src={service.icon} alt={service.title} style={{ width: "50px", height: "50px", marginBottom: "20px" }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ddd", mt: 1 }}>
                    {service.description}
                  </Typography>
                </CardContent>
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

      {/* Strategic execution setion */}
      <Container maxWidth={false} disableGutters sx={{ px: 6, py: 9, position: "relative", width: "100%" }}>
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
          Strategic Execution
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1400px",
            margin: "auto",
            mt: 5,
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* Left Side - Image Navigation */}
          <Box
            sx={{
              maxWidth: { xs: "300px", sm: "400px" },
              width: "100%",
              minWidth: "240px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.1)",
              background: "linear-gradient(135deg, rgba(9, 12, 53, 0.29), rgba(36, 36, 36, 0.9))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.4s ease",
              borderRadius: "20px",
              padding: 2,
            }}
          >
            {/* Up Arrow Button */}
            <IconButton sx={{ color: "white" }} onClick={handlePrev}>
              <ArrowUpward />
            </IconButton>

            {/* Swiper Feature List */}
            <Swiper
              direction="vertical"
              slidesPerView={visibleItems}
              spaceBetween={10}
              loop
              centeredSlides={true}
              allowTouchMove={false}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setSelectedIndex(swiper.realIndex)}
              style={{
                height: 300,
                width: "100%",
                maxWidth: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none"
              }}
            >

              {features.map((feature, index) => (
                <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    sx={{
                      cursor: "pointer",
                      border: index === selectedIndex ? "1px solid #3B2ED0" : "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "25px",
                      transition: "all 0.3s ease-in-out",
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      padding: { xs: "10px 14px", md: "12px 18px" },
                      maxWidth: { xs: "198px", sm: "280px", md: "250px", lg: "270px" },
                      margin: "auto",
                      width: "100%",
                      background: index === selectedIndex
                        ? "linear-gradient(135deg, rgba(9, 12, 53, 0.5), rgba(36, 36, 36, 0.9))"
                        : "transparent",
                      backdropFilter: index === selectedIndex ? "blur(10px)" : "none",
                      transform: index === selectedIndex ? "scale(1.05)" : "scale(1)",
                      opacity: index === selectedIndex ? 1 : 0.8,
                      transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",

                    }}
                  >
                    <img
                      src={feature.img}
                      alt={feature.title}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      variant="body1"
                      fontWeight={index === selectedIndex ? "bold" : "normal"}
                      sx={{
                        fontSize: { xs: "12px", md: "16px" },
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Down Arrow Button */}
            <IconButton sx={{ color: "white" }} onClick={handleNext}>
              <ArrowDownward />
            </IconButton>
          </Box>

          {/* Right Side - Feature Description */}
          <Card
            sx={{
              maxWidth: "800px",
              width: "100%",
              minHeight: 200,
              padding: 3,
              borderRadius: "20px",
              background: "linear-gradient(135deg, rgba(30, 30, 30, 0.8), rgba(15, 15, 15, 0.9))",
              boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#fff",
              textAlign: { xs: "center", md: "left" }
            }}
          >
            <CardContent>
              <img style={{ height: 50, width: 50 }} src={features[selectedIndex].img} alt="" />
              <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
                {features[selectedIndex].title}
              </Typography>
              <Typography sx={{ lineHeight: 1.6 }}>
                {features[selectedIndex].description}
              </Typography>
            </CardContent>
          </Card>
        </Box>


      </Container>

      {/* Design steps section */}
      <Container maxWidth={false} disableGutters sx={{ px: 0, py: 9, position: "relative", width: "100%" }}>
        {/* Soft Background Blur */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: {
              xs: "rgba(0, 255, 170, 0.1)",
              md: "rgba(0, 255, 170, 0.07)",
            },
            zIndex: -10,
            filter: {
              xs: "blur(15px)",
              sm: "blur(30px)",
              md: "blur(60px)",
            }
          }}
        />
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

        {/* Scroll Container */}
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
              scrollSnapType: "x mandatory",
              willChange: "scroll-position", 
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
                  paddingRight: 6
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
      </Container>
    </>
  );
};

export default Home;
