import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import { ThreeDots } from "react-loader-spinner";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import NewProduct from "./pages/NewProduct";
import Discounts from "./pages/Discounts";
import Books from "./pages/Books";
import Telephones from "./pages/Telephones";
import Tv from "./pages/Tv";
import Sport from "./pages/Sport";
import OrderPay from "./pages/OrderPay";
import OrderPayStatus from "./pages/OrderPayStatus";
import Favourites from "./pages/Favourites";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/section/Footer";


function App() {
  const [loader, setLoader] = useState(false);
  const Loader = () => {
    return (
      <div style={{height:'100vh',display:"flex",alignItems:"center",justifyContent:"center"}}>
        <ThreeDots
          height="130"
          width="130"
          radius="9"
          color="#008dff"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  };
  useEffect(()=>{
    setLoader(true)
    setTimeout(()=>{
      setLoader(false)
    },2500)
  },[])
  return (
    <>
    {loader?<Loader/>:<div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/newProduct" element={<NewProduct/>}/>
        <Route path="/Discounts" element={<Discounts/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/telephones" element={<Telephones/>}/>
        <Route path="/tv" element={<Tv/>}/>
        <Route path="/sports" element={<Sport/>}/>
        <Route path="/order-pay" element={<OrderPay/>}/>
        <Route path="/order-pay-status" element={<OrderPayStatus/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
      </Routes>
      <Footer />
    </div>}
   </>
  );
}

export default App;
