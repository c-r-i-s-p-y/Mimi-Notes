# HerBirthday - Romantic Quote App

A cute React + Vite app for sharing daily sweet quotes, using Firebase Firestore (frontend-only, no backend).

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Firebase Setup:**
   - Create a Firebase project at https://console.firebase.google.com/
   - Enable Firestore Database (in test mode is fine for personal use).
   - Copy your Firebase config (apiKey, projectId, etc).
   - Create a `.env` file in the `herbirthday` folder with:
     ```env
     VITE_FIREBASE_API_KEY=your_api_key_here
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
     VITE_FIREBASE_PROJECT_ID=your_project_id_here
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
     VITE_FIREBASE_APP_ID=your_app_id_here
     ```

3. **Run the app:**
   ```bash
   npm run dev
   ```
   Open the local URL shown in your terminal.

## Usage
- Writer: Login, set today's quote (overwrites previous).
- Reader: Login, see today's quote (or a random sweet quote if none set).

## Customization
- Edit `src/style.css` for theme tweaks.
- Edit `src/Login.jsx` to change hardcoded passwords or connect to Firestore for password storage.
- See comments in code for where to add/replace Firebase logic.

---
Made with 💖 for her birthday. 