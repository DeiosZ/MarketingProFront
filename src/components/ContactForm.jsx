import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { validateContactForm } from '../utils/validators';
import { sendContactForm } from '../services/formService';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpiar error del campo específico
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar usando el validador externo
    const newErrors = validateContactForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setSubmitStatus(null);

    // Enviar usando el servicio externo
    const result = await sendContactForm(formData);

    if (result.success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitStatus('error');
    }

    setLoading(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contacto" className="py-5 bg-white">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold">¿Hablamos de tu proyecto?</h2>
            <p className="lead">Cuéntanos qué necesitas y te asesoraremos sin compromiso</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="bg-light p-4 p-md-5 rounded shadow-sm">
              {submitStatus === 'success' && (
                <Alert variant="success" onClose={() => setSubmitStatus(null)} dismissible>
                  <i className="bi bi-check-circle-fill me-2"></i>
                  ¡Mensaje enviado con éxito! Te contactaremos pronto.
                </Alert>
              )}
              {submitStatus === 'error' && (
                <Alert variant="danger" onClose={() => setSubmitStatus(null)} dismissible>
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  Hubo un error al enviar. Por favor, inténtalo de nuevo.
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nombre completo *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Correo electrónico *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Mensaje *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit" disabled={loading} size="lg">
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send-fill me-2"></i>
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;