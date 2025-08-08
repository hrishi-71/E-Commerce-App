import { Route, Routes } from "react-router-dom";
import CategoryProducts from "./app/Pages/Products/CategoryProducts";
import Contact from "./app/Pages/Contact";
import Home from "./app/Pages/HomePage/Home";
import PageNotFound from "./app/Pages/PageNotFound";
import AllProducts from "./app/Pages/Products/AllProducts";
import SingleProductDetails from "./app/Pages/Products/ProductDetails/SingleProductDetails";
import Cart from "./app/Pages/Cart";
import TopNavbar from "./app/Coponents/Header/TopNavbar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
    const [form, togForm] = useState({ login: false, reg: false })
  const Users = useSelector((state) => state.logs); // if users are stored in `logs`
  const [user, lguser] = useState('User')
  useEffect(() => {
    for (let usernameKey in Users) {
      let username = Users[usernameKey];
      if (username.logged) {
        lguser(username)
        break;
      }else{
        lguser('User')
      }
    }
  }, [Users]);
  return (
    <div>
      <TopNavbar user={user}  form={form} change={togForm} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:categoryName" element={<CategoryProducts />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="product/:productId" element={<SingleProductDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart form={form} change={togForm} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
