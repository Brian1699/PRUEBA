// Import packages
const express = require("express");

// Middlewares
const app = express();
app.use(express.json());

// Routes

app.use(require("./routes/index"));

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
