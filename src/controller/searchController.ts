import request from "request-promise";
import dotenv from "dotenv";

dotenv.config();

export const getPlaces = async (query: string) => {
  const key = 1;
  const url = `https://jsonplaceholder.typicode.com/comments?${query}&postId=${key}`;
  const response = await request(url);
  console.log(response);
  return JSON.parse(response);
};