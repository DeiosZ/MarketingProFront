import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">
              <i className="bi bi-graph-up-arrow me-2"></i>
              MarketingPro
            </h5>
            <p className="text-white-50 small">
              Agencia líder en marketing digital. Transformamos ideas en resultados tangibles.
            </p>
            <div>
              <a href="#" className="text-white me-3"><i className="bi bi-facebook fs-5"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-instagram fs-5"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-linkedin fs-5"></i></a>
              <a href="#" className="text-white"><i className="bi bi-x-twitter fs-5"></i></a>
            </div>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">Contacto</h5>
            <ul className="list-unstyled text-white-50 small">
              <li className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i> Av. Principal 123, Santiago, Chile
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone-fill me-2"></i> +56 2 1234 5678
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope-fill me-2"></i> hola@marketingpro.cl
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="mb-3">Horario de atención</h5>
            <ul className="list-unstyled text-white-50 small">
              <li className="mb-2">Lunes a Viernes: 9:00 - 18:00 hrs</li>
              <li className="mb-2">Sábado: 10:00 - 14:00 hrs</li>
              <li className="mb-2">Domingo: Cerrado</li>
            </ul>
          </Col>
        </Row>

        <hr className="my-3 bg-secondary" />

        <Row>
          <Col className="text-center text-white-50 small">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} MarketingPro - Todos los derechos reservados.
              <br className="d-md-none" />
              <span className="d-none d-md-inline"> | </span>
              <a href="#" className="text-white-50 text-decoration-none ms-md-2">Política de privacidad</a>
              <span className="mx-1">•</span>
              <a href="#" className="text-white-50 text-decoration-none">Términos y condiciones</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;