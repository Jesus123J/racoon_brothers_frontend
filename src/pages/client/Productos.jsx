import React from 'react';

const Productos = () => {
  return (
    <section id="productos" className="container mt-5 pt-5">
      <h2 className="text-center mb-4">🛒 Nuestros Productos</h2>
      <div className="row">
        {[1, 2, 3,4,5,6,7,8,9,10,11,12,13,14].map(num => (
          <div className="col-md-4 mb-4" key={num}>
            <div className="card">
              <img src={`https://via.placeholder.com/300x200?text=Producto+${num}`} className="card-img-top" alt={`Producto ${num}`} />
              <div className="card-body">
                <h5 className="card-title">Producto {num}</h5>
                <p className="card-text">Descripción breve del producto {num}.</p>
                <a href="#" className="btn btn-dark">Ver más</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Productos;
