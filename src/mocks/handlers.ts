import { rest } from "msw";
import { robotsmock } from "./robotsMock";
import { apiURL } from "../hooks/useApi";

export const handlers = [
  rest.get(`${apiURL}robots`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(robotsmock));
  }),
];
