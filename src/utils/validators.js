export const validateContactForm = (formData) => {
  const errors = {};
  
  if (!formData.name?.trim()) {
    errors.name = 'El nombre es obligatorio';
  }
  
  if (!formData.email?.trim()) {
    errors.email = 'El email es obligatorio';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email no válido';
  }
  
  if (!formData.course || !formData.course.trim()) {
    errors.course = 'Selecciona un curso de interés';
  }
  
  if (!formData.message?.trim()) {
    errors.message = 'El mensaje es obligatorio';
  }
  
  return errors;
};

export const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};