// /home/anas/Desktop/portefolio/portfolio/client/src/services/api.js
import axios from 'axios';

export const sendContactMessage = async (data) => {
  try {
    // Send form data to FormSubmit AJAX endpoint to receive emails directly
    const response = await axios.post('https://formsubmit.co/ajax/haddouanas18@gmail.com', {
      name: data.name,
      email: data.email,
      message: data.message
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    throw new Error('Une erreur est survenue lors de l\'envoi du message.');
  }
};
