import React from 'react'
import "./Card.css"
import {FaShoppingCart} from "react-icons/fa"
import {FiHeart} from "react-icons/fi"
import {AiOutlineStar} from "react-icons/ai"
import {TiMessage} from "react-icons/ti"
import { useTranslation, } from 'react-i18next';
import {Link} from "react-router-dom"
export default function Card({image,price,title,id,status}) {
    const { t } = useTranslation();
  return (
    <div>
        <div className="card-container">
            {/* <span>salom</span> */}
            <div className="top-image">
                <p>{t('Cardlang.card1')}</p>
                <img src={image} alt="" style={{width:"100%",height:"200px",objectFit:"contain"}} />
                <div className="top-image-icon-container">
                    <div className="card-shop-icon"><FaShoppingCart color='#fff' size={18} /></div>
                    <FiHeart size={25} color='gray' style={{marginTop:"10px",}}/>
                </div>
            </div>
            <div className="card-bottom-info" style={{width:"100%"}}>
                <div className="card-item-name">
                    <Link to={`/product/${id}`} style={{textDecoration:"none"}}>
                       <span>{title}</span>
                    </Link>
                </div>
                <div className="card-item-star-container">
                    <AiOutlineStar size={20} style={{color:"#008DFF",cursor:"pointer"}}/>
                    <AiOutlineStar size={20} style={{color:"#008DFF",cursor:"pointer"}}/>
                    <AiOutlineStar size={20} style={{color:"#008DFF",cursor:"pointer"}}/>
                    <AiOutlineStar size={20} style={{color:"#008DFF",cursor:"pointer"}}/>
                    <AiOutlineStar size={20} style={{color:"#008DFF",cursor:"pointer"}}/>
                    <span><TiMessage/>0 {t('Cardlang.card2')}</span>
                </div>
                <div className="card-item-price-container">
                    <span ><del style={{color:"#AF5679"}}>1 001 000 {t('Cardlang.card3')}</del> </span>
                    <h4 style={{fontSize:"18px",marginBottom:"-5px",marginTop:"-5px"}}>{price} {t('Cardlang.card3')}</h4>
                    <span>109 800 {t('Cardlang.card3')} /12 {t('Cardlang.card4')}</span>
                </div>
                <div className="button-container">
                    <button className='card-but1'>{t('Cardlang.card5')}</button>
                    <button className='card-but2'>{t('Cardlang.card6')}</button>
                </div>
            </div>
        </div>
    </div>
  )
}
