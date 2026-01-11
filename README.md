# 🧑‍💻 Code of Duty – Hackathon Submission

> **Instructions:**  
> Please edit this README by filling in the required details.  
> Do **not** remove section headings.

---

## 📌 Team Information

- Team Name: Code Alchemist 
- **Team Members:**  
  - Member 1 – Savio Stephen (NSS24ME109)  
  - Member 2 – Shaan Shajith (NSS24ME110)
  - Member 3 – Siddharth K Mohan (NSS24ME116) 
  - Member 4 – Sivani Manoj (NSS24ME117)

- Problem Domain: 4  
- Selected Problem Statement: The rise of online transactions has led to an increase in cyber fraud and digital scams, especially impacting first-time and less-aware internet users.Limited digital literacy and lack of awareness about common fraud patterns make users vulnerable to online financial and identity-related risks.

---

## 🧩 Problem Description

Briefly describe the problem you are addressing. 

In an era of rapid digitalization, online fraud and social engineering scams (phishing links, fake job offers, investment fraud) have become a global epidemic. Most security tools are either too complex for non-technical users or only support English, leaving a massive portion of the population—especially elders, children, and localized language speakers—vulnerable to financial theft and data breaches.
Safenet addresses this gap by providing an accessible, multilingual AI-powered guardian that doesn't just identify threats in real-time but also uses gamification and blocking simulations to educate users, turning digital victims into "Certified Scam Fighters."

Explain the background and why this problem is relevant.
With the explosion of digital payments, cyber-fraud has become a global crisis, causing billions in financial losses. Scammers use psychological tactics (urgency and greed) to exploit the knowledge gap between technology and users—especially elders and children.

This problem is critical because:

Loss of Life Savings: Victims often lose everything in seconds.
Evolution of Scams: Fake QR codes and URLs (amaz0n.com) are harder to detect manually.
Language Barrier: Most security tools ignore local languages like Hindi and Malayalam, leaving millions of people undefended.
Safenet is relevant because it simplifies security, speaks the user’s language, and provides an active shield against evolving digital threats.

---

## 💡 Proposed Solution

Describe your solution clearly:
- What is your approach?
- Our approach is to build a "Zero-Trust Language-First" security shield. We combine a high-speed AI detection engine with a premium, accessible user interface that supports regional languages (Hindi, Malayalam) and voice interaction. Instead of just giving a warning, we provide a proactive defense system that simulates real-world protection measures like link blocking.
- 
- How does it solve the problem?

- Neutralizes URL Complexity: By using a strict Whitelist Verification system, it instantly identifies "look-alike" domains (e.g., amaz0n.com) that humans often miss.
Breaks the Language Barrier: The integrated Multi-language Voice Assistant ensures that even those who cannot read or write English can verify threats through speech.
Active Prevention: Features like QR Scanning and Site Blocking Overlays stop the user at the point of attack, preventing them from ever entering a malicious site.
Education through Play: The Scam Fighter Quiz transforms the user's role from a potential victim to an educated protector by gamifying digital literacy.

- Key idea behind the solution.

- The key idea is Simplification & Accessibility. We believe security shouldn't be a complex technical chore. By making the AI detection invisible and the human interaction as simple as "Scan, Listen, and Stay Safe," we provide a protective barrier that is as intuitive as a personal security guard for every digital citizen.

---

## ⚙️ Technology Stack

Tools & Technologies Used
1. Programming Languages
JavaScript (ES6+): Powers both Frontend interactivity and Backend logic.
HTML5 & CSS3: Used for semantic structure and premium glassmorphism styling.
2. Frameworks & Libraries
Node.js: The runtime environment for the backend.
Express.js: Backend framework for handling APIs and site serving.
Chart.js: Used for rendering dynamic, live fraud statistics on the dashboard.
jsQR: A powerful JavaScript library for real-time QR code decoding.
Canvas-confetti: For high-performance confetti animations in the Gamified Quiz.
3. Tools & Platforms
Web Speech API: Integrated for multilingual Speech-to-Text (STT) and Text-to-Speech (TTS).
LocalStorage API: Used to persist user language preferences across pages.
FontAwesome: For premium vector icons throughout the interface.
VS Code: Primary development environment.
Git & GitHub: For version control and final project hosting.
---

## 🖥️ Implementation Details

--How Safenet Works

1. Overall Workflow
Input Capture: Users can enter suspicious messages via plain text, upload a QR code image, or use the Microphone to speak the content in their local language.
Real-time Analysis: The request is sent to the Node.js backend (
fraudAI.js
). The engine follows a Zero-Trust protocol:
It verifies URLs against a trusted whitelist (e.g., google.com).
It validates the syntax for strict safety (Pure lowercase is safe; Uppercase/Numbers/Symbols are flagged as Spam).
Intelligent Response: The UI displays a live Risk Meter (0-100%). If the risk is critical, a full-screen "Red Alert" overlay blocks the user, effectively "interSimulating" an antivirus intervention.
Multilingual Feedback: The results are read aloud in the user's selected language (English, Hindi, or Malayalam) to ensure the message is understood.
--2. Key Features Implemented
   
