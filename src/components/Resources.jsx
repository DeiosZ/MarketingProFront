import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { resourcesData } from '../data/resourcesData';

const Resources = () => {
  return (
    <section id="recursos" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold">Recursos Gratuitos</h2>
            <p className="lead">Aprende y mejora tus estrategias con nuestro contenido exclusivo</p>
          </Col>
        </Row>
        <Row>
          {resourcesData.map((resource) => (
            <Col md={6} lg={4} key={resource.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <i className={`bi ${resource.icon} display-4 text-primary mb-3 d-block`}></i>
                  <Card.Title className="h5 fw-bold">{resource.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {resource.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <small className="text-secondary">
                      <i className="bi bi-download me-1"></i> {resource.type}
                    </small>
                    <Button variant="outline-primary" size="sm" href={resource.link}>
                      Descargar <i className="bi bi-arrow-right-short"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Resources;