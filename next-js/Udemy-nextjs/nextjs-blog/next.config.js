const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  // .env for develompment
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "admin",
        mongodb_password: "admin",
        mongodb_clustername: "jacek",
        mongodb_databse: "nextjsblog",
      },
    };
  }

  return {
    env: {
      mongodb_username: "admin",
      mongodb_password: "admin",
      mongodb_clustername: "jacek",
      mongodb_databse: "nextjsblog",
    },
  };
};
