// src/lib/i18n.ts
import { init, addMessages } from "svelte-i18n";
import vi from "../locales/vi.json";
import en from "../locales/en.json";
import zh from "../locales/zh.json";

addMessages("vi", vi);
addMessages("en", en);
addMessages("zh", zh);

init({
  fallbackLocale: "vi",
  initialLocale: "vi",
});