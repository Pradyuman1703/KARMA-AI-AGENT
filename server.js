// ============================================================
//  KARMA AI AGENT - Express.js Backend Server
//  Powered by Google Gemini API (FREE)
//  Run: npm run dev
//  Then open: http://localhost:3000
// ============================================================
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Chat API
app.post("/api/chat", async(req, res) => {
    try {
        const userMessage = req.body.message;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "deepseek/deepseek-chat",
                messages: [{
                    role: "user",
                    content: userMessage
                }]
            })
        });

        const data = await response.json();

        res.json({
            reply: data.choices[0].message.content
        });

    } catch (error) {
        console.error(error);
        res.json({ reply: "AI server error" });
    }
});

// Load index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log("KARMA AI running on port " + PORT);
});
