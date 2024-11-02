import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import AddCart from "./AddCart";
import ContactUs from "./ContactUs";
import Home from "./Home";
import NonVeg from "./NonVeg";
import PurchaseHistory from "./PurchaseHistory";
import Veg from "./Veg";

import './App.css';
import { useSelector } from "react-redux";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";
        

function App() {
  const cart=useSelector((state)=>state.cart);
    const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);
  return (
    <>
    <GoogleOAuthProvider clientId="33078851912-5i6kvkl17jqdtjke40b9md1bk1k3tq75.apps.googleusercontent.com" >
    <Router>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/addcart">AddCart{totalItems}</Link>
        <Link to="/purchasehistory">PurchesHistory</Link>
        <Link to="/veg">Veg-items</Link>
        <Link to="/non-veg">NonVeg-items</Link>
        <Link to="/contactus">Contact-Us</Link>
        <Link to="/aboutus">About-Us</Link>
      </nav>
      <GoogleLoginComponent/>
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/addcart" element={<AddCart />} />
        <Route path="/purchasehistory" element={<PurchaseHistory />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/non-veg" element={<NonVeg />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
    </GoogleOAuthProvider>
    </>
  )
}

export default App;