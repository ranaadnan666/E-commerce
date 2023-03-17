import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import CheckboxList from "../../layout/list/SidebarList";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Brand, Size, Dress, Color } from "./ListData";

function valuetext(value) {
  return `${value}°C`;
}
const Sidebar = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid>
      {/* ============== Brand ================= */}

      <CheckboxList title={"Brand"} data={Brand} />

      {/* ============== Size ================= */}
      <Stack sx={{ padding: "0 2rem" }}>
        <h3>Size (Inches)</h3>
      </Stack>
      <Stack
        rowGap={2}
        columnGap={2}
        direction={"row"}
        justifyContent={"space-arround"}
        flexWrap={"wrap"}
        p={"1rem 2rem"}
      >
        {Size?.map((item, i) => {
          return (
            <Button key={i} variant="outlined">
              {item.title}
            </Button>
          );
        })}
      </Stack>

      {/* ============== dress lenght ================= */}
      <CheckboxList title={"Dress lenght"} data={Dress} />

      {/* ============== Colors ================= */}
      <Stack sx={{ padding: "0 2rem" }}>
        <h2>Color</h2>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        p={4}
        rowGap={3}
        columnGap={3}
        flexWrap={"wrap"}
        width={"80%"}
      >
        {Color?.map((item, i) => {
          return (
            <span
              key={i}
              style={{
                height: "30px",
                width: "30px",
                backgroundColor: `${item.title}`,
              }}
            ></span>
          );
        })}
      </Stack>
      {/* ============== Price Range ================= */}

      <Stack sx={{ padding: "0 2rem" }}>
        <h2>Price Range </h2>
      </Stack>
      <Stack sx={{ padding: "1rem 2rem" }}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <p>0.00 EUR</p>
          <p>250.00 EUR</p>
        </Stack>

        <Box sx={{ width:{md:200,lg:280,xl:300} }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
        <Stack direction={"row"} justifyContent={"flex-end"} p={2}>
          <Button sx={{ color: "gray" }} variant="outlined">
            Apply
          </Button>
        </Stack>
      </Stack>
      {/* ============== Dress Lenght ================= */}

      <Stack sx={{ padding: "0 2rem" }}>
        <h2>Dress Lenght </h2>
      </Stack>

      {/* ============== Abbout Dress ================= */}

      <Stack sx={{ padding: "0 2rem" }}>
        <h2>About Dress </h2>
      </Stack>
      <Stack sx={{padding: "0 2rem"}}>
        <p>
          Pretty much anything you can wear with pants to a club, you can also
          wear with a skirt. Button-down shirts, tank tops, bodycon tops,
          midriff tops, you name it. Usually, for a clubbing outfit , you either
          want to go short or long, not in between. A long skirt can look
          glamorous, especially if it's slit
        </p>
      </Stack>
    </Grid>
  );
};

export default Sidebar;
