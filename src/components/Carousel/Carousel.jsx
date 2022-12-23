import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

function CarouselIndex() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="imagen-1"
          src="https://acortar.link/qvbsMP"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Revision de neumaticos y balanceo de ultima generacion</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagen-2"
          src="https://acortar.link/qwf2OM"
          alt="Second slide"
        />
        
        <Carousel.Caption>
          <h3>Mecanica General</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagen-3"
          src="https://acortar.link/i2cUzG"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Decontaminacion y limpieza del vehiculo</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselIndex;
