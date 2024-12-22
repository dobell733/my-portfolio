exports.handler = async function(event) {
    try {
      const data = JSON.parse(event.body);
      const { name, email, message } = data;
  
      if (!name || !email || !message) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'All fields are required!' }),
        };
      }
  
      console.log('Contact Form Submission:', { name, email, message });
  
      // Send response
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Message sent successfully!' }),
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal server error' }),
      };
    }
  };
  