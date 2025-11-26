import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const {
  DB_HOST = "database",
  DB_PORT = "27017",
  DB_NAME = "appdb",
  DB_USER,
  DB_PASS
} = process.env;

// Connection string
const uri =
  DB_USER && DB_PASS
    ? `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
    : `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

// Connect to DB (keeps trying if DB not ready)
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("DB connection error:", err));

// Health endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", connected: mongoose.connection.readyState });
});

// Keep API running forever
app.listen(5000, () => console.log("Backend running on port 5000"));

