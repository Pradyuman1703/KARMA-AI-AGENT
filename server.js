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

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
    res.json({
        status: "online",
        server: "KARMA",
        time: new Date()
    });
});

app.post("/api/chat", async(req, res) => {

    try {

        const { messages } = req.body;

        const userMessage = messages[messages.length - 1].content;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {

            method: "POST",

            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                model: "meta-llama/llama-3-8b-instruct",

                messages: [
                    { role: "user", content: userMessage }
                ]

            })

        });

        const data = await response.json();

        let reply = "No response";

        if (data && data.choices && data.choices.length > 0) {

            if (data.choices[0].message && data.choices[0].message.content) {
                reply = data.choices[0].message.content;
            } else if (data.choices[0].text) {
                reply = data.choices[0].text;
            }

        }
        res.json({ reply });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {

    console.log("=================================");
    console.log(" KARMA AI SERVER RUNNING ");
    console.log("=================================");
    console.log("http://localhost:" + PORT);
    console.log("=================================");

});