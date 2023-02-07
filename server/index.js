import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRouter from './routes/users.js';

const app = express();

// set up body parser to send requests, 30mb limit for images
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// need to have above app.use routes
app.use(cors());


// add /posts to every route in ./routes/posts
app.use('/posts', postRoutes);
app.use('/user', userRouter);

// greeting route
app.get('/', (req, res) => {
    res.send('Hello, welcome to social media app API')
});

//set the strictQuery option to true globally to suppress the warning
mongoose.set('strictQuery', true);

const PORT = process.env.PORT|| 4000;

mongoose.connect(process.env.CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    // if successfull listen to PORT
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

// mongoose.connect( process.env.CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true })
//     .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//     .catch((error) => console.log(`${error} did not connect`));