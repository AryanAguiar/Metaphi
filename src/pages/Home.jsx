import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Button, Typography, Card, CardContent, IconButton, Modal, CardMedia } from "@mui/material";
import { gsap } from "gsap";
import heroImg1 from "../images/webdev.png";
import partner1 from "../images/partner-2.png";
import "./Home.css";
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
import { faArrowRight, faArrowLeft, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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

//strategic execution images
import dedicatedIcon from "../images/Dedicated.svg";
import supportIcon from "../images/customersupport.svg";
import clientCentricIcon from "../images/clientcetric.svg";
import agileIcon from "../images/agiledev.svg";
import enhancementIcon from "../images/enhancement.svg";
import qualityIcon from "../images/quality.svg";
import dataProtectionIcon from "../images/dataprotec.svg";
import dataBackupIcon from "../images/databackup.svg";
import { useMemo } from "react";
import clutchlogo from "../images/clutchlogo.png";

//industries we serve
import socialNetworking from "../images/Social networking.jpg";
import travelandHospitality from "../images/travel and hospitality.jpg";
import gaming from "../images/gaming software development.jpg";
import logistics from "../images/logistic and dashboard.jpg";
import realestate from "../images/real estate.jpg";
import ecommerce from "../images/ecommerce retail.jpg";
import fitness from "../images/fitness.jpg";
import food from "../images/food and restaurant.jpg";
import elearning from "../images/E Learning.jpg";
import elearning2 from "../images/E Learning 2 image.jpg";

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
    title: 'Retail & E-commerce',
    description: 'Empower your retail business with scalable, future-ready digital solutions.',
    image: ecommerce,
  },
  {
    title: 'Education & E-Learning',
    description: 'Enhance learning experiences with tech-driven solutions for global learners.',
    image: elearning,
  },
  {
    title: 'Healthcare & Fitness',
    description: 'Leverage AI, ML, and IoT to transform healthcare services and outcomes.',
    image: fitness,
  },
  {
    title: 'Logistics & Distribution',
    description: 'Optimize logistics with customer-centric, industry-specific solutions.',
    image: logistics,
  },
  {
    title: 'Social Networking',
    description: 'Build engaging, seamless social media applications.',
    image: socialNetworking,
  },
  {
    title: 'Real Estate',
    description: 'Implement cutting-edge real estate solutions for your unique needs.',
    image: realestate,
  },
  {
    title: 'Travel & Hospitality',
    description: 'Deliver intuitive digital travel experiences with feature-rich platforms.',
    image: travelandHospitality,
  },
  {
    title: 'Food & Restaurant',
    description: 'Drive growth in food & restaurant industry with innovative solutions.',
    image: food,
  },
  {
    title: 'On-Demand Solutions',
    description: 'Craft intelligent, high-performance on-demand platforms.',
    image: elearning2,
  },
  {
    title: 'Gaming',
    description: 'Create immersive, interactive gaming experiences with the latest tech.',
    image: gaming,
  },
];

