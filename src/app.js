const express = require('express');
const app = express();
const port = 3000;
const logger = require('./middleware/logger');
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());
app.use(logger);
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Task Management API');
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    success: false
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});