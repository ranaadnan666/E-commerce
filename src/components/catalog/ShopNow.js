import React from "react";
import Grid from "@mui/material/Grid";
import { border, Box, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
const ShopNow = () => {
  return (
    <Grid>
        {/* ============== Banner.================= */}

      <Stack justifyContent={"space-between"} direction="row" p={1}>
        <Box
          id="banner-image"
          sx={{ width: "100%", height: { xs: "40vh", md: "65vh" } }}
        >
          <Stack width={{ xs: "90%", sm: "70%", md: "60%" }}>
            <Stack
              width={{ xs: "100%", sm: "65%", md: "55%" }}
              rowGap={{ xs: 0.5, sm: 2 }}
              mx={"auto"}
              mt={{ xs: "30px", sm: "100px", md: "30px", lg: "100px" }}
              p={1}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.3rem" },
                  fontWeight: { xs: "700", md: "800" },
                }}
              >
                SHOPPING WITHOUT LIMIT.
              </Typography>
              <Typography>
                you can chose the best option for you, and it does not matter
                whether you are in prague or san francisco. We will deliver your
                purchase anywhere!{" "}
              </Typography>
              <Button sx={{ width: "120px" }} variant="outlined">
                shop now
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
        {/* ============== Nav.================= */}

      <Stack
        id="nav-mini"
        direction={"row"}
        p={"0 1rem"}
        width={{ xs: "80%", sm: "50%", md: "40%", lg: "30%" }}
        sx={{ color: "gray" }}
        justifyContent={"space-around"}
      >
        <span>Home/</span>
        <span>Womens Dress/</span>
        <span>Best Chose</span>
      </Stack>
    </Grid>
  );
};

export default ShopNow;
