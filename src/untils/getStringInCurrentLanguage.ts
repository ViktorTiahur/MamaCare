export default function getStringInCurrectLaguage(obj: string | { en: string; uk: string }, lang: "en" | "uk"): string {
  if (typeof obj === "string") {
    return obj;
  }
  return obj[lang] || obj.en; // Fallback to English if the specified language is not available
};
