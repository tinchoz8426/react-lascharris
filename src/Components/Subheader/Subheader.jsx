import './Subheader.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailIcon from '@mui/icons-material/Email';

export default function Subheader() {
  return (
    <div className="container">
      <div className="row row-container">
        <div className="col subcomponent-container">
          <div className="ship-container__title">
          <LocalShippingIcon
        fontSize="large"
      />
            <h3>Envíos</h3>
          </div>
          <p className="ship-container__paragraph">Realizamos envíos a todo el país, por Correo Argentino.</p>
        </div>
        <div className="col subcomponent-container">
          <div className="ship-container__title">
          <PaymentIcon
        fontSize="large"
      />
            <h3>Medios de pago</h3>
          </div>
          <p className="ship-container__paragraph">Aceptamos efectivo y transferencia bancaria.</p>
        </div>
        <div className="col subcomponent-container">
          <div className="ship-container__title">
          <FmdGoodIcon
        fontSize="large"
      />
            <h3>Puntos de venta</h3>
          </div>
          <p className="ship-container__paragraph">Tenemos diferentes puntos de ventas, en todo el país.</p>
        </div>
        <div className="col subcomponent-container">
          <div className="ship-container__title">
          <EmailIcon
        fontSize="large"
      />
            <h3>Contacto</h3>
          </div>
          <p className="ship-container__paragraph">Siempre estamos en línea para lo que necesites.</p>
        </div>
      </div>
    </div>
  );
}
