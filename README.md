# 🔒 Lockboard

> A minimalist personal dashboard to help you **lock in**—a clean, aesthetic space that centers focus and self-awareness.

![Lockboard Preview](/public/lockboard.png)
[![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## ✨ Features

- **🕐 Real-Time Clock** — 12/24-hour format with live date display
- **🌤️ Weather Widget** — Current conditions with OpenWeather API integration
- **✅ Task Manager** — Full CRUD operations with status tracking and persistence
- **⏱️ Focus Timer** — 25-minute Pomodoro timer with sound notifications
- **💾 Local Persistence** — Tasks and timer state survive page refreshes
- **🎨 Glassmorphism UI** — Modern, clean aesthetic with backdrop blur effects

---

## 🖼️ Demo

<img src='https://i.imgur.com/0lrSwMY.gif' title='Video Walkthrough' width='' alt='Lockboard Walkthrough' />

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18 |
| **Build Tool** | Vite |
| **Styling** | CSS Modules |
| **State Management** | React Hooks (useState, useEffect) |
| **Persistence** | LocalStorage API |
| **API** | OpenWeather API |
| **Date/Time** | Native JavaScript Date |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenWeather API key ([Get one free](https://openweathermap.org/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/lockboard.git
   cd lockboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   echo "VITE_WEATHER_API_KEY=your_api_key_here" > .env
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📖 Usage

### Clock
- Displays current time in 12-hour format with AM/PM
- Shows full date with day of week

### Weather Widget
- Enter your city name
- Toggle between Celsius/Fahrenheit
- Updates with current conditions and temperature range

### Task Manager
- Click **"+ Add Task"** to create new tasks
- Click task name to edit
- Use status dropdown to update progress
- Hover over task to reveal delete button

### Focus Timer
- Click **"▶ Start"** to begin 25-minute focus session
- **"⏸ Pause"** to temporarily stop
- **"🔄 Reset"** to return to 25:00
- Sound notification plays when session completes
- Timer state persists across page refreshes

---

## 🎯 Roadmap

Future enhancements planned:

- [ ] Dark/Light theme toggle
- [ ] Customizable timer durations
- [ ] Task categories and filtering
- [ ] Drag-and-drop task reordering
- [ ] Pomodoro cycle automation (work → break)
- [ ] Export tasks to JSON/CSV
- [ ] Browser notifications
- [ ] Mobile responsive improvements

---

## 🧠 What I Learned

Building Lockboard taught me:

- **React Hooks** — Managing complex state with useState and useEffect
- **API Integration** — Fetching and handling real-time weather data
- **LocalStorage** — Persisting state across sessions
- **CSS Modules** — Scoped styling and glassmorphism effects
- **Timer Logic** — Implementing countdown with setInterval cleanup
- **CRUD Operations** — Full create, read, update, delete functionality
- **Modal Architecture** — Reusable modal component for add/edit flows
- **Event Handling** — Click, keyboard, and form events

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Weather data powered by [OpenWeather API](https://openweathermap.org/)
- Icons from [Emoji Unicode](https://unicode.org/emoji/)
- Inspired by minimalist productivity tools

---

## 📬 Contact

**David** — [Your GitHub](https://github.com/yourusername)

⭐ Star this repo if Lockboard helps you lock in!