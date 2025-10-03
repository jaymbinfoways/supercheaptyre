import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getTyres = async (data) => {
    console.log(import.meta.env.VITE_BASE_URL)
    return axiosInstance.get(`api/v1/product`);
};

export const getTyreById = async (id) => {
    return axiosInstance.get(`/api/v1/product/${id}`);
};

export const CreateContact = async (payload) => {
    return axiosInstance.post(`/api/v1/contact`, payload);
};

export const getTimeslot = async () => {
    return axiosInstance.get(`api/v1/timeslot`);
};