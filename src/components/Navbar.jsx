import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Container, Box, IconButton, Button, Drawer, List, ListItem, ListItemText, Collapse, Divider, useScrollTrigger, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import logoImg from "../images/logo.png";
import gsap from "gsap";

const pages = ["Home", "About", "Services", "Industries", "Resources", "Careers", "Contact"];





const Navbar = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);
    const dropDownRef = useRef(null);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        gsap.fromTo(".nav-item", { opacity: 0, y: -20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 });
    }, []);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);


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
        <>
            <Box sx={{ width: "100%", backgroundColor: "black" }}>
                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        pl: 1,
                        zIndex: (theme) => theme.zIndex.appBar,
                    }}
                >
                    <AppBar
                        position="static"
                        sx={{
                            width: "100%",
                            backgroundColor: "#040506",
                            px: "24px",
                            py: 1,
                        }}
                    >
                        {/* Centered inner container */}
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "1260px",
                                mx: "auto",
                            }}
                        >
                            <Toolbar
                                disableGutters
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                {/* Logo */}
                                <Box sx={{ flexShrink: 1, }}>
                                    <Link to="/" onClick={handleLogoClick}>
                                        <img src={logoImg} alt="Logo" style={{ height: "50px" }} />
                                    </Link>
                                </Box>

                                {/* Center Nav Links */}
                                <Box
                                    sx={{
                                        display: { xs: "none", md: "flex" },
                                        gap: {lg:2, md:.5},
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        maxWidth: "808px",
                                        flexGrow: 1,    
                                    }}
                                >
                                    {pages.map((page) => {
                                        const path = page.toLowerCase() === "home" ? "/" : `/${page.toLowerCase()}`;
                                        return (
                                            <NavLink
                                                key={page}
                                                to={path}
                                                style={{ textDecoration: "none", display: "inline-block" }}
                                            >
                                                {({ isActive }) => (
                                                    <Box
                                                        sx={{
                                                            display: "inline-block",
                                                            borderRadius: "12px",
                                                            padding: "2px",  
                                                            background: isActive
                                                                ? "linear-gradient(90deg, #07B9CE, #3969E7, #7D2AE7)"
                                                                : "transparent",
                                                            transition: "background 0.3s ease",
                                                            "&:hover": {
                                                                background: "linear-gradient(90deg, #07B9CE, #3969E7, #7D2AE7)",
                                                            },
                                                        }}
                                                    >
                                                        <Box
                                                            component="span"
                                                            sx={{
                                                                display: "inline-block",
                                                                padding: "8px 20px",
                                                                borderRadius: "10px",
                                                                backgroundColor: "#040506",  
                                                                color: "#F9FAFB",
                                                                fontSize: { md: "12px", lg: "15px" },
                                                                fontWeight: 400,
                                                            }}
                                                        >
                                                            {page}
                                                        </Box>
                                                    </Box>
                                                )}
                                            </NavLink>

                                        );
                                    })}
                                </Box>

                                {/* Mobile Menu Button */}
                                <IconButton
                                    size="large"
                                    color="inherit"
                                    onClick={handleDrawerToggle}
                                    disableRipple
                                    sx={{
                                        display: { xs: "block", md: "none" },
                                        ml: "auto",
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Toolbar>
                        </Box>
                    </AppBar>
                </Box>
            </Box>
        </>
    );
};

export default React.memo(Navbar);
