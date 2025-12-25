import axios from "axios";

// Axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get all equipments
export const getEquipment = async () => {
  const res = await API.get("/equipment");
  return res.data;
};

// Add new equipment
export const createEquipment = async (data) => {
  const res = await API.post("/equipment", data);
  return res.data;
};

// Update equipment
export const updateEquipment = async (id, data) => {
  const res = await API.put(`/equipment/${id}`, data);
  return res.data;
};

// Delete equipment
export const deleteEquipment = async (id) => {
  await API.delete(`/equipment/${id}`);
};
