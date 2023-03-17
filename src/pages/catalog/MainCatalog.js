import { Grid } from "@mui/material";
import React from "react";

import ShopNow from "../../components/catalog/ShopNow";
import ShoppingNow from "../../layout/banner/ShopingNow";
import img from "../../images/banner.jpg"
import ShopingCard from "../../components/catalog/MainPage";
const MainCatalog = () => {
  return (
    <Grid>
      {/* ============== Banner image ================= */}
      <ShopNow />
      {/* ============== Shopping card ================= */}
      <ShopingCard />
    </Grid>
  );
};

export default MainCatalog;
