import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

/**
 * Sends a GET request to the specified URL and returns the response data or an error.
 * @param url - The URL to send the GET request to.
 * @param config - (Optional) Configuration options for the Axios GET request.
 * @returns A Promise that resolves to the response data if the request is successful,
 * or rejects with an error if the request fails.
 */
export const getRequest = async (url: string, config?: AxiosRequestConfig): Promise<any> => {
    try {
        const response: AxiosResponse = await axios.get(url, config || {});
        return response.data;
    } catch (error) {
        return error;
    }
}