Multilingual Interface: Full UI localization and Voice support for regional Indian languages.
Smart QR Scanner: Automated link extraction from images for instant fraud checking.
Interactive Chatbot: A 24/7 dedicated assistant for quick safety tips and fraud reporting.
Gamified Academy: A quiz module that educates users and rewards them with a "Certified Scam Fighter" badge and confetti animations.
Live Dashboard: Real-time visualization of fraud trends and risk analytics using Chart.js.
--3. Challenges Faced & Solutions

Challenge: The "Typosquatting" Problem: Humans easily mistake amaz0n.com for amazon.com.
Solution: We implemented a domain extraction logic that replaces "www." and checks strictly against a whitelist, forcing a "Dangerous" verdict for any slight variation.
Challenge: User Persistence: Users would lose their language settings when moving between pages.
Solution: Integrated the LocalStorage API to "remember" the user's language preference across the session.
Challenge: False Positives in Text: A simple "Hello" was initially flagged as spam because of the strict rules.
Solution: We refined the regex to handle common lowercase greetings and specific email patterns like www.amazon@gmail.com as safe, while keeping uppercase "Warning" messages suspicious.
---

## 📂 Project Structure

safenet/
├── server.js              # Express.js Backend (entry point for the application)
├── fraudAI.js             # Core AI Logic (Strict syntax and URL verification engine)
├── package.json           # Node.js dependencies and project metadata
├── test_fraud_logic.js    # Backend test suite (verifies 100% logic accuracy)
│
├── public/                # Frontend Assets (The "UI Layer")
│   ├── index.html         # Main Landing Page (Vision & Awareness)
│   ├── detect.html        # AI Detector Page (QR/STT/Text analysis)
│   ├── dashboard.html     # Live Intel Page (Chart.js statistics)
│   ├── quiz.html          # Scam Fighter Academy (Gamified Quiz)
│   │
│   ├── style.css          # Global Styles (Glassmorphism & Dark Theme)
│   ├── chatbot.js         # Interactive Chatbot Widget logic
│   ├── voice_manager.js   # Multilingual Web Speech API handler (STT/TTS)
│   ├── translations.js    # Localization Dictionary (EN, HI, ML)
│   └── quiz.js            # Gamification logic & Confetti rewards
│
└── README.md              # Project documentation & Setup guide

---

## 🧪 Screenshots / Demo

Add screenshots of your website or application inside the `screenshots/` folder.



Mention them here:
- Screenshot 1 – Ai detector 
- Screenshot 2 – Home Screen  

*(Screenshots are mandatory for evaluation)*

---









# Safenet - Online Fraud Awareness & Scam Detection Platform

A premium web application designed to detect scams, educate users, and provide real-time fraud intelligence.

## 🚀 Features
- **AI Scam Detector**: Analyze text and links for fraud potential.
- **QR Code Scanner**: Upload image to scan for embedded malicious links.
- **AI Chatbot**: Instant assistant to answer fraud-related questions.
- **Risk Scoring**: Visual gauge showing safety levels.
- **Live Dashboard**: Real-time statistics using Chart.js.
- **Awareness Center**: Educational cards on common scams.
- **Emergency Button**: Quick access to SOS.

---

## 🛠️ How to Run in VS Code

1.  **Open the Project**:
    -   Open VS Code.
    -   Go to **File > Open Folder** and select the folder containing these files.

2.  **Install Dependencies**:
    -   Open the Terminal (`Ctrl + ~`).
    -   Run the following command to install the necessary packages:
        ```bash
        npm install
        ```

3.  **Start the Server**:
    -   In the terminal, run:
        ```bash
        npm start
        ```
    -   You should see: `Safenet Server running on http://localhost:3000`

4.  **View the App**:
    -   Open your browser and go to `http://localhost:3000`.

---

## ☁️ How to Upload to GitHub

1.  **Initialize Git**:
    -   Open the VS Code Terminal.
    -   Run:
        ```bash
        git init
        ```

2.  **Add Files**:
    -   Run:
        ```bash
        git add .
        ```

3.  **Commit Changes**:
    -   Run:
        ```bash
        git commit -m "Initial commit of Safenet App"
        ```

4.  **Connect to GitHub**:
    -   Go to [GitHub.com](https://github.com) and create a **New Repository** (name it `safenet` or similar).
    -   Copy the commands shown under "…or push an existing repository from the command line". It looks like:
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/safenet.git
        git branch -M main
        git push -u origin main
        ```
    -   Paste those commands into your VS Code terminal and press Enter.

5.  **Done!** Your code is now live on GitHub.


