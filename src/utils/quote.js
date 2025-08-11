export const getTodayQuote = async () => {
  try {
    const res = await fetch("https://zenquotes.io/api/today");
    const data = await res.json();
    return data[0]?.q + " - " + data[0]?.a;
  } catch (e) {
    return "You are your best self today!";
  }
};