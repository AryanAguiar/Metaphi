import React from "react";
import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram, YouTube } from "@mui/icons-material";
import logoImg from "../images/logo.svg";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Blogs", path: "/resources/blogs" },
  { name: "Articles", path: "/resources/articles" },
  { name: "Contact Us", path: "/contact" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Cyber Security Policy", path: "/cyber-security-policy" },
  { name: "Sitemap", path: "/sitemap" }
];

const companyLinks = [
  { name: "About", path: "/about" },
  { name: "Our Expertise", path: "/about/expertise" },
  { name: "Why Choose Us", path: "/about/why-choose-us" },
  { name: "Mission & Vision", path: "/about/mission-vision" },
  { name: "Careers", path: "/about/careers" },
  { name: "Industries", path: "/industries" },
  { name: "Case Study", path: "/case-studies" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Sitemap", path: "/sitemap" },
  { name: "Contact Us", path: "/contact" }
];

const serviceLinks = [
  { name: "Game Development", path: "/services/game" },
  { name: "Mobile App Development", path: "/services/mobile" },
  { name: "Web and CMS Development", path: "/services/web" },
  { name: "E-commerce Development", path: "/services/ecommerce" },
  { name: "Blockchain Development", path: "/services/blockchain" },
  { name: "Salesforce Solutions", path: "/services/salesforce" },
  { name: "AI & Machine Learning", path: "/services/ai-ml" },
  { name: "IoT & Embedded Systems", path: "/services/iot" },
  { name: "DevOps Services", path: "/services/devops" }
];


const Footer = () => {
  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    else {
      navigate("/");
    }
  }

  return (
    <Box sx={{ maxWidth: "1230px", margin: "auto", pt: 8, pb: 4, px: { xs: 4, md: 5 } }}>

      {/* Top Section */}
      <Box
        sx={{
          paddingTop: "50px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",

          gap: 8,
        }}
      >
        {/* Left Column */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ position: "relative", }}>
            <Link to="/" onClick={handleLogoClick}>
              <img src={logoImg} alt="Logo" style={{ height: "50px" }} />
            </Link>
          </Box>
          <Typography sx={{ color: "#bbb", mt: 1, maxWidth: "420px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum  Sed ornare cursus
          </Typography>
        </Box>

        {/* Right Column - Social & Newsletter */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "40px", fontWeight: "600" }}>
            Social Media
          </Typography>
          <Typography sx={{ color: "#bbb", mt: 1, maxWidth: "420px" }}>
            Don't Miss To Follow Us On Our Social Networks Accounts.
          </Typography>
          <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
            <IconButton sx={{ color: "white" }}><Facebook /></IconButton>
            <IconButton sx={{ color: "white" }}><LinkedIn /></IconButton>
            <IconButton sx={{ color: "white" }}><Instagram /></IconButton>
            <IconButton sx={{ color: "white" }}><YouTube /></IconButton>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: '2px',
          width: '100%',
          my:2,
          background: 'linear-gradient(to right, #00c853, #2979ff)',
        }}
      />

      {/* Nav Links Section */}
      <Box  >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(6, 1fr)" },
            gap: 4,
          }}
        >
          {/* Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Quick Links
            </Typography>
            {quickLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                style={{ textDecoration: "none", color: "#bbb", marginBottom: "8px", display: "block" }}
                onMouseEnter={e => (e.target.style.color = "#fff")}
                onMouseLeave={e => (e.target.style.color = "#bbb")}
                onClick={(e) => e.preventDefault()}
              > {/*temporary disabled sublinks*/}
                {link.name}
              </Link>
            ))}
          </Box>

          {/* Main Nav */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Company
            </Typography>
            {companyLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                style={{ textDecoration: "none", color: "#bbb", marginBottom: "8px", display: "block" }}
                onMouseEnter={e => (e.target.style.color = "#fff")}
                onMouseLeave={e => (e.target.style.color = "#bbb")}
                onClick={(e) => e.preventDefault()}
              >{/*temporary disabled sublinks*/}
                {link.name}
              </Link>
            ))}
          </Box>

          {/* Temp footer links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Company
            </Typography>
            {companyLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                style={{ textDecoration: "none", color: "#bbb", marginBottom: "8px", display: "block" }}
                onMouseEnter={e => (e.target.style.color = "#fff")}
                onMouseLeave={e => (e.target.style.color = "#bbb")}
                onClick={(e) => e.preventDefault()}
              >{/*temporary disabled sublinks*/}
                {link.name}
              </Link>
            ))}
          </Box>

          {/* Temp footer links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Company
            </Typography>
            {companyLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                style={{ textDecoration: "none", color: "#bbb", marginBottom: "8px", display: "block" }}
                onMouseEnter={e => (e.target.style.color = "#fff")}
                onMouseLeave={e => (e.target.style.color = "#bbb")}
                onClick={(e) => e.preventDefault()}
              >{/*temporary disabled sublinks*/}
                {link.name}
              </Link>
            ))}
          </Box>

          {/* Temp footer links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Company
            </Typography>
            {companyLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                style={{ textDecoration: "none", color: "#bbb", marginBottom: "8px", display: "block" }}
                onMouseEnter={e => (e.target.style.color = "#fff")}
                onMouseLeave={e => (e.target.style.color = "#bbb")}
                onClick={(e) => e.preventDefault()}
              >{/*temporary disabled sublinks*/}
                {link.name}
              </Link>
            ))}
          </Box>

          {/* Services Nav */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Services
            </Typography>
            {serviceLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                style={{ textDecoration: "none", color: "#bbb", marginBottom: "8px", display: "block" }}
                onMouseEnter={e => (e.target.style.color = "#fff")}
                onMouseLeave={e => (e.target.style.color = "#bbb")}
                onClick={(e) => e.preventDefault()}
              >{/*temporary disabled sublinks*/}
                {link.name}
              </Link>
            ))}
          </Box>


        </Box>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: '2px',
          width: '100%',
          my:2,
          background: 'linear-gradient(to right, #00c853, #2979ff)',
        }}
      />

      {/* Bottom Copyright */}
      <Box sx={{ textAlign: "center", pt: 3, fontSize: "18px", color: "#999" }}>
      © 2025 Metaphi Innovations Pvt. Ltd. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
