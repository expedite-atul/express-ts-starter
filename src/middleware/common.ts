import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";

export const handleCors = (router: any) =>
  router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: any) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleCompression = (router: any) => {
  router.use(compression());
};