//projects
const projects = [
  {
    title: "Road Safety App",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "House Renting App",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "House Renting App",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "House Renting App",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

//business section
const businessTypes = [
  {
    title: "Startups",
    desc: "Operating on a tight budget with limited resources? Our experts provide the essential tech support to transform your vision into reality.",
  },
  {
    title: "Small Business",
    desc: "Build a strong brand identity with our experienced professionals, seamlessly aligning development expertise with your unique business needs.",
  },
  {
    title: "Enterprise Business",
    desc: "Empower your enterprise with cutting-edge technology to expand your reach, optimize operations, and drive innovation.",
  },
  {
    title: "Agency Business",
    desc: "Enhance your service offerings by leveraging our expertise and the latest technological advancements to stay ahead in the industry.",
  },
];

//testimonials section
const testimonials = [
  {
    title: "Lorem ipsum dolor sit amet",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    logo: clutchlogo,
  },
  {
    title: "Consectetur adipiscing elit",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    logo: clutchlogo,
  },
  {
    title: "Sed ut perspiciatis unde",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    logo: clutchlogo,
  },
  {
    title: "Nemo enim ipsam voluptatem",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    logo: clutchlogo,
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
  const [imageLoaded, setImageLoaded] = useState(false);

  //projects section
  const prevRefProj = useRef(null);
  const nextRefProj = useRef(null);


  //why choose us section
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
  const businessRef = useRef(null);
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
    }, businessRef);

    return () => ctx.revert();
  }, []);


  //testimonial animation
  gsap.registerPlugin(ScrollTrigger);

  const testimonialCards = useRef([]);

  useEffect(() => {

    gsap.set(".swiper-slide", { opacity: 0 });

    ScrollTrigger.batch(".swiper-slide", {
      start: "top 100%",
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out",
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const handleOpenModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTestimonial(null);
  };

  return (
    <>
      {/* Hero section */}
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          maxWidth: "none",
          minHeight: "100%",
          padding: "20px",
          color: "white",
        }}
      >
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
        </Box>
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

      </Container>

      {/* industries we serve */}
      <Container maxWidth={false} disableGutters sx={{ px: 0, py: 9, position: "relative", width: "100%" }}>
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
          Industries We Serve
        </Typography>

        <Box sx={{ maxWidth: "1450px", px: 2, py: 4, margin: "auto", position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { md: "flex-end", lg: "center" },
              gap: 2,
              mb: 2,
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
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    borderRadius: 4,
                    minHeight: 240,
                    height: "100%",
                    position: "relative",
                    color: "#fff",
                    boxShadow: 3,
                    transition: "transform 0.3s ease",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box
                    component="img"
                    src={industry.image}
                    loading="lazy"
                    alt={industry.title}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 0,
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))",
                      backdropFilter: "blur(3px)",
                      zIndex: 1,
                    }}
                  />

                  <CardContent
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      p: { xs: 2, sm: 3 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: "#fff",
                        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                      }}
                    >
                      {industry.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#e0e0e0",
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                        textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                      }}
                    >
                      {industry.description}
                    </Typography>
                    <Button
                      sx={{
                        mt: 10,
                        color: "#fff",
                        background: "linear-gradient(135deg, rgba(9, 12, 53, 0.29), rgba(36, 36, 36, 0.9))",
                        boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "40px",
                        textTransform: "none",
                        px: 3,
                        py: 1.5,
                        "&:hover": {
                          background: "linear-gradient(135deg, rgba(9, 12, 53, 0.5), rgba(36, 36, 36, 1))",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>

      {/* Projects section */}
      <Container maxWidth={false} disableGutters sx={{ px: 0, py: 9, position: "relative", width: "100%" }}>
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
          <Box
            sx={{
              display: "flex",
              justifyContent: { md: "flex-end", lg: "center" },
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
                cursor: "pointer",
                "&:hover": {
                  background: "linear-gradient(135deg, rgba(9, 12, 53, 0.5), rgba(36, 36, 36, 1))",
                },
              }}
            >
              <ArrowForward />
            </IconButton>

          </Box>
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

          {/* View More Button */}
          <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <Button
              sx={{
                alignSelf: "flex-start",
                mt: "auto",
                border: "1px solid #00eaff",
                color: "#00eaff",
                fontWeight: 500,
                textTransform: "none",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(0, 234, 255, 0.1)",
                  borderColor: "#00eaff",
                  color: "#00f7ff",
                  boxShadow: "0 0 8px #00f7ff",
                },
              }}
            >
              View More
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Why choose us section */}
      <Container maxWidth={false} disableGutters sx={{ px: 0, py: 0, position: "relative", width: "100%" }}>
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
            background: "linear-gradient(145deg, #d1d1d1, #ffffff, #a3a3a3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            fontSize: { xs: "20px", sm: "24px", md: "29px", lg: "36px", xl: "46px" },
            padding: "10px",
            textAlign: "center"
          }}
        >
          Why Choose Us?
        </Typography>

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
            <Button
              variant="contained"
              href="#contact"
              sx={{
                alignSelf: { xs: "center", md: "flex-start" },
                mt: 3,
                px: 4,
                py: 1.5,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 500,
                background: "linear-gradient(to right, #00c3ff, #004aad)",
                "&:hover": {
                  background: "linear-gradient(to right, #00eaff, #0066ff)",
                },
              }}
            >
              DROP QUERIES
            </Button>
          </Box>
        </Box>

        <Box
          ref={businessRef}
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
            {businessTypes.map((item, idx) => (
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
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      <Container maxWidth={false} disableGutters sx={{ px: 0, py: 0, position: "relative", width: "100%" }}>
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
            background: "linear-gradient(145deg, #d1d1d1, #ffffff, #a3a3a3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            fontSize: { xs: "20px", sm: "24px", md: "29px", lg: "36px", xl: "46px" },
            paddingTop: "80px",
            textAlign: "center"
          }}
        >
          What Our Clients Say
        </Typography>

        <Box
          sx={{
            py: 9,
            px: { xs: "auto", sm: 3, md: 4, lg: 3, xl: 15 },
            textAlign: "center",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mb: { sx: "auto", md: "50px" }
          }}
        >
          {/* Navigation Arrow for Desktop */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <FontAwesomeIcon icon={faArrowLeft} size="2x" className="prev-button" color="#00C8FF" style={{ cursor: "pointer" }} />
          </Box>

          {/* Swiper Container */}
          <Box sx={{ width: "90%", maxWidth: "1480px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".prev-button",
                nextEl: ".next-button",
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              speed={1000}
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={true}
              breakpoints={{
                1000: { slidesPerView: 1, centeredSlides: true },
                1024: { slidesPerView: 3, centeredSlides: false, spaceBetween: 10 },
                1340: { slidesPerView: 3, centeredSlides: false, spaceBetween: 15 },
                1440: { slidesPerView: 3, centeredSlides: false, spaceBetween: 15 },
              }}
              style={{ margin: "auto", overflow: "hidden", width: "100%" }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index} style={{ willChange: "opacity" }}>
                  <Box
                    ref={(el) => (testimonialCards.current[index] = el)}
                    onClick={() => handleOpenModal(item)}
                    sx={{
                      background: "linear-gradient(135deg, #00C853, #0D47A1)",
                      backgroundSize: "400% 400%",
                      animation: "moveGradient 6s infinite alternate ease-in-out",
                      borderRadius: "10px",
                      padding: "20px",
                      color: "white",
                      textAlign: "left",
                      maxWidth: "450px",
                      maxHeight: "200px",
                      mx: "auto",
                      transition: "all 0.4s ease-in-out",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    {/* Rating Stars */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} color="#00C8FF" />
                      ))}
                    </Box>

                    <Typography sx={{ fontWeight: "bold", mt: 1, fontSize: { xs: "12px", md: "14px" } }}>{item.title}</Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        fontSize: { xs: "10px", md: "14px" },
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        overflow: "hidden",
                      }}
                    >
                      {item.review}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                      <img
                        src={item.logo}
                        alt="Logo"
                        style={{ height: "70px", width: "70px", objectFit: "contain" }}
                      />
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                gap: 3,
                mt: 3,
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} size="2x" className="prev-button" color="#00C8FF" style={{ cursor: "pointer" }} />
              <FontAwesomeIcon icon={faArrowRight} size="2x" className="next-button" color="#00C8FF" style={{ cursor: "pointer" }} />
            </Box>

          </Box>

          {/* Navigation Arrow for Desktop */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <FontAwesomeIcon icon={faArrowRight} size="2x" className="next-button" color="#00C8FF" style={{ cursor: "pointer" }} />
          </Box>
          {/* Modal */}
          <Modal open={openModal} onClose={handleCloseModal} disableScrollLock sx={{ margin: 4 }}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#111212",

                color: "white",
                borderRadius: "10px",
                padding: { xs: "20px", sm: "30px", md: "40px" },
                width: { xs: "90%", sm: "70%", md: "50%" },
                maxHeight: "80vh",
                overflowY: "auto",
                boxShadow: 24,
              }}
            >
              {/* Close Button */}
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  color: "white",
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </IconButton>

              {selectedTestimonial && (
                <>
                  {/* Rating Stars */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} color="#00C8FF" />
                    ))}
                  </Box>

                  {/* Title */}
                  <Typography sx={{ fontWeight: "bold", mt: 2, fontSize: "22px" }}>
                    {selectedTestimonial.title}
                  </Typography>

                  {/* Full Review */}
                  <Typography sx={{ mt: 2, fontSize: "16px", lineHeight: 1.5 }}>
                    {selectedTestimonial.review}
                  </Typography>

                  {/* Logo */}
                  <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                    <img
                      src={selectedTestimonial.logo}
                      alt="Logo"
                      style={{ height: "70px", width: "70px", objectFit: "contain" }}
                    />
                  </Box>

                </>
              )}
            </Box>
          </Modal>

        </Box>
      </Container>

    </>
  );
};

export default Home;
