import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/08/taller-mecanico-2789939.jpg'
        alt='...'
      >
        <h5>Alineado y balanceo</h5>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/08/taller-mecanico-2775341.jpg'
        alt='...'
      >
        <h5>Verificacion mediante sistema computarizado</h5>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://vallecars.com/wp-content/themes/car-fix-lite/images/slides/slider-default.jpg'
        alt='...'
      >
        <h5>Servicios de mantenimiento a todos los carros</h5>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}