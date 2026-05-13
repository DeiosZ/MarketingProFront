
const FORM_SUBMIT_URL = 'https://formsubmit.co/ajax/v.angelnetwork615@gmail.com';

export const sendContactForm = async (formData) => {
  try {
    const response = await fetch(FORM_SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: 'Nuevo contacto desde MarketingPro',
        _template: 'table',
        _captcha: 'false'
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { success: true, data: await response.json() };
  } catch (error) {
    console.error('Error en formService:', error);
    return { success: false, error: error.message };
  }
};