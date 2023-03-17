import React from 'react'
import Stack from "@mui/material/Stack";
import { Link } from 'react-router-dom';

const AccountSide = () => {
  return (
    <Stack rowGap={3} >
      <Link to="/mydashboard" style={{ textDecoration: "none", color: "black", opacity: "0.8", cursor: "pointer", ":hover": { backgroundColor: "#F0F2F2", padding: "10px" } }} >Account Dashboard</Link>
      <Link to="/editaccount" style={{ textDecoration: "none", color: "black", opacity: "0.8", cursor: "pointer", ":hover": { backgroundColor: "#F0F2F2", padding: "10px" } }}>Account Information</Link>
      <Link to="/address" style={{ textDecoration: "none", color: "black", opacity: "0.8", cursor: "pointer", ":hover": { backgroundColor: "#F0F2F2", padding: "10px" } }}>Address Book</Link>
      <Link to="/creatorder" style={{ textDecoration: "none", color: "black", opacity: "0.8", cursor: "pointer", ":hover": { backgroundColor: "#F0F2F2", padding: "10px" } }}>My Orders</Link>
      <Link to="/wishlist" style={{ textDecoration: "none", color: "black", opacity: "0.8", cursor: "pointer", ":hover": { backgroundColor: "#F0F2F2", padding: "10px" } }}>My Wishlist</Link>
      <Link to="/wishlist" style={{ textDecoration: "none", color: "black", opacity: "0.8", cursor: "pointer", ":hover": { backgroundColor: "#F0F2F2", padding: "10px" } }}>Newsletter Subscriptions</Link>

    </Stack>
  )
}

export default AccountSide