const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

// Database connection
const pool = new Pool({
  host: process.env.DB_HOST || "database",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "secret",
  database: process.env.DB_NAME || "mydb",
});

// CORS
app.use(cors());

// API test endpoint
app.get("/api", (req, res) => {
  res.json({ message: "Backend API OK!" });
});

// Database test endpoint
app.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// IMPORTANT: bind to 0.0.0.0 for Docker
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});

