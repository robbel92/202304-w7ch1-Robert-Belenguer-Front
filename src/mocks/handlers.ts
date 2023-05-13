import { rest } from "msw";
import { apiURL } from "../hooks/useApi";
import { robotsmock } from "./robotsMock";

export const handlers = [
  rest.get(`${apiURL}robots`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(robotsmock));
  }),
];
