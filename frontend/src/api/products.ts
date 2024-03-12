import { api } from "./api";
import { Product } from "../types/Product";

// Fetch all products
export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get("/products");
  return response.data;
};

// Fetch a product by id
export const getProduct = async (id: number): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

// Create a new product
export const createProduct = async (
  product: Omit<Product, "id">
): Promise<Product> => {
  const response = await api.post("/products", product);
  return response.data;
};

// Update a product
export const updateProduct = async (
  id: number,
  product: Partial<Product>
): Promise<Product> => {
  const response = await api.put(`/products/${id}`, product);
  return response.data;
};

// Delete a product
export const deleteProduct = async (id: number): Promise<void> => {
  await api.delete(`/products/${id}`);
};
