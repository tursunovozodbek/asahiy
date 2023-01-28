import { useEffect,useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "../Cards/Card";
import "./Section.css"
import Slide from '../Carausel/Slide';

function Section() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => setData(json))
  },[])
  console.log("Data base",data['products'])
  return (
    <Container fluid className='aside-container'>
      <Row>
        <Col md={3} xs={12} className="left-col">
          <div className="left-side-container">
            <div className="left-side-top-title">
              <h2>Kitoblar</h2>
              <img src="https://assets.asaxiy.uz/uploads//5f46535c8c1c3.png" alt="" />
            </div>
            <div className="left-side-item">
              <img src="https://assets.asaxiy.uz/product/main_image/mobile//6358cb160c7db.jpg.webp" alt="" />
              <div className="left-side-title">
                <span>Piter Hopkirk: Katta o'yin. Ikki imperiya to'qnashuvi</span>
                <p>Asaxiy books kitoblari</p>
              </div>
            </div>
            <div className="left-side-item">
              <img src="https://assets.asaxiy.uz/product/main_image/mobile//63a3418b79531.jpg" alt="" />
              <div className="left-side-title">
                <span>"Asaxiy Books yil bestsellerlari 2022"</span>
                <p>Bestseller to'plamlar</p>
              </div>
            </div>
            <div className="left-side-item">
              <img src="https://assets.asaxiy.uz/product/main_image/mobile//63230a5982893.jpg.webp" alt="" />
              <div className="left-side-title">
                <span>Klaus Shvab: To'rtinchi sanoat inqilobi</span>
                <p>Asaxiy books kitoblari</p>
              </div>
            </div>
            <div className="left-side-item">
              <img src="https://assets.asaxiy.uz/product/main_image/mobile//629999705fc48.png.webp" alt="" />
              <div className="left-side-title">
                <span>Super chegirma. Ellikta mashhur kitob</span>
                <p>Bestseller to'plamlar</p>
              </div>
            </div>
            <div className="left-side-item" style={{border:"none"}}>
              <img src="https://assets.asaxiy.uz/product/main_image/mobile//6384393a611c2.jpg.webp" alt="" />
              <div className="left-side-title">
                <span>Beshtasi birda va yetkazib berish bepul!</span>
                <p>Asaxiy books kitoblari</p>
              </div>
            </div>
          </div>
          {data['products']?.slice(0,3)?.map((item)=>
              <Col><Card title={item.title} image={item.images[0]} price={item.price} id={item.id}/></Col>
          )}
        </Col>
        <Col md={9} xs={12}  className='right-col' >
          <Row > 
            <h4 style={{color:"#848896",}}>Yangi chegirmalar</h4>
            {data['products']?.slice(0,8)?.map((item)=>
              <Col><Card title={item.title} image={item.images[0]} price={item.price} id={item.id}/></Col>
            )}
           </Row>
        </Col>
      </Row>
      <Slide />
    </Container>
  );
}

export default Section;