import axios from "axios";


const BASE_URL = "https://dev.api.neuropassword.com/api";


const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export const generateToken = async (passPhrase) => {
  try {
    const response = await api.post("/user/generate-token/", {
      pass_phrase: passPhrase.trim(),
    });

    console.log("🔍 Full API Response:", response.data);

    
    if (!response.data || !response.data.access) {
      throw new Error("Invalid API response. Missing access token.");
    }

    console.log("✅ New Token Generated:", response.data.access);
    
    
    localStorage.setItem("authToken", response.data.access);
    
    return { token: response.data.access }; 
  } catch (error) {
    console.error(" Error generating token:", error.response?.data || error.message);
    throw error;
  }
};




export const clearExpiredToken = () => {
  console.warn("⚠️ Token is invalid or expired. Clearing storage...");
  localStorage.removeItem("authToken");
};

export default api;
