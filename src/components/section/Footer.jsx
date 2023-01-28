import React from 'react'
import './Footer.css'
import { BsTelephone } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { GoLocation } from 'react-icons/go'
import { ImFacebook } from 'react-icons/im'
import { FaTelegramPlane, FaYoutube, FaRss } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='Footer-container'>
      <div className="top-side">
        <div className="box">
          <img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />
          <div className="box-item">
            <strong>Endi bozorga borishga hojat yo'q</strong>
            <span>Bizda qulay narxlar va uyga yetkazib berish mavjud</span>
          </div>
        </div>

        <div className="box">
          <img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" />
          <div className="box-item">
            <strong>Tez yetkazib berish</strong>
            <span>Bizning xizmatimiz sizni afablantiradi</span>
          </div>
        </div>

        <div className="box">
          <img src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" />
          <div className="box-item">
            <strong>Siz uchun qulayliklar</strong>
            <span>Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati</span>
          </div>
        </div>

        <div className="box">
          <img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" />
          <div className="box-item">
            <strong>Bo'lib to'lash</strong>
            <span>12 yoki 18 oy davomida oldindan to'lov yo'q</span>
          </div>
        </div>
      </div>

      <div className="mainside">
        <div className="first-column">
          <strong style={{marginBottom:'10px'}}>Ma'lumotlar</strong>
          <span>Muddatli to'lov shartlari</span>
          <span>Muddatli to'lov asosida sotib olishning umumiy qoidalari</span>
          <span>Buyurtma qanday beriladi?</span>
          <span>Ommaviy oferta (Foydalanuvchi bitimi) </span>
          <span>Tovarlarni yetkazib berish va to'lov turlari</span>
          <span>Buyurtmani bekor qilish va qaytarish</span>
          <span>Biz haqimizda</span>
        </div>
        <div className="second-column">
          <strong>Biz bilan aloqa</strong>
          <span><BsTelephone /> +998 71 200 01 05</span>
          <span><CiMail /> info@asaxiy.uz</span>
          <span><GoLocation />Chilonzor 3, Toshkent</span>
          <span></span>
        </div>
        <div className="third-column">
          <strong>Biz ijtimoiy tarmoqlarda</strong>
          <div className="social-media-3c">
            <span><ImFacebook /></span>
            <span><FaTelegramPlane /></span>
            <span><AiOutlineInstagram /></span>
            <span><FaYoutube /></span>
            <span><FaRss /></span>
          </div>
        </div>
      </div>

      <div className="typeOfPayment">
        <p>To'lov turlari:</p>
        <img src="https://asaxiy.uz/custom-assets/images/apelsin-logo.svg" alt="apelsin" />
        <img src="https://asaxiy.uz/custom-assets/images/payme.svg" alt="payme" />
        <img src="https://asaxiy.uz/custom-assets/images/visa.svg" alt="VISA" />
        <img src="https://asaxiy.uz/custom-assets/images/mastercard.svg" alt="MasterCard" />
        <img src="https://asaxiy.uz/custom-assets/images/humo.svg" alt="Humo" />
        <img src="https://asaxiy.uz/custom-assets/images/uzcard.svg" alt="UZcard" />
      </div>
      <p className='Copyright'>
        2015-2022 Internet-do'kon asaxiy.uz: Maishiy texnikalar va boshqalar. Mahsulotni yetkazib berish barcha viloyatlarda amalga oshiriladi. Barcha huquqlar himoyalangan.
      </p>
    </div>
  )
}
