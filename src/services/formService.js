// Servicio de envío de formularios 
export const sendContactForm = (formData) => {
  return new Promise((resolve) => {
   
    const iframe = document.createElement('iframe');
    iframe.name = 'hidden_iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/v.angelnetwork615@gmail.com'; // ← Sin /ajax/
    form.target = 'hidden_iframe';
    

    const formFields = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      _subject: 'Nuevo contacto desde MarketingPro',
      _template: 'table',
      _captcha: 'false'
    };
    
    // Crear inputs ocultos
    Object.keys(formFields).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = formFields[key];
      form.appendChild(input);
    });
    

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    

    setTimeout(() => {
      document.body.removeChild(iframe);
      resolve({ success: true });
    }, 2000);
  });
};