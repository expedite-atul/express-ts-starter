import { Request, Response } from "express";
import { getPlaces } from "../controller/searchController";

export default [
  {
    path: "/api/v1/search/:id?",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const { id } = req.query;
        console.log(id);
        const result = await getPlaces(id);
        res.status(200).send(result);
      }
    ]
  }
];
