import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css"

function Carausel() {
  return (
    <div className="carausel-container">
        <Carousel controls={false} interval={3000} indicators={false} className="carausel">
            <Carousel.Item >
                <img
                className="d-block w-100 carausel-img"
                src="https://assets.asaxiy.uz/uploads/banner/desktop/63a35bae70765.jpeg.webp"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carausel-img"
                src="https://assets.asaxiy.uz/uploads/banner/desktop/6394802f7d8a9.jpeg.webp"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carausel-img"
                src="https://assets.asaxiy.uz/uploads/banner/desktop/6399bcb7c7789.png.webp"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carausel-img"
                src="https://assets.asaxiy.uz/uploads/banner/desktop/639af9987ef04.jpg.webp"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <img src="https://assets.asaxiy.uz/uploads/toptoday/mobile/639806943e363.jpg" alt="" className="carausel-img carausel-right-img"/>
        <img src="https://assets.asaxiy.uz/uploads/toptoday/desktop/63980684eacea.jpg" alt="" className='carausel-img carausel-right-respons-img' />
    </div>
    
  );
}

export default Carausel;