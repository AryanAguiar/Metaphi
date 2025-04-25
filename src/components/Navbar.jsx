import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Container, Box, IconButton, Button, Drawer, List, ListItem, ListItemText, Collapse, Divider, useScrollTrigger, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import logoImg from "../images/logo.svg";
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

            <Box
                sx={{
                    position: "fixed",
                    top: "40px",
                    left: 0,
                    right: 0,
                    zIndex: (theme) => theme.zIndex.appBar,
                    display: "flex",
                    justifyContent: "center",
                    px: 2
                }}
            >
                <AppBar
                    position="static"
                    sx={{
                        width: "100%",
                        maxWidth: { xl: "1260px", lg: "1260px", md: "100%" },  
                        px: 2,
                        borderRadius: "36px",
                        backgroundColor: "#0A0C10",
                        justifyContent: "center",
                    }}
                >

                    <Toolbar
                        disableGutters
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        {/* Logo */}
                        <Box sx={{ flexShrink: 1 }}>
                            <Link to="/" onClick={handleLogoClick}>
                                <img src={logoImg} alt="Logo" style={{ height: "50px" }} />
                            </Link>
                        </Box>

                        {/* Center Nav Links */}
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: 0,
                                justifyContent: "center",
                                alignItems: "center",
                                maxWidth: "668px",
                                flexGrow: 1,
                            }}
                        >
                            {pages
                                .filter((page) => page !== "Contact")
                                .map((page) => {
                                    const path = page.toLowerCase() === "home" ? "/" : `/${page.toLowerCase()}`;
                                    return (
                                        <NavLink
                                            key={page}
                                            to={path}
                                            style={({ isActive }) => ({
                                                textDecoration: "none",
                                                backgroundColor: isActive ? "#15171E" : "transparent", borderRadius: 5, padding: "7px 0",
                                                fontWeight: "bold",
                                                color: "#F9FAFB"
                                            })}
                                        >
                                            <Box
                                                component="span"
                                                sx={{
                                                    padding: "8px 16px",
                                                    fontSize: { md: "13px", lg: "16px" },
                                                    fontWeight: 700,
                                                }}
                                            >
                                                {page}
                                            </Box>
                                        </NavLink>
                                    );
                                })}
                        </Box>

                        {/* Contact Button */}
                        <Box sx={{ flexShrink: 0, display: { xs: "none", md: "flex" }, gap: 2 }}>
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
                                        px: { md: 1, lg: 3 },
                                        py: 1,
                                        boxShadow: "0px 4px 20px rgba(0, 229, 123, 0.4)",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            boxShadow: "0px 6px 24px rgba(0, 229, 123, 0.5)",
                                            transform: "translateY(-1px)",
                                        },
                                    }}
                                >
                                    Request a quote
                                </Button>
                            </Link>
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
                </AppBar>
            </Box>



        </>
    );
};

export default React.memo(Navbar);
