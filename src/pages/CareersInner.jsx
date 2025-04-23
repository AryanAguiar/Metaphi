import { Link, Navigate, useParams } from "react-router-dom";
import { jobs } from "./JobsData";
import { Box, Button, Paper, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { ADD_JOB_APPLICATION_ENDPOINT } from "../utils/apiConfig";

const CareersInner = () => {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);

  const stack = job?.stack;

  if (!job) {
    return <Navigate to="/404" />;
  }

  const [formClicked, setFormClicked] = useState(false);

  const handleClick = () => {
    setFormClicked((prevState) => !prevState);
  }

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    type: '', // 'success' or 'error'
  });



  const handleSubmit = async (values, { resetForm }) => {
    console.log(values, "form values");
    const formData = new FormData();

    formData.append('full_name', values.name);
    formData.append('email_id', values.email);
    formData.append('phone_no', values.mobile);
    formData.append('linkedin_url', values.linkedin);
    formData.append('designation', values.slug);
    formData.append('stack', values.stack);

    if (values.resume) {
      formData.append('resume_file', values.resume);
    }

    try {
      setLoading(true);

      const response = await axios.post(
        ADD_JOB_APPLICATION_ENDPOINT,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Form submitted:', response.data);

      setAlert({
        type: 'success',
        message: 'Application submitted successfully!',
        open: true,
      });

      resetForm();
    } catch (error) {
      console.error('Submission error:', error.response?.data || error.message);

      setAlert({
        type: 'error',
        message: error.response?.data?.message || 'Submission failed. Please try again.',
        open: true,
      });
    } finally {
      setLoading(false);
    }
  };



  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      linkedin: '',
      resume: null,
      slug: job?.slug || '',
      stack: job?.stack || '',
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
      <Box sx={{ p: 2 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            maxWidth: 1200,
            mx: "auto",
            borderRadius: 2,
            mt: 20,
            backgroundColor: "#121212",
            color: "#ffffff",
          }}
        >
          <Link to="/careers"><Button sx={{ color: "#00e676" }}>Go Back</Button></Link>
          {/* Title and Apply Button */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              textAlign: { xs: "center", sm: "left" },
              gap: { xs: 2, sm: 0 },
            }}
          >
            <Box>
              <Box
                component="h2"
                sx={{
                  fontSize: { xs: 22, sm: 26, md: 30 },
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                {job.title}
              </Box>
              <Box
                sx={{
                  fontSize: { xs: 12, sm: 14 },
                  color: "#00e676",
                  mt: 0.5,
                }}
              >
                {job.location} &nbsp; | &nbsp; {job.designation}
              </Box>
            </Box>

            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                backgroundColor: "#00e676",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "30px",
                width: { xs: "100%", sm: "170px" },
                px: 4,
                "&:hover": {
                  backgroundColor: "#00c853",
                },
              }}
            >
              {formClicked ? "Back" : "Apply Now"}
            </Button>
          </Box>


          {/* Tags */}
          <Box display="flex" flexWrap="wrap" gap={1} mb={3}>
            {job.tags.map((tag) => (
              <Box
                key={tag}
                sx={{
                  px: 2,
                  py: 0.5,
                  border: "1px solid #00e676",
                  borderRadius: "16px",
                  fontSize: 13,
                  color: "#00e676",
                  backgroundColor: "transparent",
                }}
              >
                {tag}
              </Box>
            ))}
          </Box>
          {!formClicked ? (<Box>
            {/* Description */}
            <Box
              sx={{
                fontSize: { xs: 16, sm: 18, md: 20, lg: 25 },
                color: "#ddd",
                lineHeight: 1.6,
                whiteSpace: "pre-line",
              }}
            >
              {job.description}
            </Box>

            {/* Roles and Responsibilities */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "#fff",
                mt: 5,
                fontSize: { xs: 20, sm: 22, md: 24 },
              }}
            >
              Roles and Responsibilities
            </Typography>

            <Box
              sx={{
                fontSize: { xs: 15, sm: 17, md: 18, lg: 20 },
                color: "#ddd",
                lineHeight: 1.6,
                whiteSpace: "pre-line",
              }}
            >
              <ul style={{ paddingLeft: "20px" }}>
                {job.roleAndResponsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Box>

            {/* Required skills */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "#fff",
                mt: 5,
                fontSize: { xs: 20, sm: 22, md: 24 },
              }}
            >
              Required Skills
            </Typography>

            <Box
              sx={{
                fontSize: { xs: 15, sm: 17, md: 18, lg: 20 },
                color: "#ddd",
                lineHeight: 1.6,
                whiteSpace: "pre-line",
              }}
            >
              <ul style={{ paddingLeft: "20px" }}>
                {job.requiredSkills.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Box>

          </Box>) : (
            <>
              {alert.open && (
                <div
                  style={{
                    padding: '12px',
                    borderRadius: '6px',
                    marginBottom: '16px',
                    color: alert.type === 'success' ? 'green' : 'red',
                    background: alert.type === 'success' ? '#e6ffe6' : '#ffe6e6',
                    border: `1px solid ${alert.type === 'success' ? 'green' : 'red'}`
                  }}
                >
                  {alert.message}
                </div>
              )}

              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{
                  width: '100%',
                  maxWidth: 600,
                  margin: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  mt: 4,
                  color: '#ddd',
                }}
              >
                {/* Name */}
                <TextField
                  label="Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  fullWidth
                  variant="outlined"
                  sx={{
                    '& label': {
                      color: '#aaa',
                    },
                    '& label.Mui-focused': {
                      color: '#00e676',
                    },
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      '& fieldset': { borderColor: '#555' },
                      '&:hover fieldset': { borderColor: '#00e676' },
                      '&.Mui-focused fieldset': { borderColor: '#00e676' },
                    },
                    '& input:-webkit-autofill': {
                      WebkitBoxShadow: '0 0 0 1000px #121212 inset',
                      WebkitTextFillColor: '#fff',
                      caretColor: '#fff',
                      transition: 'background-color 5000s ease-in-out 0s',
                    },
                  }}
                />

                {/* Email */}
                <TextField
                  label="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  fullWidth
                  variant="outlined"
                  sx={{
                    '& label': {
                      color: '#aaa',
                    },
                    '& label.Mui-focused': {
                      color: '#00e676',
                    },
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      '& fieldset': { borderColor: '#555' },
                      '&:hover fieldset': { borderColor: '#00e676' },
                      '&.Mui-focused fieldset': { borderColor: '#00e676' },
                    },
                    '& input:-webkit-autofill': {
                      WebkitBoxShadow: '0 0 0 1000px #121212 inset',
                      WebkitTextFillColor: '#fff',
                      caretColor: '#fff',
                      transition: 'background-color 5000s ease-in-out 0s',
                    },
                  }}
                />

                {/* Mobile */}
                <TextField
                  label="Mobile"
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={(e) => {
                    const input = e.target.value;
                    if (/^\d{0,10}$/.test(input)) {
                      formik.setFieldValue("mobile", input);
                    }
                  }}
                  onBlur={formik.handleBlur}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                  fullWidth
                  variant="outlined"
                  inputProps={{ maxLength: 10 }}
                  sx={{
                    '& label': {
                      color: '#aaa',
                    },
                    '& label.Mui-focused': {
                      color: '#00e676',
                    },
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      '& fieldset': { borderColor: '#555' },
                      '&:hover fieldset': { borderColor: '#00e676' },
                      '&.Mui-focused fieldset': { borderColor: '#00e676' },
                    },
                    '& input:-webkit-autofill': {
                      WebkitBoxShadow: '0 0 0 1000px #121212 inset',
                      WebkitTextFillColor: '#fff',
                      caretColor: '#fff',
                      transition: 'background-color 5000s ease-in-out 0s',
                    },
                  }}
                />


                {/* LinkedIn */}
                <TextField
                  label="LinkedIn (Optional)"
                  name="linkedin"
                  value={formik.values.linkedin}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                  helperText={formik.touched.linkedin && formik.errors.linkedin}
                  fullWidth
                  variant="outlined"
                  sx={{
                    '& label': {
                      color: '#aaa',
                    },
                    '& label.Mui-focused': {
                      color: '#00e676',
                    },
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      '& fieldset': { borderColor: '#555' },
                      '&:hover fieldset': { borderColor: '#00e676' },
                      '&.Mui-focused fieldset': { borderColor: '#00e676' },
                    },
                    '& input:-webkit-autofill': {
                      WebkitBoxShadow: '0 0 0 1000px #121212 inset',
                      WebkitTextFillColor: '#fff',
                      caretColor: '#fff',
                      transition: 'background-color 5000s ease-in-out 0s',
                    },
                  }}
                />

                {/* Resume Upload */}
                <Box>
                  <Typography sx={{ mb: 1, fontSize: 16, color: '#aaa' }}>
                    Upload Resume <span style={{ fontSize: 12 }}>(PDF, DOCX - Max 5MB)</span>
                  </Typography>

                  <Button
                    variant="outlined"
                    component="label"
                    sx={{
                      color: '#00e676',
                      borderColor: '#00e676',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#00c853',
                        backgroundColor: 'rgba(0, 230, 118, 0.08)',
                      },
                    }}
                  >
                    Choose File
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      hidden
                      name="resume"
                      onChange={(e) => {
                        formik.setFieldValue('resume', e.currentTarget.files[0]);
                      }}
                    />
                  </Button>

                  {formik.touched.resume && formik.errors.resume && (
                    <Typography sx={{ fontSize: 12, color: 'red', mt: 1 }}>
                      {formik.errors.resume}
                    </Typography>
                  )}

                  {formik.values.resume && (
                    <Typography sx={{ fontSize: 14, color: '#ddd', mt: 1 }}>
                      Selected: {formik.values.resume.name}
                    </Typography>
                  )}
                </Box>


                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: '#00e676',
                      color: '#000',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#00c853',
                      },
                      px: 4,
                      py: 1,
                      borderRadius: 2,
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </>


          )}
        </Paper>
      </Box>


    </>

  );
};

export default CareersInner;
