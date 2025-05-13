import React from 'react';

const Extra = () => {
  return (
    <section id="extra" className="container mt-5 pt-5">
      <h2 className="text-center mb-4">📣 Sobre Nosotros</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <p className="fs-5">
            Somos <strong>Racoon Brothers</strong>, una marca que nació del amor por lo auténtico, lo artesanal y lo diferente. 
            Nos dedicamos a crear experiencias únicas a través de nuestros productos, conectando con personas que valoran la creatividad y la calidad.
          </p>
          <p className="fs-5">
            Puedes encontrarnos también en redes sociales o enviarnos un mensaje para más información.
          </p>
          <div className="text-center mt-3">
            <a href="#" className="btn btn-outline-dark">Contáctanos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extra;
