import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID tx5K71LuDmjJKDG5X_f2agRx3eAI9s0LX9kc4aJGTUA",
  },
});
