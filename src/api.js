import axios from "axios";

const BASE_URL = "https://dev.api.neuropassword.com/api";

// Create Axios instance with default settings
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    "Content-Type": "application/json",
  },
});

// Function to generate token
export const generateToken = async (keySeed) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/generate-token/`, {
      keySeed: keySeed,
    });
    return response.data;
  } catch (error) {
    console.error("Error generating token:", error);
    throw error;
  }
};

// Function to create a folder
export const createFolder = async (folderData) => {
  try {
    const response = await api.post("/folders", folderData);
    return response.data;
  } catch (error) {
    console.error("Error creating folder:", error);
    throw error;
  }
};

export default api;
