import config from './config/config.js'
import express from "express";
import mongoose from "mongoose";
import postRouter from './routes/postRoutes.js'

const app = express();

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

app.get("/", (req, res) => {
  res.send("<p>dupa_w_w</p>");
});

app.use('/api/v1/posts', postRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});
