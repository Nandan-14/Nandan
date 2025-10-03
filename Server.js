// ...existing code...

// ...existing code...
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());


// MySQL Connection (XAMPP)
const db = mysql.createConnection({
  host: "localhost",
  user: "uber",
  password: "uber",
  database: "parshwa",
});

// Test DB Connection
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL (parshwa)");
});

// ---------------- LOGIN API ----------------
app.post("/Login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  const sql = "SELECT * FROM login1 WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Database error" });
    }
    if (results.length > 0) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid username or password" });
    }
  });
});

// ---------------- REGISTER API ----------------
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  const sql = "INSERT INTO login1 (username, password) VALUES (?, ?)";
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ success: false, message: "Username already exists" });
      }
      return res.status(500).json({ success: false, message: "Database error" });
    }
    res.json({ success: true, message: "User registered successfully" });
  });
});


// Run Server
app.listen(5900, () => {
  console.log("🚀 Server running at http://localhost:5900");
});