const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
require('./config/dbConnect');

const userRouter = require('./routes/users/userRoutes');
const postRouter = require('./routes/posts/postRoutes');
const commentRouter = require('./routes/comments/commentRoutes');
const categoryRouter = require('./routes/categories/categoryRoutes');

const globalErrorHandler = require('./middlewares/globalErrorHandler');

const app = express();

app.use(express.json())  // pass incoming payload
// middleware

// routes
app.use('/api/users/', userRouter)
app.use('/api/posts/', postRouter)
app.use('/api/comments/', commentRouter)
app.use('/api/categories/', categoryRouter)


// Error Handler
app.use(globalErrorHandler);

// 404 ERROR
app.use('*', (req, res,) => {
  const URL = req.originalUrl;
  res.status(404).json({
    message: `Route does not exist.`
  })
})
// Listen to Server

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running at Port: ${PORT}`)
})