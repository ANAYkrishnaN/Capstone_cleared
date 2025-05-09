import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "http://localhost:500/api" : "/api",
	withCredentials: true, 
});

export default axiosInstance;
