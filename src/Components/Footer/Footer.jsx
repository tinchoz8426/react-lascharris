import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import "./Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <h3 className="contact-title">Contactanos</h3>
            </div>
            <div className="contact-tel">
              <WhatsAppIcon />
              <p>221-5940369</p>
            </div>
            <div className="contact-email">
              <EmailIcon/>
              <p>cecimayer@hotmail.com</p>
            </div>
            <div className="contact-city">
              <FmdGoodIcon/>
              <p>La Plata, Buenos Aires</p>
            </div>
          </div>
          <div className="col">
            <div>
              <h3 className="links-title">Links</h3>
            </div>
            <ul className="links-list-container">
              <li className="links-item">
                <Link as={Link} to="/category">Categorias</Link>
              </li>
              <li className="links-item">
                <Link as={Link} to="/payment">Medios de pago</Link>
              </li>
              <li className="links-item">
                <Link as={Link} to="/shipping">Envios</Link>
              </li>
              <li className="links-item">
                <Link as={Link} to="/wip">Nosotras</Link>
              </li>
              <li className="links-item">
                <Link as={Link} to="/wip">Ustedes</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <div>
              <h3 className="extras-title">Extras</h3>
            </div>
            <ul className="extras-list-container">
              <li className="extras-item">
                <Link as={Link} to="/wip">Tips para pañuelos</Link>
              </li>
              <li className="extras-item">
                <Link as={Link} to="/wip">Videos</Link>
              </li>
              <li className="extras-item">
                <Link as={Link} to="/wip">Looks</Link>
              </li>
              <li className="extras-item">
                <Link as={Link} to="/wip">Venta mayorista</Link>
              </li>
              <li className="extras-item">
                <Link as={Link} to="/wip">FAQS</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <div>
              <h3 className="social-title">Nuestras redes</h3>
            </div>
            <div className="icons-social-container">
              <a
                href="https://www.instagram.com/lascharris/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "black" }}
              >
                <InstagramIcon 
                fontSize="large" className="instagram-icon"
                />
              </a>
              <a
                href="https://www.facebook.com/lascharris-100660305075035"
                target="_blank"
                rel="noreferrer"
                style={{ color: "black" }}
              >
                <FacebookIcon
                fontSize="large" 
                className="facebook-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <address style={{ marginBottom:'0', textAlign:'center', color:'black' }}>La Plata, Buenos Aires - Argentina</address>
    </footer>
  );
}

export default Footer;
