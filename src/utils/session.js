export const saveSession = (status) => localStorage.setItem("mimi_session", JSON.stringify(status));
export const getSession = () => JSON.parse(localStorage.getItem("mimi_session") || "false");
export const clearSession = () => localStorage.removeItem("mimi_session");