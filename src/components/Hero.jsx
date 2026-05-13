import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="bg-primary text-white py-5">
      <Container>
        <Row className="align-items-center min-vh-50 py-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-3 fw-bold mb-4">
              Impulsamos tu <span className="text-warning">crecimiento digital</span>
            </h1>
            <p className="lead mb-4">
              Estrategias personalizadas, resultados medibles. Lleva tu marca al siguiente nivel con MarketingPro.
            </p>
            <Button variant="warning" size="lg" onClick={scrollToContact}>
              Solicita una asesoría gratuita <i className="bi bi-arrow-right-short ms-2"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;