require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("TSMS API Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
