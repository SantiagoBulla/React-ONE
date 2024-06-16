import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:5000"
})

export const buscar = async (url, setData) => {
    const response = await API.get(url);
    setData(response.data);
}