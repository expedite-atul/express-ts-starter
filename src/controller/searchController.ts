import request from "request-promise";
import dotenv from "dotenv";

dotenv.config();

export const getPlaces = async (id: number) => {
  const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const response = await request(url);
  return JSON.parse(response);
};