# 🧠 Chronos — AI Project Management Dashboard

Chronos is an **AI-powered project management dashboard** built with **Next.js, Supabase, TailwindCSS, and OpenAI**.  
It’s designed for **developers, freelancers, and small teams** who want to track tasks, deadlines, and performance — without drowning in manual tools or chaotic workflows.

---

## 🚀 Overview

Modern work moves fast — but most project management tools are either **too bloated** or **too basic**.  
Chronos aims to fix that by combining **real-time task management**, **AI insights**, and **team analytics** in one seamless dashboard.

Instead of juggling spreadsheets, Trello boards, Notion docs, and chat apps, Chronos centralizes everything and lets AI handle the busywork — summarizing, prioritizing, and suggesting actions.

---

## 🧩 Tech Stack

- **Frontend:** Next.js 15, TypeScript, TailwindCSS, shadcn/ui  
- **Backend:** Supabase (PostgreSQL, Realtime, Edge Functions)  
- **AI Integration:** OpenAI API (for insights & task summaries)  
- **Auth:** Supabase Auth (secure login system)  
- **Charts & Analytics:** Recharts  
- **Monitoring:** Sentry (performance and error tracking)  

---

## 🎯 The Problem

Today’s teams and freelancers are overwhelmed by:
- ❌ Too many tools doing similar things  
- ❌ Manual status updates and task tracking  
- ❌ Poor prioritization and lack of focus  
- ❌ No clear visibility into productivity or performance trends  

Project managers and individual contributors alike waste **hours every week** on status meetings and admin work instead of actually doing the work.

---

## 💡 The Solution

Chronos automates and simplifies project management by merging **AI insights** with **real-time data**:

- ⚙️ **Live task tracking:** Syncs instantly using Supabase realtime APIs.  
- 🧠 **AI-powered insights:** Summarizes daily progress, detects blockers, and ranks priorities.  
- 📊 **Analytics dashboard:** Visualizes completion rates, deadlines, and trends.  
- 🔐 **Secure collaboration:** Built on Supabase Auth and row-level database security.  
- 🪄 **Beautiful UI:** Powered by Tailwind and shadcn/ui — intuitive, fast, and distraction-free.

The result? Teams focus on creating and delivering — not chasing updates.

---

## 🧠 Why I’m Building Chronos

As a developer, I’ve worked on multiple projects where task tracking became chaotic — especially in small, fast-moving teams.  
I realized that **AI could act as a project co-pilot**, helping you focus on impact instead of micromanagement.

Chronos is my attempt to **build a senior-level, real-world SaaS product** that blends:
- Product design thinking 🧩  
- Full-stack architecture 🏗️  
- Practical AI integration 🤖  

It’s not just a portfolio project — it’s a tool I genuinely want to use and improve.

---

## ⚡ Key Features

| Feature | Description |
|----------|--------------|
| 🗂️ Task Management | Add, edit, delete, and organize tasks in real time |
| 🔄 Realtime Sync | Updates instantly across users and sessions |
| 🧠 AI Insights | Smart summaries and priority analysis |
| 📊 Analytics View | Charts for task completion, deadlines, and focus areas |
| 🪄 Smooth UI | shadcn components with Tailwind styling |
| 🔐 Auth System | Secure Supabase authentication |
| 🧰 Developer Friendly | Modular, scalable architecture with TypeScript |

---

## 🧱 Folder Structure

chronos/
├── app/ # App Router pages
│ ├── (dashboard)/ # Main dashboard route
│ ├── layout.tsx
│ └── page.tsx
├── components/ # Reusable UI + feature components
│ ├── ui/ # shadcn components
│ ├── charts/ # Recharts visualizations
│ └── TaskModal.tsx
├── lib/ # Utility and client configs
│ └── supabase.ts
├── types/ # TypeScript types
├── .env.local # Environment variables
├── tailwind.config.ts
├── package.json
└── README.md




---

## 🧰 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/JodiAB/chronos.git
   cd chronos


2. **Install dependencies
   
npm install


3. Add environment variables
Create a .env.local file:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
OPENAI_API_KEY=your_openai_key


4. Run locally

npm run dev


5. Visit:
👉 http://localhost:3000



🧑‍💻 Author

Jodi Abrahams
Front-End & Full-Stack Developer
🌐 Portfolio

💼 LinkedIn

📧 Email