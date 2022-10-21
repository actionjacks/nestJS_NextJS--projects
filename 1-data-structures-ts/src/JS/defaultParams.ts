const register = (
  email: any = requiredParams("email required"),
  login: string
) => {
  login = login || email.split("@")[0];

  return {
    login,
    email,
  };
};

function requiredParams(arg: string) {
  throw new Error(`${arg} is required`);
}

const setVolume = (value: number) => {
  return value ?? 50;
};
