const axios = require('axios');

(async () => {
  try {
    const { data } = await axios.post('http://localhost:3000/auth/login', {
      username: '123',
      password: '123',
    });

    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();
