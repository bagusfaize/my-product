import { AxiosResponse } from "axios";
import api from "./api";

const endpoint = '/products'

export const getProducts = async () => {
    try {
        const response: AxiosResponse = await api.get(endpoint);
        return response.data.products;

    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}

export const getProductDetails = async (id: string) => {
    try {
        const response: AxiosResponse = await api.get(`${endpoint}/${id}`);
        return response.data;

    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}