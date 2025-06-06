import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Button, Typography, Divider, IconButton, Stack, Card, Paper, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { gsap } from "gsap";
import { Link, useLocation, useParams } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
import { jobs } from "./JobsData";
import "./Careers.css";
import joinusIcon1 from "../images/team_icon.png";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { ADD_JOB_APPLICATION_ENDPOINT } from "../utils/apiConfig";
import vector from "../images/vector.png"
const whyJoinUs = [
    {
        value: "Flexible Working Hours",
        icon: joinusIcon1
    },
    {
        value: "Learning Support & Upskilling",
        icon: "",
    },
    {
        value: "Flexible Working Hours",
        icon: "",
    },
    {
        value: "Flexible Working Hours",
        icon: "",
    },
    {
        value: "Flexible Working Hours",
        icon: "",
    },
    {
        value: "Flexible Working Hours",
        icon: "",
    },
]


const Careers = () => {

    const techStacks = ["View All", "React", "Vue", "PHP", "MERN"];
    const [selectedStack, setSelectedStack] = useState("View All");

    const filteredJobs = selectedStack === "View All" ? jobs : jobs.filter((job) => job.tags.includes(selectedStack));


    const imageBoxSx = {
        width: '100%',
        height: 240,
        backgroundColor: '#f1f2f4',
        borderRadius: 2,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const [formClicked, setFormClicked] = useState(false);

    const handleClick = () => {
        setFormClicked((prevState) => !prevState);
    }

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        open: false,
        message: '',
        type: '',
    });



    const handleSubmit = async (values, { resetForm }) => {
        console.log(values, "form values");

    }
    //const formData = new FormData();
    //     formData.append('full_name', values.name);
    //     formData.append('email_id', values.email);
    //     formData.append('phone_no', values.mobile);
    //     formData.append('linkedin_url', values.linkedin);
    //     formData.append('designation', values.slug);
    //     formData.append('stack', values.stack);

    //     if (values.resume) {
    //       formData.append('resume_file', values.resume);
    //     }

    //     try {
    //       setLoading(true);

    //       const response = await axios.post(
    //         ADD_JOB_APPLICATION_ENDPOINT,
    //         formData,
    //         {
    //           headers: {
    //             'Content-Type': 'multipart/form-data',
    //           },
    //         }
    //       );

    //       console.log('Form submitted:', response.data);

    //       setAlert({
    //         type: 'success',
    //         message: 'Application submitted successfully!',
    //         open: true,
    //       });

    //       resetForm();
    //     } catch (error) {
    //       console.error('Submission error:', error.response?.data || error.message);

    //       setAlert({
    //         type: 'error',
    //         message: error.response?.data?.message || 'Submission failed. Please try again.',
    //         open: true,
    //       });
    //     } finally {
    //       setLoading(false);
    //     }
    //   };



    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            linkedin: '',
            resume: null,

        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            mobile: Yup.string().required('Required'),
            linkedin: Yup.string().url('Invalid URL'),
            mobile: Yup.string()
                .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits')
                .required('Required'),
        }),
        onSubmit: handleSubmit,
    });

    return (
        <>
            <div className="Ellipse-5"></div>
            {/* hero section */}
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    mt: 15,
                    px: { xs: 3, md: 8 },
                    py: { xs: 8, md: 14 },
                    width: "100%",
                    minHeight: "60vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Box>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 500,
                            fontSize: { xs: "2.25rem", sm: "3.25rem", md: "64px" },
                            color: "#fff",
                            mb: 2,
                            lineHeight: 1.2,
                        }}
                    >
                        Join Us
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: "820px",
                            mx: "auto",
                            color: "#bdbdbd",
                            fontSize: { xs: "20px", md: "40px" },
                            flexGrow: 0
                        }}
                    >
                        We’re always Looking for <br />
                        <span className="text-style-1">Curious Minds </span>
                        and
                        <span className="text-style-2"> Passionate Builders</span><span className="text-style-3">.</span>
                    </Typography>
                </Box>
            </Container>


            {/* Life at metaphi */}
            <Container
                maxWidth="1320px"
                disableGutters
                sx={{
                    px: { xs: 2, md: 8 },
                    py: { xs: 6, md: 10 },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <div className="grid-container">
                    <div className="box" style={{ gridArea: "box1", backgroundColor: "rgba(21, 23, 30, 1)", boxSizing: "border-box", padding: "24px" }}>
                        <Typography
                            variant="h5"
                            fontWeight="800"
                            sx={{
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                                lineHeight: 1.2,
                            }}
                            gutterBottom
                        >
                            Life at Metaphi
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.25rem' },
                                fontWeight: 400,
                                lineHeight: 1.6,
                            }}
                        >
                            At Metaphi, we believe in collaboration, creativity, and continuous learning. We keep things flexible,
                            encourage ownership, and celebrate wins — big or small. You'll work with a tight-knit team that values
                            innovation, transparency, and having fun along the way.
                        </Typography>
                    </div>
                    <div className="box" style={{ gridArea: "box2" }}></div>
                    <div className="box" style={{ gridArea: "box3" }}></div>
                    <div className="box" style={{ gridArea: "box4" }}></div>
                    <div className="box" style={{ gridArea: "box5" }}></div>
                    <div className="box" style={{ gridArea: "box6" }}></div>
                </div>

            </Container>

            {/* Why join us */}
            <Container
                maxWidth={false}
                disableGutters
                sx={{ py: 5 }}
            >
                <Typography
                    className="why-join-us"
                    sx={{
                        fontWeight: 500,
                        fontSize: { xs: "2.25rem", sm: "3.25rem", md: "64px" },
                        color: "#fff",
                        mb: 2,
                        lineHeight: 1.2,
                    }}
                >
                    Why Join Us
                </Typography>

                <Container
                    maxWidth={false}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px',
                        py: 4,
                        maxWidth: "1400px"
                    }}
                >
                    {whyJoinUs.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                boxSizing: "border-box",
                                width: 296,
                                height: 96,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                px: 3,
                                borderRadius: '32px',
                                backgroundImage: `radial-gradient(circle at 140% 230%, #3c71f7, rgba(0, 0, 0, 0) 48%),
                          radial-gradient(circle at -10% 200%, #37de8d, rgba(0, 0, 0, 0) 40%),
                          linear-gradient(to bottom, #15171e, #15171e)`,
                                overflow: 'hidden',
                                color: 'white',
                            }}
                        >
                            {/* Icon */}
                            <Box
                                sx={{
                                    width: 28,
                                    height: 28,
                                    borderRadius: '10px',
                                    backgroundColor: '#6216C533',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    p: 2
                                }}
                            >
                                <img src={joinusIcon1} alt="" />
                            </Box>

                            {/* Text */}
                            <Typography
                                sx={{
                                    height: '48px',
                                    flexGrow: 1,
                                    fontFamily: 'Inter',
                                    fontSize: '20px',
                                    fontWeight: 500,
                                    fontStretch: 'normal',
                                    fontStyle: 'normal',
                                    lineHeight: 'normal',
                                    letterSpacing: 'normal',
                                    textAlign: 'left',
                                    color: '#f3f4f7',
                                }}

                            >
                                {item.value}
                            </Typography>
                        </Box>
                    ))}
                </Container>
            </Container>

            {/* Open roles */}
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    backgroundColor: "#040506",
                    px: 0
                }}
            >
                <Container
                    maxWidth={false}
                    sx={{
                        py: 6,
                        maxWidth: "1330px",
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

                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontSize: '48px',
                            fontWeight: 800,
                            textAlign: 'left',
                            color: '#F9FAFB',
                            mb: 4,
                            textAlign: "center"
                        }}
                    >
                        Open Roles
                    </Typography>

                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 6 }}>
                        {/* Sidebar */}
                        <Box
                            sx={{
                                minWidth: { xs: '100%', md: 180 },
                                padding: "16px",
                                width: "350px",
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {[...techStacks].map((tech) => {
                                const isActive = selectedStack === tech;

                                return (
                                    <Box
                                        key={tech}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            position: 'relative',
                                            cursor: 'pointer',
                                            pl: '12px',
                                            borderLeft: isActive ? '2px solid #17E1F7' : '2px solid transparent',
                                            backgroundColor: isActive ? 'transparent' : '#15171E',
                                            '&:hover': {
                                                backgroundColor: '#1F2230',
                                            },
                                        }}
                                        onClick={() => setSelectedStack(tech)}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: isActive ? '#17E1F7' : '#A3AAC1',
                                                fontFamily: 'Inter',
                                                fontSize: '28px',
                                                fontWeight: 700,
                                                flex: 1,
                                                textAlign: 'left',
                                                py: 1.9
                                            }}
                                        >
                                            {tech}
                                        </Typography>
                                        {isActive && (
                                            <Typography
                                                component="span"
                                                sx={{ color: '#17E1F7', marginRight: '193px', fontWeight: 600, fontSize: "20px" }}
                                            >
                                                &gt;
                                            </Typography>
                                        )}
                                    </Box>
                                );
                            })}
                        </Box>

                        {/* Job Listings */}
                        <Stack spacing={1} sx={{ flexGrow: 1, minWidth: 0, maxWidth: "830px", margin: 0 }}>
                            {filteredJobs.map((job, idx) => (
                                <Box
                                    key={idx}
                                    sx={{
                                        px: 4,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: { xs: 'column', sm: 'row' },
                                            alignItems: { xs: 'center', sm: 'center' },
                                            justifyContent: 'space-between',
                                            flexWrap: 'nowrap',
                                            gap: 2,
                                        }}
                                    >
                                        {/* Title + Tags */}
                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Inter',
                                                    fontSize: { xs: '18px', sm: '22px', md: '32px' },
                                                    fontWeight: 600,
                                                    color: '#A3AAC1',
                                                    mb: 1,
                                                    textAlign: { xs: 'center', sm: 'left' },
                                                    whiteSpace: 'normal',
                                                    overflowWrap: 'break-word',
                                                }}
                                            >
                                                {job.title}
                                            </Typography>

                                            <Stack
                                                direction="row"
                                                spacing={1}
                                                flexWrap="wrap"
                                                justifyContent={{ xs: 'center', sm: 'flex-start' }}
                                            >
                                                {job.tags?.map((tag) => (
                                                    <Box
                                                        key={tag}
                                                        sx={{
                                                            px: 2,
                                                            py: 0.5,
                                                            bgcolor: '#292D3D',
                                                            borderRadius: 1,
                                                            fontSize: { xs: 10, sm: 11, md: 12 },
                                                            color: '#A3AAC1',
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {tag}
                                                    </Box>
                                                ))}
                                            </Stack>
                                        </Box>

                                        {/* Buttons */}
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            sx={{
                                                flexShrink: 0,
                                                flexWrap: { xs: 'wrap', sm: 'nowrap' },
                                                justifyContent: { xs: 'center', sm: 'flex-end' },
                                            }}
                                        >
                                            <Button

                                                sx={{
                                                    textTransform: 'none',
                                                    borderRadius: '12px',
                                                    px: { xs: 1.5, sm: 2.5 },
                                                    py: { xs: 0.5, sm: 1 },
                                                    fontSize: { xs: '11px', sm: '13px' },
                                                    fontWeight: 600,
                                                    color: '#17E1F7',

                                                }}
                                            >
                                                Learn More
                                            </Button>
                                            <Link to={`/careers/${job.slug}`}>
                                                <Box
                                                    sx={{
                                                        display: "inline-block",
                                                        padding: "2px",
                                                        borderRadius: "16px",
                                                        background: "linear-gradient(90deg, #07B9CE, #3969E7, #7D2AE7)",
                                                        cursor: "pointer",
                                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                                        '&:hover': {
                                                            transform: 'scale(1.05)',
                                                            boxShadow: '0 0 12px rgba(77, 7, 206, 0.6)',
                                                        },
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
                                                                fontWeight: 600,
                                                                fontSize: "16px",
                                                                background: "linear-gradient(90deg, #07B9CE, #3969E7, #7D2AE7)",
                                                                backgroundClip: "text",
                                                                WebkitBackgroundClip: "text",
                                                                color: "transparent",
                                                                WebkitTextFillColor: "transparent",
                                                            }}
                                                        >
                                                            Apply
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Link>

                                        </Stack>
                                    </Box>

                                    {/* Divider */}
                                    {idx < filteredJobs.length - 1 && (
                                        <Box
                                            sx={{
                                                height: '2px',
                                                width: '100%',
                                                background: 'linear-gradient(90deg, #07B9CE, #3969E7, #7D2AE7)',
                                            }}
                                        />
                                    )}
                                </Box>
                            ))}
                        </Stack>


                    </Stack>

                </Container>
            </Container>

            {/* Apply now form */}
            <Container
                maxWidth={false}
                disableGutters
                sx={{ backgroundColor: "#040506" }}
            >
                <Container
                    maxWidth={false}
                    sx={{
                        py: 6,
                        maxWidth: "1270px",
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
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontSize: '48px',
                            fontWeight: 800,
                            textAlign: 'center',
                            color: '#F9FAFB',
                            mb: 2,
                        }}
                    >
                        Apply Now
                    </Typography>
                    <Typography
                        sx={{
                            margin: "auto",
                            maxWidth: '627px',
                            height: 'auto',
                            textAlign: "center",
                            fontSize: "20px",
                            color: '#A3AAC1',
                            lineHeight: 1.6,
                            width: "100%",
                            mb: 12
                        }}
                    >
                        Send us your resume and a few lines about why you'd love to join Metaphi.
                    </Typography>

                    <Box
                        sx={{
                            maxWidth: "1350px",
                            margin: "auto",
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'center',
                            gap: 4,
                            pb: 6,
                        }}
                    >
                        {/* Left gray blocks */}
                        <Stack spacing={3} sx={{ width: { xs: '100%', md: '50%' } }}>
                            {[...Array(3)].map((_, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        height: 265,
                                        borderRadius: 3,
                                        backgroundColor: '#ccc',
                                    }}
                                />
                            ))}
                        </Stack>

                        {/* Right: Form Card */}
                        <Box
                            sx={{
                                width: { xs: '100%', md: '50%' },
                                backgroundColor: '#15171E',
                                borderRadius: 3,
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                p: { xs: 2, md: 3 },
                                boxSizing: "border-box"
                            }}
                        >
                            <Stack spacing={3} component="form" onSubmit={formik.handleSubmit}>
                                {/* Name & Email */}
                                <Stack direction={{ xs: 'column', sm: "row", md: 'row' }} spacing={3}>
                                    <Stack direction="column" sx={{ width: '100%' }}>
                                        <p style={{ color: "#A3AAC1", fontWeight: "600", fontSize: "16px", marginBottom: '8px' }}>Name</p>
                                        <TextField
                                            name="name"
                                            variant="outlined"
                                            placeholder="Full Name"
                                            fullWidth
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    height: 60,
                                                    borderRadius: 3,
                                                    fontSize: '1.2rem',
                                                    paddingRight: '14px',
                                                    backgroundColor: "#040506",
                                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                                    padding: "20px 10px",
                                                },
                                                '& ::placeholder': {
                                                    color: 'white',
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: 'none',
                                                    },
                                                },
                                            }}
                                        />
                                    </Stack>

                                    <Stack direction="column" sx={{ width: '100%' }}>
                                        <p style={{ color: "#A3AAC1", fontWeight: "600", fontSize: "16px", marginBottom: '8px' }}>Email</p>
                                        <TextField
                                            name="email"
                                            placeholder="Valid Email"
                                            fullWidth
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    height: 60,
                                                    borderRadius: 3,
                                                    fontSize: '1.2rem',
                                                    paddingRight: '14px',
                                                    backgroundColor: "#040506",
                                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                                    padding: "20px 10px",
                                                },
                                                '& ::placeholder': {
                                                    color: 'white',
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: 'none',
                                                    },
                                                },
                                            }}
                                        />
                                    </Stack>
                                </Stack>

                                {/* Message */}
                                <Stack direction="column" sx={{ width: '100%' }}>
                                    <p style={{ color: "#A3AAC1", fontWeight: "600", paddingTop: 6, fontSize: "16px", }}>Message*</p>
                                    <TextField
                                        name="message"
                                        multiline
                                        minRows={5}
                                        fullWidth
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        placeholder="Why do you want to join Metaphi?"
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                borderRadius: 3,
                                                fontSize: '1.2rem',
                                                paddingRight: '14px',
                                                backgroundColor: "#040506",
                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                                padding: "20px 25px",
                                            },
                                            '& ::placeholder': {
                                                color: 'white',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    border: 'none',
                                                },
                                                '&:hover fieldset': {
                                                    border: 'none',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    border: 'none',
                                                },
                                            },
                                        }}
                                    />
                                </Stack>

                                {/* Upload Resume */}
                                <Box>
                                    <Typography sx={{ fontWeight: 'bold', mb: 1, color: "#A3AAC1", fontSize: "16px", mt: 2 }}>Upload Resume*</Typography>
                                    <Box
                                        onClick={() => document.getElementById("fileInput")?.click()}
                                        sx={{
                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                            borderRadius: 2,
                                            padding: 3,
                                            textAlign: 'center',
                                            height: "120px",
                                            cursor: 'pointer',
                                            backgroundColor: '#040506',
                                            '&:hover': {
                                                backgroundColor: 'grey',
                                            },
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img src={vector} alt="" color="#A3AAC1" />
                                        <Typography sx={{ fontSize: "15px", color: "#A3AAC1", pt: 2 }}>
                                            <strong>Drag or drop your file, or click here</strong>.
                                        </Typography>
                                        <Typography sx={{ fontSize: "14px", color: '#666' }}>
                                            .pdf, .doc, .docx | Max 5MB
                                        </Typography>
                                        <input
                                            type="file"
                                            id="fileInput"
                                            accept=".pdf,.doc,.docx"
                                            hidden
                                            onChange={(e) => formik.setFieldValue('resume', e.target.files?.[0])}
                                        />
                                    </Box>
                                    {formik.values.resume && (
                                        <Typography sx={{ fontSize: 14, mt: 1 }}>
                                            Selected: {formik.values.resume.name}
                                        </Typography>
                                    )}
                                </Box>

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    fullWidth
                                    sx={{
                                        background: 'linear-gradient(90deg, #07B9CE, #3969E7, #7D2AE7)',
                                        color: '#fff',
                                        fontWeight: 600,
                                        py: 1.5,
                                        borderRadius: 2,
                                        textTransform: "none",
                                        '&:hover': {
                                            backgroundColor: '#333',
                                        },
                                    }}
                                >
                                    Send Message
                                </Button>

                                {/* Gradient line and alternate email */}
                                <Box sx={{ height: 2, background: 'linear-gradient(90deg, #07B9CE, #3969E7, #7D2AE7)', }} />
                                <Typography align="center" sx={{ fontSize: 12, color: "white" }}>
                                    Prefer email? <br /> Send your resume directly to: <strong>hr@example.com</strong>
                                </Typography>
                            </Stack>
                        </Box>

                    </Box>
                </Container>
            </Container >


            {/* <Container
                maxWidth={false}
                disableGutters
                sx={{
                    px: { xs: 3, md: 8 },
                    pt: { xs: 4, md: 10 },
                    pb: { xs: 6, md: 10 },
                    width: "100%",
                    textAlign: "left",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "1440px",
                        margin: "0 auto",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
                            color: "#fff",
                            mb: 2,
                        }}
                    >
                        Open Positions
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: "1000px",
                            color: "#bbbbbb",
                            fontSize: { xs: "1rem", md: "1.125rem" },
                            lineHeight: 1.85,
                        }}
                    >
                        At Metaphi Innovations, our passionate and forward-thinking team is dedicated to delivering scalable solutions that solve real-world challenges. Join us in shaping the future of technology through collaboration and innovation.
                    </Typography>
                </Box>
            </Container> */}

            {/* <Container
                maxWidth={false}
                disableGutters
                sx={{
                    px: { xs: 2, sm: 4, md: 6 },
                    py: { xs: 4, sm: 6 },
                    width: "100%",
                    minHeight: "60vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
   
                <Stack
                    sx={{
                        flexDirection: { xs: 'row', md: 'row' },
                        gap: { xs: 0, md: 2 },
                        mb: 6,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >

                    {techStacks.map((tech) => (
                        <Button
                            key={tech}
                            variant={selectedStack === tech ? "contained" : "outlined"}
                            onClick={() => setSelectedStack(tech)}
                            sx={{
                                textTransform: "none",
                                fontWeight: 600,
                                px: 3,
                                m: 1,
                                width: "100px",
                                borderRadius: "20px",
                                backgroundColor:
                                    selectedStack === tech ? "#00C853" : "transparent",
                                color: selectedStack === tech ? "#fff" : "#00C853",
                                borderColor: "#00C853",
                                "&:hover": {
                                    backgroundColor:
                                        selectedStack === tech ? "#00b94c" : "rgba(0,200,83,0.1)",
                                },
                            }}
                        >
                            {tech}
                        </Button>
                    ))}
                </Stack>

        
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 4,
                        justifyContent: "center",
                        width: "100%",
                        maxWidth: "1500px"
                    }}
                >
                    {filteredJobs.map((job, idx) => (
                        <Card
                            key={idx}
                            component={Link}
                            to={`/careers/${job.slug}`}
                            sx={{
                                textDecoration: "none",
                                width: "340px",
                                backgroundColor: "#1e1e1e",
                                borderRadius: 3,
                                border: "1px solid rgba(255,255,255,0.05)",
                                color: "white",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                                "&:hover": {
                                    borderColor: "#00C853",
                                    boxShadow: "0 6px 30px rgba(0,255,150,0.15)",
                                    backgroundColor: "rgba(0, 0, 0, 0.44)",
                                },
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    p: 3,
                                    gap: 2,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    fontWeight="600"
                                    sx={{ color: "white" }}
                                >
                                    {job.title}
                                </Typography>

                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography
                                        variant="body2"
                                        fontWeight={500}
                                        sx={{ color: "white" }}
                                    >
                                        {job.location}
                                    </Typography>

                                    <IconButton
                                        sx={{
                                            border: "1px solid #fff",
                                            borderRadius: "50%",
                                            p: 1.2,
                                            color: "white",
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                backgroundColor: "rgba(0, 200, 83, 0.1)",
                                                borderColor: "#00C853",
                                            },
                                        }}
                                    >
                                        <ArrowForwardIcon />
                                    </IconButton>
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container> */}

        </>
    )
}

export default Careers