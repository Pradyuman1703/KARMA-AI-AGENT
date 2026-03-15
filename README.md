# KARMA AI AGENT 🤖
### Knowledge Augmented Reasoning & Multi-source Agent
**B.Tech 4th Semester — Artificial Intelligence Course Project**

---

## 📁 Project Structure

```
karma-agent/
├── server.js          ← Express.js backend (API routes, Anthropic calls)
├── package.json       ← Node dependencies
├── .env               ← Your API key goes here (YOU CREATE THIS)
├── .env.example       ← Template for .env
├── .gitignore
└── public/
    └── index.html     ← Full frontend (HTML + CSS + JS)
```

---

## ⚙️ VS Code Extensions to Install

Open VS Code → Press `Ctrl+Shift+X` → Search and install these:

| # | Extension Name | Extension ID | Why |
|---|----------------|--------------|-----|
| 1 | **ESLint** | `dbaeumer.vscode-eslint` | JavaScript error checking |
| 2 | **Prettier** | `esbenp.prettier-vscode` | Auto code formatting |
| 3 | **Node.js Extension Pack** | `waderyan.nodejs-extension-pack` | Node.js tools |
| 4 | **REST Client** | `humao.rest-client` | Test API routes directly |
| 5 | **Thunder Client** | `rangav.vscode-thunder-client` | Test your Express APIs |
| 6 | **dotENV** | `mikestead.dotenv` | .env file syntax highlighting |
| 7 | **Auto Rename Tag** | `formulahendry.auto-rename-tag` | HTML editing help |
| 8 | **Live Server** | `ritwickdey.liveserver` | (Optional - not needed here) |
| 9 | **GitLens** | `eamodio.gitlens` | Git history tracking |
| 10| **Path Intellisense** | `christian-kohler.path-intellisense` | Auto-complete file paths |

---

## 🚀 How to Run (Step by Step)

### Step 1 — Install Node.js
Download from: https://nodejs.org (choose LTS version)
Verify install:
```
node --version
npm --version
```

### Step 2 — Open the project in VS Code
```
Open VS Code → File → Open Folder → Select karma-agent folder
```
Or from terminal:
```
cd karma-agent
code .
```

### Step 3 — Create your .env file
In VS Code, create a new file called `.env` in the root folder:
```
GEMINI_API_KEY=YOUR_GEMINI_KEY_HERE
PORT=3000
NODE_ENV=development
```

### How to get your FREE Gemini API Key:
1. Go to 👉 **https://aistudio.google.com/app/apikey**
2. Sign in with your **Google account** (Gmail)
3. Click **"Create API Key"**
4. Copy the key and paste it into your `.env` file
5. ✅ That's it — completely FREE, no credit card needed!

### Step 4 — Install dependencies
Open VS Code Terminal (`Ctrl+`` ` ``) and run:
```
npm install
```
This installs: express, cors, dotenv, node-fetch, nodemon

### Step 5 — Start the server
```
npm run dev
```
You will see:
```
╔══════════════════════════════════════════════╗
║        KARMA AI AGENT - SERVER ONLINE        ║
╠══════════════════════════════════════════════╣
║  Local:   http://localhost:3000               ║
║  Health:  http://localhost:3000/api/health    ║
╚══════════════════════════════════════════════╝
```

### Step 6 — Open in Browser
Go to: **http://localhost:3000**

KARMA will launch immediately — no API key prompt, no login!

---

## 🌐 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/health` | Check server status |
| POST | `/api/chat` | Send message to KARMA (uses Claude AI) |
| POST | `/api/websearch` | Get web source links |

### Test /api/health in browser:
```
http://localhost:3000/api/health
```

### Test /api/chat with Thunder Client or REST Client:
```
POST http://localhost:3000/api/chat
Content-Type: application/json

{
  "messages": [{ "role": "user", "content": "Hello KARMA!" }],
  "language": "English",
  "tools": { "web": true, "logic": false, "code": false }
}
```

---

## 🛠️ Troubleshooting

**"Server Offline" shown in KARMA header:**
→ Make sure you ran `npm run dev` first

**"API key not configured" error:**
→ Check your `.env` file exists and has the correct key

**Port 3000 already in use:**
→ Change `PORT=3001` in `.env` and open http://localhost:3001

**Module not found errors:**
→ Run `npm install` again

---

## 📚 Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | Backend web server & API |
| Anthropic Claude API | AI brain (claude-sonnet-4) |
| HTML5 / CSS3 / JS | Frontend interface |
| dotenv | Environment variable management |
| cors | Cross-origin resource sharing |
| nodemon | Auto-restart server on code changes |
| node-fetch | HTTP requests from Node.js |

---

## ✨ Features

- 🤖 AI powered by Claude Sonnet 4 (via Anthropic API)
- 🌐 Web source integration (Google, Wikipedia, Amazon, Ixigo, ArXiv, Stack Overflow, YouTube, GitHub)
- 🌍 11 languages supported (English, Hindi, Tamil, French, German, Spanish, Japanese, Chinese, Arabic, Russian, Portuguese)
- 📊 Real-time activity log with timestamped events
- 🔧 Tool modes: Web Search, Logic, Code
- 💬 Full conversation memory per session
- 📜 Chat history in sidebar
- ⏱️ Session uptime + API call counter
- 🖥️ Express.js backend with rate limiting

---

*KARMA — Built for B.Tech AI Course · Powered by Anthropic Claude*
