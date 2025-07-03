# 🧩 Contributing to Swizz

Hey! 👋  
Thanks for showing interest in contributing to **Swizz** — a personal open-source project that aims to bring together many useful online tools (like YouTube downloading, transcription, file conversion, voice recording, and more) into one simple desktop app.

Whether you're fixing bugs, building new tools, improving the UI, or just offering feedback — your help is **very welcome** 💛

---

## 🛠️ How to Get Started

### 1. Fork the Repository  
Click the **"Fork"** button at the top right of this GitHub page.

### 2. Clone Your Fork  
git clone https://github.com/RybsonBybson/swizz.git
cd swizz


---

## ⚙️ Project Structure

swizz/
├── app/                    # Frontend (React + Vite + Electron)
│   ├── package.json
|   ├── assets
|   |   ├── components      # reusable React components that appear in different stages
|   |   ├── css
|   |   └── pages           # React components that work as menu for tools that user uses (YoutubeDownloader, Transcryption etc.)
|   ├── configs
|   |   └── config.json
|   ├── js
|   |   ├── back.js         # javascript backend
|   |   ├── main.js         # Electron script
|   |   ├── preload.js      # used for frontend being able to communicate js backend
|   |   └── tools.js        # other helper functions
|   ├── public              # folder for all graphics etc.
|   ├── python
|   |   ├── main.py         # Python backend
|   |   └── paths.py        # Python file that contains paths for different directories
|   ├── eslint.config.js
|   ├── index.html          # Raw app state
|   ├── package-lock.json
|   ├── package.json
|   └── vite.config.js      # Vite config file
|
├── requirements.txt        # Python dependencies
├── README.md
├── CONTRIBUTING.md
└── .gitignore


---

## 🚀 Running the Project

Requires Python 3.8 or higher. No virtualenv required, but recommended.

pip install -r requirements.txt
cd app
npm run start


---

## ⚒️ Building the Project

cd app
npm run build:app

Built app will show in build folder

---

## 💡 What You Can Help With

✅ Fixing bugs or typos

✨ Adding new tools (e.g. file converters, AI features, voice tools)

🎨 Improving UI/UX

🧹 Refactoring and cleaning up code

📝 Writing or editing documentation

🧪 Testing and giving feedback


---

# 🔄 Making a Contribution

Create a new branch

git checkout -b feature/your-new-feature
Make your changes

Commit with a clear message

git commit -m "feat: add new audio trimming tool"
Push your changes

git push origin feature/your-new-feature
Open a Pull Request (PR)

Describe what you did

Link to related issues (if any)

Mention if something is still in progress

---

# 💬 Need Help?

Feel free to open an Issue if:

You have a question or need clarification

You're not sure how to contribute

You want to discuss an idea first

You can also open a Discussion if enabled.

