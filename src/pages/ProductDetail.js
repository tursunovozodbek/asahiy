import React,{useEffect,useState,useRef} from 'react'
import { useParams } from 'react-router-dom'
import {BiHeart} from 'react-icons/bi'
import {BsFillStarFill,} from 'react-icons/bs'
import {MdShoppingBasket} from "react-icons/md"
import {RxDotFilled} from "react-icons/rx"
import { TiMessage } from 'react-icons/ti'
import { useTranslation, } from 'react-i18next';
import {FaFacebookF,FaTelegramPlane,FaTwitter,FaWhatsapp} from "react-icons/fa"

import "./ProductDetail.css"
//Swiper.js 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import "./styles.css";

// import required modules
import { EffectCube, Pagination,Navigation} from "swiper";

export default function ProductDetail() {
  const { t } = useTranslation();

    const [data,setData] = useState([])
    let {id} = useParams()
    console.log(id)
    useEffect(()=>{
      fetch (`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(json => setData(json))
    },[])
    console.log(data)
    const {discountPercentage,title,price,brand,images} = data
    
    const img1 = images?.slice(0,1)[0]
    const img2 = images?.slice(0,2)[1]
    const img3 = images?.slice(0,3)[2]
    const img4 = images?.slice(0,4)[3]
  return (
    <div className="product-container">
        <div className='product-detail-container'>
          <div className="swiper-container">
            <button><BiHeart size={20}/></button>
            <Swiper
                  style={{cursor:"zoom-in"}}
                  modules={[EffectCube, Pagination,]}
                  effect={"cube"}
                  cubeEffect={{
                    shadow: false,
                    slideShadows: true,
                   
                  }}
                  pagination={true}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={img1} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img2} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img3} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={img4} />
                  </SwiperSlide>
              </Swiper>
          </div>
          <div className="product-info-container">
              <div className="product-info-item">
                <h4>{title}</h4>
                <span>${price}</span>
              </div>
              <div className="product-status-item">
                <span>${discountPercentage}/12 {t('Cardlang.card4')}</span>
                <div className="stars-container">
                  <BsFillStarFill className='product-star'/>
                  <BsFillStarFill className='product-star'/>
                  <BsFillStarFill className='product-star'/>
                  <BsFillStarFill className='product-star'/>
                  <BsFillStarFill className='product-star'/>
                  <span><TiMessage/>0 {t('Cardlang.card2')}</span>
                </div>
              </div>
              <div className="brend-container">
                <div className="brend-item">
                  <span style={{fontWeight:"600",fontSize:'18px'}}>{t('productDetail.product1')} {brand}</span>
                  <span style={{marginTop:"10px",fontWeight:"600",fontSize:'18px'}}>{t('productDetail.product2')} <span style={{color:"#34D374"}}><RxDotFilled/>{t('productDetail.product4')}</span></span>
                </div>
                  <div className="social-network-container">
                    <span style={{fontWeight:"600",fontSize:'18px'}}>{t('productDetail.product3')}</span>
                    <div className="network-item" style={{backgroundColor:"#3A5794"}}>
                      <a href="https://www.facebook.com/asaxiyshop/" target="blank"><FaFacebookF size={20}/></a>
                    </div><div className="network-item" style={{backgroundColor:"#0088CC"}}>
                      <a href="https://t.me/asaxiyuz" target="blank"><FaTelegramPlane size={20}/></a>
                    </div>
                    <div className="network-item" style={{backgroundColor:"#32C6EA"}}>
                      <a href=""><FaTwitter size={20}/></a>
                    </div>
                    <div className="network-item" style={{backgroundColor:"#25D366"}}>
                      <a href=""><FaWhatsapp size={20}/></a>
                    </div>
                  </div>
                </div>
                <div className="product-button-container">
                  <button className='product-but1'>{t('productDetail.product6')}</button>
                  <button className='product-but2'> <MdShoppingBasket style={{marginRight:"5px",}} size={25}/>{t('productDetail.product7')}</button>
                  <button className='product-but3'>{t('productDetail.product8')}</button>
                </div>
          </div>
          <div className="right-swiper">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide style={{textAlign:"center",padding:"10px 10px"}}>
                    <span style={{color:"#F26E00",fontWeight:"500",fontSize:"16px"}}>{t('productDetail.product5')}</span>
                    <img style={{width:"100%",height:"60%"}} src="https://assets.asaxiy.uz/product/main_image/desktop//6350e0c327484.jpg.webp" alt="" />
                    <span style={{fontWeight:"400"}}>{t('productDetail.product9')}</span>
                    <div className="right-swiper-price">
                      <span style={{fontWeight:"500",fontSize:"17px",marginLeft:"-15px"}} >2 117 000 {t('Cardlang.card3')}</span>
                      <MdShoppingBasket className='right-swiper-shop'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{textAlign:"center",padding:"10px 10px"}}>
                    <span style={{color:"#F26E00",fontWeight:"500",fontSize:"16px"}}>{t('productDetail.product5')}</span>
                    <img style={{width:"100%",height:"60%"}} src="https://assets.asaxiy.uz/product/main_image/desktop/5e15bd7fd87bf.jpg.webp" alt="" />
                    <span style={{fontWeight:"400"}}>{t('productDetail.product10')}</span>
                    <div className="right-swiper-price">
                      <span style={{fontWeight:"500",fontSize:"17px",marginLeft:"-15px"}} >2 117 000 {t('Cardlang.card3')}</span>
                      <MdShoppingBasket className='right-swiper-shop'/>
                    </div>
                </SwiperSlide>
              </Swiper>
          </div>
        </div>
  </div>
  )
}