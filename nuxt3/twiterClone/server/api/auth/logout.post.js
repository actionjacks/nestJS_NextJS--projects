import { removeRefreshToken } from "~~/server/db/refreshTokens";
import { sendRefreshToken } from "~~/server/utils/jwt";
import { defineEventHandler, H3Event, parseCookies, setCookie } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const cookies = parseCookies(event);

    const refreshToken = cookies.refresh_token;
    await removeRefreshToken(refreshToken);
  } catch (error) {}

  sendRefreshToken(event.node.res, null);

  return { message: "Done" };
});
