import workImage from '../assets/images/work-image.png';

const UnderConstruction = () => {
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col d-flex flex-column align-items-center justify-content-center">
              <h1>Página en construcción</h1>
          <img style={{ maxHeight: "350px", objectFit: "cover" }} src={workImage} alt="Trabajando"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
