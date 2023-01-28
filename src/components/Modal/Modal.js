import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'

export default function Example({Icon}) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div onClick={() => setLgShow(true)}>{Icon}</div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body >
          <div className="Enter-container">
           
            <div className="left-side">
              <h5 className='Enter-title'>Kirish yoki shaxsiy kabinet yaratish</h5>
              <div className='modal-phone'>
                <label>Telefon</label>
                <input type="text" placeholder='+998(__)___-__-__' /><br />
                <button>FAOLLASHTIRISH KODINI OLING</button>
              </div>
            </div>

            <div className="right-side">
              
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
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

