import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { servicesData } from '../data/servicesData';

const Services = () => {
  return (
    <section id="servicios" className="py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold">Nuestros Servicios</h2>
            <p className="lead">Soluciones integrales para tu negocio</p>
          </Col>
        </Row>
        <Row>
          {servicesData.map((service) => (
            <Col md={6} lg={3} key={service.id} className="mb-4">
              <Card className="h-100 text-center shadow-sm border-0">
                <Card.Body>
                  <i className={`bi ${service.icon} display-3 text-${service.color} mb-3`}></i>
                  <Card.Title className="h5 fw-bold">{service.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;