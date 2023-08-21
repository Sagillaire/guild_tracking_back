import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

// GET REQUESTS
export const getRequest = async (url: string, config?: AxiosRequestConfig) => {
    try {
        const response: AxiosResponse = await axios.get(url, config || {});
        return response.data
    } catch (error) {
        return error
    }
}