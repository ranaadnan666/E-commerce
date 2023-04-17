import * as React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import cardData from "./CardData";
import ShoppingNow from "../../layout/banner/ShopingNow";
import img1 from "../../images/Rectangle 7.1.png";
import MainCard from "../../layout/card/Card";
import Sidebar from "./Sidebar";

const ShopingCard = () => {
  return (
    <Grid container spacing={1}>
          {/* ============== Sidebar section ================= */}

      <Grid xs={1} sm={0} md={3} mt={4} display={{xs:"none",md:"block"}}>
        <Sidebar/>
      </Grid>
      <Grid xs={11.1} sm={12} md={9} mt={3} mx={"auto"} p={1}>
        <Stack
          direction={"row"}
          justifyContent={"flex-end"}
          p={1}
          rowGap={2}
          columnGap={2}
        >
          <Stack width={{xs:"100%",sm:"32%",md:"20%"}}>
            <select style={{padding:"8px"}} name="cars" id="cars">
              <option value="volvo">PRICE (High To Low)</option>
              <option value="saab">PRICE (Low To High)</option>
            </select>
          </Stack>
          <Stack>
            <select style={{padding:"8px"}} name="cars" id="cars">
              <option value="volvo">48</option>
              <option value="saab">50</option>
              <option value="mercedes">52</option>
              <option value="audi">54</option>
            </select>
          </Stack>
        </Stack>
        <Stack
          justifyContent={{ xs: "space-around", md: "space-between" }}
          flexWrap={"wrap"}
          direction={{ xs: "column", sm: "row" }}
          rowGap={2}
          columnGap={2}
        >
          {/* ============== Card component from layout ================= */}
          {cardData.map((item, i) => {
            return (
              <>
                <Grid item key={i} xs={12} sm={4} md={3}>
                  <MainCard
                    img={item.img}
                    title={item.title}
                    price={item.price}
                  />
                </Grid>
              </>
            );
          })}
        </Stack>
        {/* ============== this component from layout ================= */}
        <Grid xs={12}>
          <ShoppingNow image={img1} bgcolor={"black"} txtcolor={"white"} />
        </Grid>

        {/* ============== Card component from layout ================= */}

        <Stack
          justifyContent={{ xs: "space-around", md: "space-between" }}
          flexWrap={"wrap"}
          direction={{ xs: "column", sm: "row" }}
          rowGap={2}
          columnGap={2}
          mt={2}
        >
          {cardData.map((item, i) => {
            return (
              <>
                <Grid item key={i} xs={12} sm={4} md={3}>
                  <MainCard
                    img={item.img}
                    title={item.title}
                    price={item.price}
                  />
                </Grid>
              </>
            );
          })}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ShopingCard;
