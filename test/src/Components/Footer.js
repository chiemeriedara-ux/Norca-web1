import React from "react";
import { Box, Typography, Link } from "@mui/material";
import './Footer.css';

export default function Footer() {
  return (
    <Box className="footer">
      <Box className="footer-container">
        <Typography variant="h6" className="footer-title">
          Norca Industries
        </Typography>

        <Box className="footer-links">
          <Link href="/" underline="none">Home</Link>
          <Link href="/products" underline="none">Products</Link>
          <Link href="/pricing" underline="none">Pricing</Link>
          <Link href="/blog" underline="none">Blog</Link>
        </Box>

        <Typography variant="body2" className="footer-copy">
          © {new Date().getFullYear()} Norca Industries — All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
}
