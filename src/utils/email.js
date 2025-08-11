export const sendLoginEmail = () => {
  window.emailjs.send("service_id", "template_id", {
    message: "User just logged in to MimiNotes 💖",
  });
};
