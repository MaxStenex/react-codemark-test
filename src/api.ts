import axios from "axios";

export const API_KEY = "114aCwyuAkVZZm8KehpHXwej9FTMcSk3";

export const instance = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=`,
});
