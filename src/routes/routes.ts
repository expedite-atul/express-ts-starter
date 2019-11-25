import { Request, Response } from "express";
import { getPlaces } from "../controller/searchController";

export default [
  {
    path: "/api/v1/search",
    method: "get",
    handler: [
      async ({ query }: Request, res: Response) => {
        const result = await getPlaces(query.q);
        res.status(200).send(result);
      }
    ]
  }
];
