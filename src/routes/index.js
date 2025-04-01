import { ticketsRoutes } from "./tickets.js";
import { parseRoutePath } from "../utils/parseRoutePath.js";

export const routes = ticketsRoutes.map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
