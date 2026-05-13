import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold">Sobre MarketingPro</h2>
            <p className="lead">Más de 10 años transformando marcas</p>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <i className="bi bi-quote display-1 text-primary"></i>
            <p className="fs-5">
              Nacimos en 2014 con la misión de democratizar el marketing digital de alta calidad. 
              Hoy, más de 500 clientes confían en nuestra experiencia para hacer crecer sus negocios 
              en entornos digitales cada vez más competitivos.
            </p>
            <hr />
            <div className="mt-4">
              <h5><i className="bi bi-trophy-fill text-warning me-2"></i> Innovación constante</h5>
              <h5 className="mt-3"><i className="bi bi-people-fill text-primary me-2"></i> Equipo humano excepcional</h5>
              <h5 className="mt-3"><i className="bi bi-graph-up text-success me-2"></i> Resultados medibles</h5>
            </div>
          </Col>
          <Col lg={6}>
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="text-primary mb-3">Nuestros valores</h4>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Transparencia total</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Enfoque en resultados</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Creatividad sin límites</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Compromiso con el cliente</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;