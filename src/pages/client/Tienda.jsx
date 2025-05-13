import React from 'react';

const Tienda = () => {
  return (
    <section id="tienda" className="container mt-5 pt-5">
      <h2 className="text-center mb-4">🏪 Nuestra Tienda</h2>
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <p className="lead">
            Visítanos en nuestra tienda física y descubre productos únicos hechos con pasión.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">📍 Dirección: Av. Principal 123, Lima</li>
            <li className="list-group-item">🕒 Horario: Lunes a Sábado de 9am a 6pm</li>
            <li className="list-group-item">📞 Teléfono: (01) 234-5678</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tienda;
