module.exports = {
  images: {
    domains: ["www.games-workshop.com", "fakestoreapi.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
