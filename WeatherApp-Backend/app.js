const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDb } = require('./config/mongooseConnection');
const weatherRouter = require('./routes/weatherRoute');

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
    await connectDb();
    console.log('Database connected successfully');
  app.use('/weather', weatherRouter);

  app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      success: false,
      message: err.message || 'An error occurred on the server.',
      stack: err.stack,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

startServer();
