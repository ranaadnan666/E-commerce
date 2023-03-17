import React from "react";
import { Route, Routes } from "react-router-dom";
import MainCatalog from "../pages/catalog/MainCatalog";
// import HomeContainer from '../pages/container/Home';
import ArticlePage from "../pages/articlepage/ArticlePage";
import NewAccount from "../components/account/NewAccount";
import Product from "../pages/product/Product";
import Home from "../pages/home/Home";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Grid from "@mui/material/Grid";
import CreateOrder from "../pages/createorder/CreateOrder";
import Wishlist from '../pages/mywishlist/Wishlist';
import MyDashboard from "../components/account/Dashboard";
import Address from "../components/adress/Adress";
import EditAccount from "../components/account/EditAccount";
import Cart from "../pages/cart/Cart";

const RouteSet = () => {
  return (
    <div>
      {/* =========Navbar=========== */}
      <Navbar />
      <Grid mt={3}>
      {/* =========Set All routes=========== */}
        <Routes>
          {/* <Route path='/' element={<HomeContainer />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<MainCatalog />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/newaccount" element={<NewAccount />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/creatorder" element={<CreateOrder />} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path='/mydashboard' element={<MyDashboard/>} />
          <Route path='/address' element={<Address/>} />
          <Route path='/editaccount' element={<EditAccount />} />
          <Route path='/cart' element={<Cart/>} />
          
          {/* </Route> */}
        </Routes>
      </Grid>
      {/* =========Footer=========== */}
      <Footer />
    </div>
  );
};

export default RouteSet;
