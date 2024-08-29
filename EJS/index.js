import express from "express";
import router from './routes/route.js';

const app = express();

// Set the directory for EJS views
app.set('view engine', 'ejs');

// Use router for routing
app.use("/", router);

// Start server
app.listen(3000, () => {
  console.log("Server Started Now!!!");
});
