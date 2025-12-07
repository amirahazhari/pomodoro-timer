
If ANY of these exist and are not closed properly → GITHUB WILL BREAK FORMATTING.

---

# 🔥 STEP 2 — DELETE EVERY ` ``` ` IN YOUR EXISTING README.MD

Yes — **remove all triple backticks first.**

Once the file is clean, GitHub will start reading Markdown normally again.

---

# 🔥 STEP 3 — NOW paste the README BELOW (this one is PURE MARKDOWN, no fences)**

👉 **THIS IS SAFE. THIS WILL NOT BREAK GITHUB.**  
👉 **THIS WILL RENDER PERFECTLY.**

Copy the text EXACTLY as shown below:

---

# SEVENTEEN Pomodoro Timer

A lightweight, browser-based Pomodoro timer built using **HTML, CSS, and JavaScript**.  
The application features Pomodoro session logic, background audio playback, track selection, and a glassmorphism UI.

## Overview

This project includes:

- 25/5 Pomodoro cycle (Focus + Break)  
- Start, pause, and reset controls  
- Background audio toggle  
- Selectable audio tracks  
- Display of currently playing track  
- Automatic transition between modes  
- No frameworks required  

## Features

### Pomodoro Logic
- Countdown using `setInterval`  
- Shared `timeRemaining` state  
- Auto-switch on session completion  
- `clearInterval` prevents duplicate timers  

### Audio System
- Native HTML `<audio>` element  
- Tracks loaded via `data-src` attributes  
- Toggle controls playback  
- Continues playing when switching tracks (if enabled)  

### UI Architecture
- Glassmorphism card  
- Custom CSS toggle  
- Active track highlighting  
- Clean markup structure  

## Project Structure

    .
    ├── index.html
    ├── script.js
    ├── style.css
    └── assets/
        ├── Lofi 1.mp3
        ├── Lofi 2.mp3
        └── Lofi 3.mp3

## Getting Started

### 1. Clone the repository

    git clone https://github.com/your-username/seventeen-pomodoro.git

### 2. Open the app  
Open `index.html` in your browser.

### 3. Enable background audio  
Use the **SVT Mix** toggle switch.

### 4. Select a track  
Choose any of the available tracks.

### 5. Start the Pomodoro  
Click **Start**.

## Technologies Used

| Component | Technology |
|----------|------------|
| UI       | HTML5, CSS3 |
| Logic    | JavaScript (ES6) |
| Audio    | Native Audio API |

## Customization

### Change audio tracks  
Replace files in `assets/` and update:

    data-src="assets/MyTrack.mp3"

### Modify timer durations  
Edit in `script.js`:

    const FOCUS_MINUTES = 25
    const BREAK_MINUTES = 5

### Edit theme  
All UI styling is inside `style.css`.

## Potential Enhancements

- User-defined durations  
- Session stats  
- Notifications  
- LocalStorage settings  
- Improved mobile layout  

## Notes

- No copyrighted audio included.  
- Add your own audio files inside `/assets`.

---



