import React, { useState } from "react";

const Ilustration = () => {
  const [showfull, setShowfull] = useState(false);
  const miniatures = [
    "/files/miniatures/001.png",
    "/files/miniatures/002.png",
    "/files/miniatures/003.png",
    "/files/miniatures/004.png",
    "/files/miniatures/005.png",
    "/files/miniatures/006.png",
    "/files/miniatures/007.png",
    "/files/miniatures/008.png",
    "/files/miniatures/009.png",
    "/files/miniatures/010.png"
  ];
  const fullsize = [
    "/files/fullsize/001.png",
    "/files/fullsize/002.png",
    "/files/fullsize/003.png",
    "/files/fullsize/004.png",
    "/files/fullsize/005.png",
    "/files/fullsize/006.png",
    "/files/fullsize/007.png",
    "/files/fullsize/008.png",
    "/files/fullsize/009.png",
    "/files/fullsize/010.png"
  ];
  const [actualpic, setActuapic] = useState(0);
  const Handleclick = (idx, modal) => {
    setActuapic(idx);
    setShowfull(modal);
  };
  return (
    <div className="container">
      <div className="container__block">
        <h3>Ilustraciones</h3>
        <p>
          Aqui podéis ver algunas de mis ilustraciones, desde bocetos simples,
          hasta ilustraciones completas. Cabe recalcar que durante el paso de
          los años he prácticado diferentes estilos de ilustración:
        </p>
        <p>
          Manga, ilustración tradicional(pintura digital), cartoon, concept art,
          diseño de personajes,etc...
        </p>
      </div>
      <div className="container">
        <div className="container__block">
          <h3>algunos bocetos</h3>
          <div className="container__grid">
            {miniatures.map((miniature, idx) => (
              <img
                src={miniature}
                alt=""
                key={idx}
                onClick={() => Handleclick(idx, true)}
              />
            ))}
          </div>
        </div>
      </div>

      {showfull && (
        <div className="modal__image">
          <img
            src={fullsize[actualpic]}
            alt=""
            onClick={() => Handleclick(actualpic)}
          />

          <button className="modalButton" onClick={() => Handleclick(0, false)}>
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
};

export default Ilustration;
