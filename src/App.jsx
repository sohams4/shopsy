
import { Routes, Route } from "react-router-dom";
import { Cursor, Logout } from "./components";
import { Home, Login, Bag, Profile, Search, PageNotFound } from "./pages";
import {  AddNewProduct, Customers, Dashboard, Orders, CustomerDetails, OrderDetails } from "./pages/admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Home />} />
        <Route path="/kids" element={<Home />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/product/:id" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/women" element={<Home />}>
          <Route path="all" element={<Home />} />
          <Route path="dresses" element={<Home />} />
          <Route path="skirts" element={<Home />} />
          <Route path="pants" element={<Home />} />
        </Route>

        <Route path="/men" element={<Home />}>
          <Route path="all" element={<Home />} />
          <Route path="hoodies" element={<Home />} />
          <Route path="shirts" element={<Home />} />
          <Route path="pants" element={<Home />} />
        </Route>

        <Route path="/admin" element={<Dashboard />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<OrderDetails />} />
      
          <Route path="add-product" element={<AddNewProduct />} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:id" element={<CustomerDetails />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Cursor />
    </>
  );
}

export default App;
