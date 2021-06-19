const axios = require('axios');

(async () => {
  try {
    const { data } = await axios.post(
      'http://localhost:3000/api/auth/register',
      {
        username: 'dupa23',
        password: 'dupa23',
        seller: true,
      },
    );

    console.log(data);

    const { token } = data;
    const { data: res2 } = await axios.get('http://localhost:3000/api/auth', {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(res2);
  } catch (err) {
    console.log(err);
  }
})();
