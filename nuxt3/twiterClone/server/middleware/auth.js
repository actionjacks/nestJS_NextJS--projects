import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../utils/jwt.js";
import { sendError } from "h3";
import { getUserById } from "../db/users";

export default defineEventHandler(async (event) => {
  const endpoints = [
    "/api/auth/user",
    "/api/user/tweets",
    "/api/tweets",
    "/api/tweets/:id",
  ];

  const isHandledByThisMiddleware = endpoints.some((endopoint) => {
    const pattern = new UrlPattern(endopoint);

    return pattern.match(event.req.url);
  });

  if (!isHandledByThisMiddleware) {
    return;
  }

  const token = event.req.headers["authorization"]?.split(" ")[1];

  const decoded = decodeAccessToken(token);

  if (!decoded) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      })
    );
  }

  try {
    const userId = decoded.userId;

    const user = await getUserById(userId);

    event.context.auth = { user };
    /* 
        to zosranie przekazane do pasujacych rątow i dołączone do do konkretnego zapytania np
       "/api/user/tweets" -> do POST zostanie dołaczona properta event.context.auth = user
    */
  } catch (error) {
    return;
  }
});
