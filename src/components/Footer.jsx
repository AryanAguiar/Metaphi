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
    <Box sx={{ maxWidth: "1480px", margin: "auto", pt: 8, pb: 4 }}>
      <hr />
      {/* Top Section */}
      <Box
        sx={{
          paddingTop: "50px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          px: { xs: 3, sm: 6, md: 12 },
          gap: 8,
        }}
      >
        {/* Left Column */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ position: "relative",}}>
            <Link to="/" onClick={handleLogoClick}>
              <img src={logoImg} alt="Logo" style={{ height: "50px" }} />
            </Link>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Metaphi Innovations
          </Typography>
          <Typography sx={{ color: "#bbb", mt: 1 }}>
            Leading IT Consulting Company Delivering Custom, Innovative Solutions.
          </Typography>
        </Box>

        {/* Right Column - Social & Newsletter */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Stay Connected with Us!
          </Typography>
          <Typography sx={{ color: "#bbb", mt: 1 }}>
            Follow us on social media and stay updated with our latest innovations and insights.
          </Typography>
          <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
            <IconButton sx={{ color: "#3b5998" }}><Facebook /></IconButton>
            <IconButton sx={{ color: "#0077B5" }}><LinkedIn /></IconButton>
            <IconButton sx={{ color: "#C13584" }}><Instagram /></IconButton>
            <IconButton sx={{ color: "#FF0000" }}><YouTube /></IconButton>
          </Box>
        </Box>
      </Box>

      {/* Nav Links Section */}
      <Box sx={{ px: { xs: 3, sm: 6, md: 12 }, py: 6 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
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

          {/* Contact */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Contact Us
            </Typography>
            <Typography sx={{ color: "#bbb", mb: 2 }}>
              Share your project details and take the first step toward success.
            </Typography>
            <Box sx={{ position: "absolute", display: { xs: "none", md: "block" } }}>
              <Link to="/contact" onClick={(e) => e.preventDefault()} >{/*temporary disabled sublinks*/}
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(90deg, #0D47A1, #00C853)",
                    color: "white",
                    borderRadius: "830px",
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", px: { xs: 3, sm: 6 }, pb: 4 }}>
        <Typography sx={{ fontWeight: "bold", mb: 1 }}>Our Offices</Typography>
        <Typography sx={{ color: "#bbb" }}>India – Mumbai, Maharashtra</Typography>

      </Box>

      {/* Bottom Copyright */}
      <Box sx={{ textAlign: "center", borderTop: "1px solid #333", pt: 3, fontSize: "0.85rem", color: "#999" }}>
        ©2025 Metaphi Innovations | All Rights Reserved.
      </Box>
    </Box>
  );
};

export default Footer;
