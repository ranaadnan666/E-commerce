import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, NavLink } from "react-router-dom";
import { Data } from "./NavData";
import { Badge, Stack } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const drawerWidth = 300;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", background: "black" }}
    >
      <Typography variant="h6" color={"white"}>
        CRISP
      </Typography>
      <Divider />
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {/* ============== Navbar.================= */}
        {Data.map(({ id, title, url }) => (
          <Link
            style={{ color: "white", textDecoration: "none" }}
            key={id}
            to={url}
          >
            <Stack direction="column" alignItems="center">
              <p style={{ fontSize: "13px" }}>{title}</p>
            </Stack>
          </Link>
        ))}
      </List>
    </Box>
  );

  {
    /* ============== Navbar. on mpobile view================= */
  }
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} pt={5}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "black" }}>
        <Toolbar
          sx={{ width: { sx: "100%", sm: "100%", md: "97%" } }}
          mx={"auto"}
        >
          {/* <Stack direction={"row"}> */}
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            CRISP
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              columnGap={3}
              alignItems="center"
            >
              {Data.map(({ id, title, url, icon }) => (
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  key={id}
                  to={url}
                >
                  <Stack direction="row" alignItems="center">
                    {icon}
                    <p style={{ fontSize: "13px" }}>{title}</p>
                  </Stack>
                </Link>
              ))}
            </Stack>
          </Box>
          
          <Box sx={{display:{xs:"none",md:"block"}}}>
          <NavLink to="/newaccount" style={{textDecoration:"none",color:"white"}}>
            Sign In create An account
          </NavLink>
          </Box>
          <Box sx={{marginLeft:'5px'}}>
            <NavLink to="/cart" style={{ textDecoration: "none", color: "white" }}>
              <IconButton
                size="large"
                color="inherit"
              >
                <Badge badgeContent={"2"} color="error">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </NavLink>
          </Box>
          <Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
