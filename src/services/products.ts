import { AxiosResponse } from "axios";
import api from "./api";

const endpoint = '/products'

export const getProducts = async (params?: URLSearchParams) => {
    try {
        const response: AxiosResponse = await api.get(`${endpoint}`, { params: params});
        return response.data;

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

export const getProductCategory = async () => {
    try {
        const response: AxiosResponse = await api.get(`${endpoint}/category-list`);
        return response.data;

    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}

export const getProductByCategory = async (category: string, params?: URLSearchParams) => {
    try {
        const response: AxiosResponse = await api.get(`${endpoint}/category/${category}`, {params: params});
        return response.data;

    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}