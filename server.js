const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
// Should allow get data and request.body
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API RUNNING!🐱‍🏍'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/post', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port${PORT}`));
