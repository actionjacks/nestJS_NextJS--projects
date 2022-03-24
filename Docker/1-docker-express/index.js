import config from './config/config.js'
import express from "express";
import mongoose from "mongoose";
import redis from 'redis'
import cors from 'cors'
import connectRedis from 'connect-redis';
import session from 'express-session';
const RedisStore = connectRedis(session);

let redisClient = redis.createClient({
  host: config.REDIS_URL,
  port: config.REDIS_PORT
})

import postRouter from './routes/postRoutes.js'
import userRouter from './routes/userRoutes.js'

const app = express();
redis
//  `mongodb://admin:admin@mongo:27017/?authSource=admin`;
const mongoURL =
  `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_IP}:${config.MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
  mongoose.connect(mongoURL, {
    useNewUrlParser: true
  })
    .then(() => console.log('succes CONECTED==>'))
    .catch((err) => {
      console.log('ERROR===>' + err)
      console.log('TRY RECONNECT...')
      setTimeout(connectWithRetry, 5000)
    })
}
connectWithRetry()

app.enable('trust proxy')
app.use(cors({}))
app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: config.SESSION_SECRET,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 30000000
  }
}))

app.use(express.json())

app.get("/api/v1", (req, res) => {
  res.send("<p>express-app</p>");
});

app.use('/api/v1/posts', postRouter)
app.use('/api/v1/users', userRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});
