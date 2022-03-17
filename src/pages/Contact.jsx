import Mailer from "../Components/Mail/Mailer";
import { Row, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center pt-5">¡Estamos aquí para lo que necesites!</h1>
          <p className="text-center fs-4">Envianos tu consulta y nos pondremos en contacto a la brevedad.</p>
        </Row>
      </Container>
      <Mailer />
    </>
  );
};

export default Contact;