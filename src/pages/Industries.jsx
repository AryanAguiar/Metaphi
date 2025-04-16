import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Box, Button, Typography, Card, CardContent, IconButton, Modal, CardMedia, TextField, MenuItem } from "@mui/material";
import { gsap } from "gsap";

const industryData = {
    education: {
        heroImg:
            "https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.jpg?s=612x612&w=0&k=20&c=NbVChOV9wIbQOhUD6BqpouZHHBbyQ2rkSjaVfIhpMv8=",
        title: "Education",
        tagline: "Shaping the future, one institution at a time.",
        shortDescription: "Leading Education Software Development Company",
        longDescription: `Unlock the future of e-learning with cutting-edge educational solutions and innovative learning technology.`,
        overview: `At Metaphi Innovations, we are redefining education through cutting-edge app and software development. By harnessing the power of e-learning technology, we create tailored solutions that enhance learning experiences across schools, universities, and digital education platforms.
  
  Our team of expert developers specializes in crafting interactive, scalable, and intuitive educational solutions. Whether it's customized learning features, engaging content delivery, or seamless multimedia integration, we design solutions that empower learners and educators alike.
  
  We believe in transforming traditional education with immersive, interactive, and future-ready digital experiences. Explore our comprehensive educational app development services and discover how Metaphi Innovations can elevate learning in the digital age.`,
        benefits: [
            {
                icon: "https://www.svgrepo.com/show/383204/learning-head-book-education.svg",
                title: "Immersive learning experiences",
                description: "Explore complex concepts and scenarios in a safe, controlled environment.",
            },
            {
                title: "Interactive digital lessons and content",
                description: "Engage students with adaptive content tailored to individual learning styles.",
            },
            {
                title: "Access to simulations of places or concepts",
                description: "Experience and learn concepts that were previously inaccessible.",
            },
            {
                title: "Remote collaboration capabilities",
                description: "Facilitate teamwork across distances.",
            },
            {
                title: "Improved student engagement and outcomes",
                description: "Boost engagement and outcomes through interactive, hands-on learning.",
            },
        ],
        features: [
            {
                title: "Immersive Learning Experiences",
                description:
                    "Dive into complex concepts and real-world scenarios within a safe, controlled environment, allowing for deeper understanding, hands-on practice, and risk-free exploration.",
            },
            {
                title: "Interactive Digital Lessons & Content",
                description:
                    "Engage students with dynamic, adaptive content designed to match individual learning styles, ensuring a more personalized and effective learning experience.",
            },
            {
                title: "Simulations of Real-world Concepts",
                description:
                    "Gain immersive access to simulations of real-world locations and abstract concepts, enabling unparalleled learning experiences that were once out of reach.",
            },
            {
                title: "Remote Collaboration Capabilities",
                description:
                    "Enhance remote collaboration with seamless, real-time interaction, enabling teams to work together effortlessly across any distance.",
            },
            {
                title: "Engaging Educational Platforms",
                description:
                    "Boost student engagement and learning outcomes with immersive experiences, while accelerating innovation through faster, cost-effective prototyping.",
            },
        ],
        carousel: [
            {
                title: "School Management App",
                description: `Transform the learning experience with our school management app solutions. Designed to enhance communication, simplify administration, and foster interactive learning, our platform creates a seamless educational ecosystem for students, teachers, and parents.`,
                keyFeatures: [
                    "Seamless Communication – Strengthen collaboration between educators, students, and parents.",
                    "Smart Administration – Automate school operations for error-free management.",
                    "Enhanced Parent-Teacher Interaction – Stay informed with real-time updates and progress tracking.",
                    "Attendance Tracking & Notifications – Monitor student attendance with instant alerts.",
                    "Comprehensive Student Data Management – Securely store and manage student records.",
                ],
                image:
                    "https://images.unsplash.com/photo-1584697964403-fbb07e7b6413?auto=format&fit=crop&w=800&q=60",
            },
            {
                title: "E-learning App Development",
                description: `Empower education with cutting-edge e-learning solutions that redefine digital learning with seamless accessibility, interactive engagement, and intelligent progress tracking.`,
                keyFeatures: [
                    "Blended Learning Support – Switch between online and offline learning modes.",
                    "Gamified Learning Modules – Engage learners through challenges and games.",
                    "Multi-Modal Content Delivery – Use videos, quizzes, and more.",
                    "Live Progress Tracking – Real-time monitoring of learner performance.",
                    "Personalized Learning Paths – Adaptive content tailored to individual needs.",
                    "AI-Powered Knowledge Algorithms – Optimize outcomes with intelligent insights.",
                ],
                image:
                    "https://images.unsplash.com/photo-1600051858391-089c0f45f5a0?auto=format&fit=crop&w=800&q=60",
            },
            {
                title: "Skill Enhancement Applications",
                description: `Bridge the gap between theory and real-world application with personalized training paths, real-time assessments, and industry-aligned content.`,
                keyFeatures: [
                    "Custom Skill Evaluations – Assess and track skill growth.",
                    "Industry-Specific Curriculum – Align learning with current demands.",
                    "Skill-Based Certifications – Boost your career with verified credentials.",
                    "24/7 Learning Access – Learn anytime, anywhere.",
                    "Upskilling & Reskilling Options – Stay competitive and future-ready.",
                ],
                image:
                    "https://images.unsplash.com/photo-1611175694989-bd4d5feab1d8?auto=format&fit=crop&w=800&q=60",
            },
            {
                title: "Educational Gaming Applications",
                description: `Our e-learning apps integrate educational content into intuitive game formats, making learning fun, engaging, and effective.`,
                keyFeatures: [
                    "Learning via Play",
                    "Challenging Competitions",
                    "Level-based Progress Tracking",
                    "Rewards and Recognition",
                    "Diverse Age Learning Modules",
                ],
                image:
                    "https://images.unsplash.com/photo-1600788912140-2a0b6a99f6bb?auto=format&fit=crop&w=800&q=60",
            },
            {
                title: "STEM Learning Applications",
                description: `Foster hands-on experiences and creative problem-solving with immersive STEM platforms that make science, technology, engineering, and mathematics come alive.`,
                keyFeatures: [
                    "Assignment-Based Learning",
                    "Collaboration with Industry Experts",
                    "Immersive Learning Environments",
                    "Problem-Solving Focus",
                    "Virtual Experiments & Simulations",
                ],
                image:
                    "https://images.unsplash.com/photo-1581093588401-7a8c1df04e13?auto=format&fit=crop&w=800&q=60",
            },
        ],
    },
};



const Industries = () => {
    const { industry } = useParams();
    const data = industryData[industry] || { title: "Not Found", description: "Page not available." };
    return (
        <>
            <Container maxWidth={false} disableGutters sx={{ px: 6, py: 7, position: "relative", width: "100%", backgroundImage: `url(${data.heroImg})`, backgroundSize: "cover", }}>
                <Box sx={{
                    maxWidth: "1454px",
                    width: "100%",
                    margin: "0 auto",
                    display: "block",
                    height: "400px",
                }}>
                    


                </Box>
            </Container>
        </>
    )
}

export default Industries