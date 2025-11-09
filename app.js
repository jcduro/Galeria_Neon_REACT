function GaleriaNeon() {
  const imagenes = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
    'img/06.jpg',
    'img/07.jpg',
    'img/08.jpg',
    'img/09.jpg',
    'img/10.jpg',
    'img/11.jpg',
    'img/12.jpg',
    'img/13.jpg',
    'img/14.jpg',
    'img/15.jpg'
  ];

  const [modalIdx, setModalIdx] = React.useState(null);

  function abrirModal(idx) {
    setModalIdx(idx);
  }

  function cerrarModal(e) {
    // Solo cerrar si el backdrop es clickeado (no la imagen ni las flechas)
    if (e.target.classList.contains('modal-backdrop')) {
      setModalIdx(null);
    }
  }

  function siguiente(e) {
    e.stopPropagation();
    setModalIdx((prev) => (prev + 1) % imagenes.length);
  }

  function anterior(e) {
    e.stopPropagation();
    setModalIdx((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  }

  return (
    <div>
      <div className="titulo">Galería Neon React Puro</div>
      <div className="galeria">
        {imagenes.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`Foto ${idx + 1}`}
            className="galeria-img"
            onClick={() => abrirModal(idx)}
          />
        ))}
      </div>
      {modalIdx !== null && (
        <div className="modal-backdrop" onClick={cerrarModal}>
          <button
            className="modal-flecha modal-flecha-izq"
            onClick={anterior}
            aria-label="Anterior"
          >
            &#8592;
          </button>
          <img
            src={imagenes[modalIdx]}
            className="modal-img"
            alt={`Foto ampliada ${modalIdx + 1}`}
          />
          <button
            className="modal-flecha modal-flecha-der"
            onClick={siguiente}
            aria-label="Siguiente"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<GaleriaNeon />);
