// ============================================================
//  KARMA AI AGENT - Express.js Backend Server
//  Powered by Google Gemini API (FREE)
//  Run: npm run dev
//  Then open: http://localhost:3000
// ============================================================
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/api/chat", async (req, res) => {
    res.json({ reply: "Server working!" });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
