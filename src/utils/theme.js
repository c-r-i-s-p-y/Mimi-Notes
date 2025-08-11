import { getDatabase, ref, get } from "firebase/database";
import { app } from "./firebase"; // Your firebase.js config file

export async function applyTheme() {
  try {
    const db = getDatabase(app);

    // Get root node
    const snapshot = await get(ref(db, "/"));

    if (!snapshot.exists()) {
      console.error("No data found in Firebase");
      return;
    }

    const data = snapshot.val();
    const mode = data.mode;

    if (!mode) {
      console.error("Mode is missing in database");
      return;
    }

    // Apply theme colors
    if (mode === "dark") {
      document.documentElement.style.setProperty("--theme-bg", "#000000");
      document.documentElement.style.setProperty("--theme-text", "#ffffffff");
      document.documentElement.style.setProperty("--theme-text-second", "#000000");
      document.documentElement.style.setProperty("--theme-primary", "#ffb6c1");
      document.documentElement.style.setProperty("--theme-secondary", "#ffe4e1");
    } else {
      document.documentElement.style.setProperty("--theme-bg", "#ffffff");
      document.documentElement.style.setProperty("--theme-text", "#000000");
      document.documentElement.style.setProperty("--theme-text-second", "#000000");
      document.documentElement.style.setProperty("--theme-primary", "#ff6fb5");
      document.documentElement.style.setProperty("--theme-secondary", "#ffc8dd");
    }

    console.log("🎨 Theme applied:", mode);
  } catch (error) {
    console.error("Theme load failed:", error);
  }
}
