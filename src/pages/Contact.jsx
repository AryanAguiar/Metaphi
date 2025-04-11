import React, { useEffect, useRef } from 'react'
import { FastField, Formik, Form } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Box, Typography, Button, TextField, Container } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


const Contact = () => {

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
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
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
        {/* Left Info */}
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

        {/* Contact Form */}
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
    </Container>
  )
}

export default Contact